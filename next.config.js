/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint in Vercel build
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript errors in Vercel build
  },
};

export default nextConfig;
