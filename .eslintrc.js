const ERROR = 2
const WARN = 1
const OFF = 0

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', require('./prettier.config')],
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': OFF,
    'prefer-const': ERROR,
    'no-var': ERROR,
    // 'no-extra-semi': 0,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    '@typescript-eslint/explicit-function-return-type': [
      ERROR,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/explicit-member-accessibility': [ERROR, {accessibility: 'no-public'}],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
