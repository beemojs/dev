// Support consistent sorting across the board
// Its off since simple-import-sort doesnt support it!
export const CASE_SENSITIVE = false;

// Latest ECMA version and syntax to support
export const ECMA_VERSION = 2020;

// Files and folders to always ignore
export const IGNORE_LIST = [
  'node_modules/',
  'build/',
  'cjs/',
  'coverage/',
  'dist/',
  'esm/',
  'lib/',
  'mjs/',
];

// Globs for finding source files, test files, and test utility files
export const ALL_FILES_GLOB = '**/{src,tests,__tests__}/**/*.{ts,tsx}';
export const SOURCE_FILES_GLOB = '**/src/**/*.{ts,tsx}';
export const TEST_FILES_GLOB = '**/{tests,__tests__}/**/*.test.{ts,tsx}';
export const TEST_UTILS_GLOB = '**/{tests,__tests__}/**/*.{ts,tsx}';

// List of globs to find all test related files
export const TESTS_LIST = [TEST_UTILS_GLOB, 'test.{ts,tsx}'];

// List of non-JS/TS file extensions
export const NON_TS_GLOB = '\\.{css,sass,scss,less,gif,png,jpg,jpeg,svg,gql,graphql,yml,yaml}$';
