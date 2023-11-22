/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  assetPrefix: "/nextjs-tailwind-app-presentation-page/",
  basePath: "/nextjs-tailwind-app-presentation-page",
};

module.exports = nextConfig;
