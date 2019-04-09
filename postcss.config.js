module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'nesting-rules': false,
        // 'custom-properties': {
        //   preserve: false,
        //   importFrom: 'styles/variables.css',
        // },
      },
    }),
    require('postcss-nested'),
    require('postcss-normalize'),
  ],
}
