/** @type {import('next').NextConfig} */

const urlPrefix = process.env.GITHUB_ACTIONS ? process.env.urlPrefix : ""

module.exports = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
};
