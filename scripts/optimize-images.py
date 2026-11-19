"""Optimize site images for upload to AWS S3.

Reads every image in public/ (except SKIP), writes an optimized copy to
s3-upload/ at the same relative path, and writes src/utils/assetManifest.json
mapping each original path to the key that should be requested from S3.

- Raster images are converted to WebP when that makes them smaller;
  otherwise the original file is copied unchanged.
- Pixel dimensions are preserved. EXIF orientation is applied so the image
  looks the same as before, and ICC colour profiles are kept.
- public/ is never modified.

Usage (from the project root):  python scripts/optimize-images.py
Requires: Pillow (with WebP support) and numpy.
"""

from __future__ import annotations

import csv
import json
import os
import shutil
import sys
from concurrent.futures import ProcessPoolExecutor
from io import BytesIO
from pathlib import Path

import numpy as np
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
OUT = ROOT / "s3-upload"
MANIFEST = ROOT / "src" / "utils" / "assetManifest.json"
REPORT_CSV = ROOT / "docs" / "image-optimization-report.csv"

RASTER = {".png", ".jpg", ".jpeg", ".webp"}
COPY_AS_IS = {".svg"}

# Not part of the S3 migration: favicon stays in public/, and these files are
# not referenced anywhere in the code (left untouched for now).
SKIP = {
    "tabImg.png",
    "33.png", "35.png", "Banner.png", "DrAbed.png", "DrMarwan.png", "Vector.png",
    "background.png", "comPerson.png", "firstBGAch.png", "firstChart.png",
    "firstSlideBG.png", "firstStud.png", "georgieBethlehem.jpg", "ibrahemJericho.jpg",
    "islamQlaqelia.jpg", "mathBoy.png", "s.jpg", "secStud.png", "secondBGAch.png",
    "secondChart.png", "secondSlideBG.png", "thirdChart.png", "thirdSlideBG.png",
    "thirdStud.png", "thrdRes.jpg", "threePeople.png", "twoPeople.png", "vite.svg",
}

PHOTO_QUALITY = 80      # lossy WebP quality for photographs (JPEG sources)
GRAPHIC_QUALITY = 88    # lossy WebP quality for PNG graphics
LOSSLESS_BIAS = 1.15    # prefer lossless for PNGs unless it is >15% bigger than lossy


def psnr(a: np.ndarray, b: np.ndarray) -> float:
    mse = np.mean((a.astype(np.float64) - b.astype(np.float64)) ** 2)
    return float("inf") if mse == 0 else 10 * np.log10(255.0**2 / mse)


def visible(img: Image.Image) -> np.ndarray:
    """Pixels as they appear on a white page (transparent areas don't count)."""
    if img.mode == "RGBA":
        bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
        img = Image.alpha_composite(bg, img)
    return np.asarray(img.convert("RGB"))


def to_webp(img: Image.Image, **opts) -> bytes:
    buf = BytesIO()
    img.save(buf, "WEBP", method=6, **opts)
    return buf.getvalue()


def optimize(rel: str) -> dict:
    src = PUBLIC / rel
    ext = src.suffix.lower()
    orig_size = src.stat().st_size
    row = {"path": "/" + rel, "original_bytes": orig_size}

    if ext in COPY_AS_IS:
        return {**row, "key": "/" + rel, "optimized_bytes": orig_size, "format": "copied",
                "width": "", "height": "", "psnr_db": "", "data": src.read_bytes()}

    with Image.open(src) as im:
        icc = im.info.get("icc_profile")
        im = ImageOps.exif_transpose(im)
        has_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
        im = im.convert("RGBA" if has_alpha else "RGB")
        w, h = im.size
        extra = {"icc_profile": icc} if icc else {}

        if ext in (".jpg", ".jpeg"):
            data = to_webp(im, quality=PHOTO_QUALITY, **extra)
            fmt = f"webp q{PHOTO_QUALITY}"
        else:
            lossy = to_webp(im, quality=GRAPHIC_QUALITY, alpha_quality=100, **extra)
            lossless = to_webp(im, lossless=True, quality=100, **extra)
            if len(lossless) <= len(lossy) * LOSSLESS_BIAS:
                data, fmt = lossless, "webp lossless"
            else:
                data, fmt = lossy, f"webp q{GRAPHIC_QUALITY}"

        with Image.open(BytesIO(data)) as dec:
            score = psnr(visible(im), visible(dec.convert(im.mode)))

    if len(data) >= orig_size:
        return {**row, "key": "/" + rel, "optimized_bytes": orig_size, "format": "original kept",
                "width": w, "height": h, "psnr_db": "", "data": src.read_bytes()}

    return {**row, "key": None, "optimized_bytes": len(data), "format": fmt,
            "width": w, "height": h, "psnr_db": "lossless" if score == float("inf") else round(score, 1),
            "data": data}


def main() -> int:
    files = sorted(
        p.relative_to(PUBLIC).as_posix()
        for p in PUBLIC.rglob("*")
        if p.is_file() and p.suffix.lower() in RASTER | COPY_AS_IS and p.relative_to(PUBLIC).as_posix() not in SKIP
    )
    print(f"Optimizing {len(files)} images...", flush=True)

    with ProcessPoolExecutor() as pool:
        results = list(pool.map(optimize, files, chunksize=1))

    # Pick WebP keys: replace the extension, unless two sources would clash
    # (e.g. 1.png and 1.jpeg), in which case keep the old extension in the name.
    stems: dict[str, int] = {}
    for r in results:
        if r["key"] is None:
            stem = os.path.splitext(r["path"])[0].lower()
            stems[stem] = stems.get(stem, 0) + 1
    for r in results:
        if r["key"] is None:
            base, old_ext = os.path.splitext(r["path"])
            r["key"] = f"{base}.webp" if stems[base.lower()] == 1 else f"{base}-{old_ext[1:].lower()}.webp"

    if OUT.exists():
        shutil.rmtree(OUT)
    manifest = {}
    for r in results:
        dest = OUT / r["key"].lstrip("/")
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(r.pop("data"))
        if r["key"] != r["path"]:
            manifest[r["path"]] = r["key"]

    MANIFEST.write_text(json.dumps(dict(sorted(manifest.items())), indent=2) + "\n", encoding="utf-8")

    REPORT_CSV.parent.mkdir(parents=True, exist_ok=True)
    with REPORT_CSV.open("w", newline="", encoding="utf-8") as f:
        cols = ["path", "key", "format", "width", "height", "original_bytes", "optimized_bytes", "psnr_db"]
        w = csv.DictWriter(f, fieldnames=cols)
        w.writeheader()
        for r in sorted(results, key=lambda r: r["original_bytes"] - r["optimized_bytes"], reverse=True):
            w.writerow({k: r[k] for k in cols})

    before = sum(r["original_bytes"] for r in results)
    after = sum(r["optimized_bytes"] for r in results)
    print(f"Images: {len(results)}  ->  WebP: {len(manifest)}, kept as-is: {len(results) - len(manifest)}")
    print(f"Before: {before / 1e6:.1f} MB  After: {after / 1e6:.1f} MB  Saved: {(before - after) / 1e6:.1f} MB ({100 * (before - after) / before:.1f}%)")
    print(f"Wrote {OUT.relative_to(ROOT)}/, {MANIFEST.relative_to(ROOT)}, {REPORT_CSV.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
