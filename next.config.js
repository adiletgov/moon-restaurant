/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com", "images.unsplash.com"],
  },
  output: 'export', // for Next.js 13+ App Router
  basePath: '/moon-restaurant', // repo name
  assetPrefix: '/moon-restaurant/', // repo name
};

module.exports = nextConfig;
