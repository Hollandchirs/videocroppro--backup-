import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  outputFileTracingRoot: path.join(__dirname),
  // Empty turbopack config to allow webpack config in Next.js 16
  turbopack: {},
  redirects: async () => {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.freecropper.com" }],
        destination: "https://freecropper.com/:path*",
        permanent: true,
      },
      {
        source: "/convert-video-to-1-1",
        destination: "/1-1-square-video-converter",
        permanent: true,
      },
      {
        source: "/convert-video-to-4-5",
        destination: "/4-5-video-converter",
        permanent: true,
      },
      {
        source: "/crop-video-for-youtube-shorts",
        destination: "/shorts-video-cropper",
        permanent: true,
      },
      {
        source: "/crop-video-for-instagram-reels",
        destination: "/reels-video-cropper",
        permanent: true,
      },
      {
        source: "/crop-video-for-twitter",
        destination: "/twitter-video-cropper",
        permanent: true,
      },
      {
        source: "/free-video-cropper-no-signup",
        destination: "/video-cropper-no-signup",
        permanent: true,
      },
      {
        source: "/convert-16-9-to-9-16",
        destination: "/landscape-to-vertical",
        permanent: true,
      },
      {
        source: "/crop/tiktok",
        destination: "/tiktok-video-cropper",
        permanent: true,
      },
      {
        source: "/resize-video-for-linkedin",
        destination: "/linkedin-video-resizer",
        permanent: true,
      },
    ];
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          }
        ]
      }
    ];
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
