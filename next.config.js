/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ ignore TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ ignore ESLint errors during build
  },
};

module.exports = nextConfig;

