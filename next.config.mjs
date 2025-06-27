/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/osmanogluendustriyel.com',
  assetPrefix: '/osmanogluendustriyel/',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig