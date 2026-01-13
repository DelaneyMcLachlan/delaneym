/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/delaneym' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/delaneym' : '',
}

module.exports = nextConfig

