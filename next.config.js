/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Reduce framer-motion bundle size by tree-shaking unused exports
    optimizePackageImports: ["framer-motion"],
  },
  // Compress responses
  compress: true,
};

module.exports = nextConfig;
