/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "main/styles")],
    prependData: `@import "_main.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["assets.pokemon.com", "www.pokemon.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
