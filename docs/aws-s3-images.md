# Serving site images from AWS S3

All site images go through one helper, `src/utils/asset.ts`:

```ts
import { asset } from "../utils/asset";

<img src={asset("/s4.jpg")} />          // -> <VITE_ASSET_BASE_URL>/s4.jpg
```

- Images are optimized before upload. The S3 key is the file's path under `public/`, usually with a `.webp` extension, e.g. `public/imoImgs/imo-01.jpeg` → `imoImgs/imo-01.webp`. The exact mapping is in `src/utils/assetManifest.json`; code always uses the original name.
- If `VITE_ASSET_BASE_URL` is empty, images load from `public/` as before, so local development needs no AWS setup.
- S3 keys are **case-sensitive**: `Slide2.JPG` and `slide2.jpg` are different objects. Reference names exactly as they appear on disk.
- When adding a new image, follow step 3.

Fonts, PDFs, videos and the favicon (`tabImg.png`) are still served from `public/`.

## 1. Create the bucket

In the AWS console → S3 → **Create bucket**, choose a name (e.g. `pmo-site-images`) and a region close to your users (e.g. `eu-central-1`).

Pick **one** way to make images readable:

**A. CloudFront (recommended).** Keep "Block all public access" **on**. Create a CloudFront distribution with the bucket as origin and **Origin access control (OAC)**; CloudFront shows the bucket policy to paste. Images are cached at the edge and served over HTTPS. Base URL: `https://<id>.cloudfront.net`.

**B. Public bucket (simplest).** Turn "Block all public access" **off** for this bucket and add this bucket policy (Permissions → Bucket policy), replacing the bucket name:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadImages",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::pmo-site-images/*"
    }
  ]
}
```

Base URL: `https://pmo-site-images.s3.eu-central-1.amazonaws.com`.

CORS is not needed: images are loaded with `<img>` tags and CSS backgrounds.

## 2. Install and configure the AWS CLI

Install from https://aws.amazon.com/cli/, then run `aws configure` with an IAM user's access key that can write to the bucket (`s3:PutObject`, `s3:ListBucket`).

## 3. Optimize, then upload the images

First build the optimized copies (needs Python with Pillow and numpy):

```sh
python scripts/optimize-images.py
```

This writes `s3-upload/` (not committed) and updates `src/utils/assetManifest.json`, which tells `asset()` the S3 name of each image (most become `.webp`). `public/` is not changed. Commit the updated manifest, then upload from the project root (works in PowerShell and Git Bash):

```sh
aws s3 sync s3-upload s3://pmo-site-images --cache-control "public, max-age=31536000, immutable"
```

`sync` only uploads new or changed files. The CLI sets each file's `Content-Type` from its extension (`image/webp` for WebP).

When adding a new image: put it in `public/`, reference it with `asset("/name.ext")`, re-run the optimizer, commit the manifest, and sync again.

Because of the one-year cache header, **give a changed image a new file name** instead of overwriting it, or browsers and CloudFront will keep showing the old one.

## 4. Point the site at S3

Create `.env.production` (or set the variable in your hosting provider's build settings):

```
VITE_ASSET_BASE_URL=https://pmo-site-images.s3.eu-central-1.amazonaws.com
```

Then build with `npm run build`. The URL is baked in at build time, so rebuild after changing it.

To test against S3 locally, put the same line in `.env.local` and run `npm run dev`.

## 5. Check, then slim down `public/`

Open the built site and confirm images load from the S3/CloudFront address (browser DevTools → Network). Once everything works, the uploaded images can be removed from `public/`, so they stop being copied into every build. Local development then needs `VITE_ASSET_BASE_URL` set in `.env.local`.
