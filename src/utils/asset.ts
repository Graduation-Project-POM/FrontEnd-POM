// Builds the URL for a site image.
//
// Images live in AWS S3 (optionally behind CloudFront). Set VITE_ASSET_BASE_URL
// to the bucket or CDN address, e.g.
//   VITE_ASSET_BASE_URL=https://pmo-assets.s3.eu-central-1.amazonaws.com
//
// Images are optimized before upload (scripts/optimize-images.py), and most
// become WebP. assetManifest.json maps each original path to its S3 key, so
// code keeps using the original names: "/s4.jpg" is served as "<base>/s4.webp".
// Paths not in the manifest are uploaded unchanged under the same key.
//
// When the variable is not set (local development), the original images are
// served from /public as before.
import manifest from "./assetManifest.json";

const BASE = (import.meta.env.VITE_ASSET_BASE_URL ?? "").trim().replace(/\/+$/, "");
const KEYS: Record<string, string> = manifest;

export function asset(path: string): string {
  const original = path.startsWith("/") ? path : `/${path}`;
  if (!BASE) return encodeURI(original);
  return `${BASE}${encodeURI(KEYS[original] ?? original)}`;
}

export default asset;
