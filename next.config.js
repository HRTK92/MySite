/** @type {import('next').NextConfig} */

const urlPrefix = process.env.GITHUB_ACTIONS ? "/MySite" : ""

module.exports = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
};
