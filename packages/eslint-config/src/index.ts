import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    require.resolve('./async.js'),
    require.resolve('./unicorn.js'),
    // Add prettier last so it properly turns off rules
    'prettier',
  ],
  globals: {
    [`__DEV__`]: 'readonly',
    [`__PROD__`]: 'readonly',
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.mjs'],
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.mjs'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
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
