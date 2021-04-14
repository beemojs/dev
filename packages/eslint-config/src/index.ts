import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  plugins: ['airbnb-base', 'compat', 'prettier'],
  extends: [
    'airbnb-base',
    require.resolve('./unicorn.js'),
    // Add prettier last so it properly turns off rules
    'prettier',
  ],
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
