/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/events',
  trailingSlash: true,
  distDir: 'dist',
}

module.exports = nextConfig
