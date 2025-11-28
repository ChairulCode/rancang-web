const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? "/nextly/" : "",
  basePath: isProd ? "/nextly" : "",
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
