// next.config.js (Corrected version)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tells Next.js to generate a static site in the `out` folder
  output: 'export',

  // The name of your GitHub repository
  basePath: '/moon-restaurant',
  
  // Required for static export on GitHub Pages
  images: {
    unoptimized: true,
    domains: ["flowbite.s3.amazonaws.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;