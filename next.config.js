/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/mui-and-next-exercise",
  assetPrefix: "/mui-and-next-exercise",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mui-and-next-exercise",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
