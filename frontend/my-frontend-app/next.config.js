/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/api/:slug/',
        destination: 'http://localhost:8000/api/:slug/',
      },
    ]
  },
}

module.exports = nextConfig
