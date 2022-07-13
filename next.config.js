/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
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
