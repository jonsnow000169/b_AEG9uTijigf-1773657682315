/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 IMPORTANT for static hosting

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;