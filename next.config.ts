import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  output: 'standalone',
  basePath: process.env.PAGES_BASE_PATH,
  logging: {
    fetches: {
      hmrRefreshes: true,
      fullUrl: true,
    },
  },
  // images: { unoptimized: true },
};
export default nextConfig;
