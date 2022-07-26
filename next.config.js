/** @type {import('next').NextConfig} */

const urlPrefix = process.env.GITHUB_ACTIONS ? "/mysite" : ""

module.exports = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
};
