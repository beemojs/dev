import type eslint from 'eslint';
import { TESTS_GLOB } from './constants';

const config: eslint.Linter.Config = {
  plugins: ['compat'],
  env: {
    browser: true,
  },
  rules: {
    // Warn about invalid API usage but do not fail the build
    'compat/compat': 'warn',
  },
  overrides: [
    {
      files: [TESTS_GLOB],
      env: {
        browser: false,
      },
      rules: {
        // Disable within tests as its noisy
        'compact/compat': 'off',
      },
    },
  ],
};

export default config;
