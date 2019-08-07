const path = require('path')
const paths = ['components', 'constants', 'pages', 'styles', 'utils']
const alias = paths.reduce(
  (prev, value) => ({...prev, [value]: path.resolve(__dirname, value)}),
  {}
)

module.exports = {
  resolve: {
    alias: {
      '~': __dirname,
      ...alias,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    host: '0.0.0.0', // for remote debug
  },
}
