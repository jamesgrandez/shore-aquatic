import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
  async redirects() {
    return [
      // www → non-www canonical redirect
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.shoreaquatic.com" }],
        destination: "https://shoreaquatic.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
