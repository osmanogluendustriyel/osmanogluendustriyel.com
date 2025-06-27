/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/osmanogluendustriyel.com',
  assetPrefix: '/osmanogluendustriyel.com/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig;
