import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  parser: '@typescript-eslint/parser',
  plugins: ['compat', '@typescript-eslint'],
  extends: [
    'airbnb-base',
    require.resolve('./unicorn.js'),
    // Add prettier last so it properly turns off rules
    'prettier',
  ],
  globals: {
    [`__DEV__`]: true,
    [`__PROD__`]: true,
  },
  rules: {
    // Warn about invalid API usage but do not fail the build
    'compat/compat': 'warn',

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
