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
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    // Exclude @ffmpeg packages from bundling - loaded from CDN at runtime
    config.externals = [...(config.externals || []), '@ffmpeg/ffmpeg', '@ffmpeg/util'];

    // Allow webpackIgnore for dynamic imports from CDN
    config.module = config.module || {};
    (config.module as any).unknownContextCritical = false;
    (config.module as any).unknownContextRegExp = /^\.\/.*$/;
    (config.module as any).exprContextCritical = false;

    // Ignore https:// imports in dynamic imports
    config.ignoreWarnings = [
      (warning: any) =>
        warning.message.includes("Critical dependency: the request of a dependency is an expression"),
    ];

    return config;
  },
};

export default nextConfig;
