import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  plugins: ['compat'],
  globals: {
    browser: true,
  },
  rules: {
    // Warn about invalid API usage but do not fail the build
    'compat/compat': 'warn',
  },
};

export default config;
