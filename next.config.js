const withCss = require('@zeit/next-css')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')

module.exports = withCss({
  webpack: config => {
    // add polyfill
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./polyfills.js')
      ) {
        entries['main.js'].unshift('./polyfills.js')
      }

      return entries
    }

    return merge(config, webpackConfig)
  },
})
