/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "en"],
  },
  experimental: {
    images: { allowFutureImage: true },
  },
};

module.exports = config;
