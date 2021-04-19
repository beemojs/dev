import { builtinModules } from 'module';
import type eslint from 'eslint';
import { IGNORE_LIST, NON_TS_GLOB } from '@beemo/config-constants';

const extensions = ['.ts', '.tsx', '.js', '.mjs'];

const config: eslint.Linter.Config = {
  plugins: ['import', 'simple-import-sort'],
  settings: {
    'import/extensions': extensions,
    'import/ignore': [...IGNORE_LIST, NON_TS_GLOB],
    'import/resolver': {
      node: {
        extensions: [...extensions, '.cjs', '.json'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': extensions.slice(0, 2),
    },
  },
  // Inherits default import rules from Airbnb config. Will only override differences.
  // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
  rules: {
    // Doesnt play nice with TypeScript
    'import/default': 'off',
    'import/no-cycle': 'off',

    // Too controversial / abrasive
    'import/no-relative-parent-imports': 'off',

    // Ensure import paths are succinct as possible
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
        commonjs: false,
      },
    ],

    // Always require an extension for non-JS/TS files
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        cjs: 'always',
        js: 'never',
        json: 'always',
        mjs: 'always',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Avoid using deprecated APIs
    'import/no-deprecated': 'error',

    // Prefer modern ESM and MJS code
    'import/no-amd': 'error',
    'import/no-commonjs': [
      'error',
      {
        allowRequire: true,
        allowConditionalRequire: true,
      },
    ],

    // Prefer named exports (over default) as they are a better developer experience
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-named-export': 'off',
    'import/prefer-default-export': 'off',

    // Sort imports and exports deterministicly
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // Side-effects
            '^\\u0000',
            // Node built-ins
            `^(${builtinModules.join('|')})$`,
            // React NPM packages
            '^react',
            // NPM packages
            '^[a-z]',
            // Scoped NPM packages
            '^@[a-z]',
            // Aliased modules
            '^:[a-z]',
            // Parent files
            '^\\.\\./',
            // Sibling files
            '^\\./',
            // Index file
            '^\\.$',
            // Everything else
            '\\*',
          ],
        ],
      },
    ],
  },
};

export default config;
