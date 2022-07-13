/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  excludeDefaultMomentLocales: true,
  images: {
    domains: ["typeofweb.eu.saleor.cloud"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: { images: { allowFutureImage: true } },
  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "en"],
  },
  experimental: {
    runtime: "experimental-edge",
    images: { allowFutureImage: true },
  },
  trailingSlash: true,
};

module.exports = config;
