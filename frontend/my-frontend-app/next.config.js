/** @type {import('next').NextConfig} */
const Dotenv = require('dotenv-webpack');
const path = require('path');
const env = process.env.NODE_ENV;

const common = {
  reactStrictMode: true,
  esModule: true,
  webpoack: config => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.joinn(__dirname, `.env.${env}`),
        systemvars: true,
      })
    ];
    return config;
  }
}

const nextConfig = (env == 'production') ? {
  basePath: '/static',
  exportPathMap: async function () {
    return {
      '/': { page: '/'},
    }
  },
} : {
  basePath: '',
  reactStrictMode: true,
  swcMinify: true,

  trailingSlash: true,
  rewrites: async function() {
    return [
      {
        basePath: false,
        source: '/api/:slug/',
        destination: 'http://localhost:8000/api/:slug/',
      },
    ]
  },
};

// AJAX request URL is: process.env.MY_DOMAIN + path

module.exports = {...common, ...nextConfig}
