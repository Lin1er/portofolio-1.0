import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // kamu bisa tambahkan custom properti seperti ini, tapi jangan masukkan module.exports
  allowedDevOrigins:
    process.env.NODE_ENV === "development"
      ? ["local-origin.dev", "*.local-origin.dev"]
      : [],
};

export default nextConfig;
