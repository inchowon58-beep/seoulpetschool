import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 랜딩 — Vercel 서버리스 트레이싱(ENOENT) 이슈 회피
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.cattery.co.kr",
        pathname: "/dogboho/**",
      },
    ],
  },
};

export default nextConfig;
