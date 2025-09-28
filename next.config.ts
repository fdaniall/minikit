import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  async redirects() {
    return [
      {
        source: "/.well-known/farcaster.json",
        destination:
          "https://api.farcaster.xyz/miniapps/hosted-manifest/01998e9c-7fbf-484b-3637-16da15f1d0a0",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
