/** @type {import('next').NextConfig} */

require('dotenv').config()

module.exports = {
  basePath: process.env.GITHUB_PAGES ? '' : '/MySite',
  //assetPrefix: '/MySite',
}
