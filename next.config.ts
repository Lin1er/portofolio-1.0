import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["streak-stats.demolab.com"],
  },
  async headers() {
    return [
      {
        source: "/projects/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // kamu bisa tambahkan custom properti seperti ini, tapi jangan masukkan module.exports
  allowedDevOrigins:
    process.env.NODE_ENV === "development"
      ? ["local-origin.dev", "*.local-origin.dev"]
      : [],
};

export default nextConfig;
