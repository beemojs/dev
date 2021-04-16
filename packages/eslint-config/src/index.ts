import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    require.resolve('./async.js'),
    require.resolve('./module.js'),
    require.resolve('./tests.js'),
    require.resolve('./unicorn.js'),
    // Add prettier last so it properly turns off rules
    'prettier',
  ],
  env: {
    es2021: true,
  },
  globals: {
    [`__DEV__`]: 'readonly',
    [`__PROD__`]: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    // Always prefer object destructuring, but array is contextual
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
  },
};

export default config;
