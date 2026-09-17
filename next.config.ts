import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Panel ekran görüntüleri geniş; modern formatlara dönüştürülsün.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
