/* eslint-disable @typescript-eslint/no-var-requires */
const withCss = require('@zeit/next-css')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')

module.exports = withCss({
  webpack: config => {
    return merge(config, webpackConfig)
  },
})
