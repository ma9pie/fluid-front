/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ['api.web3modal.com'],
  },
};

module.exports = nextConfig;
