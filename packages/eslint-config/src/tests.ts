import type eslint from 'eslint';
import { TESTS_GLOB } from './constants';

const jestConfig: eslint.Linter.ConfigOverride = {
  files: [TESTS_GLOB],
  plugins: ['jest'],
  env: {
    jest: true,
    'jest/globals': true,
  },
  rules: {
    // Prefer `it` over `test`
    'jest/consistent-test-it': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',

    // Ensure we are expecting/asserting correctly
    'jest/expect-expect': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-if': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/unbound-method': 'error',

    // Ensure our tests are deterministic
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-large-snapshots': 'off',

    // Encourage readable titles and descriptions
    'jest/lowercase-name': 'off',
    'jest/no-identical-title': 'error',
    'jest/valid-title': 'error',

    // Prefer explicit APIs for better readability
    'jest/no-alias-methods': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-restricted-matchers': 'off',
    'jest/no-test-prefixes': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-to-throw-message': 'error',

    // Prefer wrapping instead of mutating test subjects
    'jest/prefer-spy-on': 'error',

    // Prefer async/await/promises over callbacks (duh)
    'jest/no-done-callback': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/valid-expect-in-promise': 'off',

    // Avoid invalid or skipped tests from being on master
    'jest/no-commented-out-tests': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',

    // Use fixtures or helper files instead
    'jest/no-export': 'error',
    'jest/no-mocks-import': 'error',

    // Too abrasive and annoying
    'jest/prefer-expect-assertions': 'off',

    // Hooks are nice / is shared state an issue? Revisit?
    'jest/no-hooks': 'off',

    // Sometimes we only want to check that its called... Revisit?
    'jest/prefer-called-with': 'off',
  },
};

const testsConfig: eslint.Linter.ConfigOverride = {
  files: [TESTS_GLOB],
  env: {
    node: true,
  },
  rules: {
    // Disable these as it makes writing tests much easier
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-magic-numbers': 'off',
    'sort-keys': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
};

// We only want to apply the Jest plugin and other testing rules
// when inside of a test specific file. Not the entire codebase.
const config: eslint.Linter.Config = {
  overrides: [jestConfig, testsConfig],
};

export default config;
