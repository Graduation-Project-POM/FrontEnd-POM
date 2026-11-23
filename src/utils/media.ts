// Remote media hosted on AWS S3 (bucket: pmo-storage, region: eu-north-1).
// Override with VITE_MEDIA_BASE_URL in .env if the bucket/CDN changes.
export const MEDIA_BASE_URL: string = (
  import.meta.env.VITE_MEDIA_BASE_URL ?? "https://pmo-storage.s3.eu-north-1.amazonaws.com"
).replace(/\/+$/, "");

/**
 * Build an absolute URL for an S3 object key, e.g. s3Url("imoImgs/imo-01.jpeg").
 * Each path segment is URL-encoded, so keys with spaces or parentheses work.
 */
export const s3Url = (key: string): string =>
  `${MEDIA_BASE_URL}/${key
    .replace(/^\/+/, "")
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
