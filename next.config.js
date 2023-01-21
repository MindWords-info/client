/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mindwords.info',
        port: '8000',
        pathname: '/files/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
