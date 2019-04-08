module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['react', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', require('./prettier.config')],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'prefer-const': 2,
    'no-var': 2,
    'no-extra-semi': 0,
  },
  settings: {
    'import/resolver': 'webpack',
  },
}
