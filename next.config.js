/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mindwords.xyz',
        port: '',
        pathname: '/files/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
