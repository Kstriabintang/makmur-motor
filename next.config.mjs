/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Uploaded photos are served from a dynamic route (/api/images/...) backed
    // by Cloudflare KV; the Next image optimizer is disabled so both these and
    // the static car photos serve reliably on Cloudflare Workers.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  reactStrictMode: true,
};

export default nextConfig;

// Enable Cloudflare bindings (D1, KV) during `next dev` via miniflare.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
