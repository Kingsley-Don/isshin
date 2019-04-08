const path = require('path')

module.exports = {
  resolve: {
    alias: {
      // '~': path.resolve(__dirname),
      // static: path.resolve(__dirname, 'static'),
      // components: path.resolve(__dirname, 'components'),
    },
  },
  devServer: {
    host: '0.0.0.0', // for remote debug
  },
}
