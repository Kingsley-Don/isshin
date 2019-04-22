module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'nesting-rules': false,
        'custom-properties': {
          preserve: false,
        },
      },
    }),
    require('postcss-nested'),
    require('postcss-normalize'),
  ],
}
