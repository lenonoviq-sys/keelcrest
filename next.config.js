/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid Windows ENOENT rename race on .next/cache/webpack/*.pack.gz
      config.cache = { type: "memory" };
    }
    return config;
  },
};

module.exports = nextConfig;
