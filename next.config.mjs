/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
    domains: ['placeholder.svg'],
  },
};

export default nextConfig;
