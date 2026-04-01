import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(md|mdx)$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
