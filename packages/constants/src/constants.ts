import path from 'path';

// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
export const ROOT = process.env.BEEMO_ROOT || process.cwd();
export const PACKAGE_JSON_PATH = path.join(ROOT, 'package.json');
export const TSCONFIG_JSON_PATH = path.join(ROOT, 'tsconfig.json');

// Support consistent sorting across the board
// Its off since simple-import-sort doesnt support it!
export const CASE_SENSITIVE = false;

// Latest ECMA version and syntax to support
export const ECMA_VERSION = 2022;

// Files and folders to always ignore
export const IGNORE_LIST = [
	'node_modules/',
	'build/',
	'cjs/',
	'coverage/',
	'dist/',
	'dts/',
	'esm/',
	'lib/',
	'mjs/',
	'umd/',
];

// Globs for finding source files, test files, and test utility files
export const TS_EXT_PATTERN = '{ts,tsx,cts,mts}';
export const ALL_FILES_GLOB = `**/{src,tests,__tests__}/**/*.${TS_EXT_PATTERN}`;
export const SOURCE_FILES_GLOB = `**/src/**/*.${TS_EXT_PATTERN}`;
export const TEST_FILES_GLOB = `**/{tests,__tests__}/**/*.test.${TS_EXT_PATTERN}`;
export const TEST_UTILS_GLOB = `**/{tests,__tests__}/**/*.${TS_EXT_PATTERN}`;

// List of globs to find all test related files
export const TESTS_LIST = [TEST_FILES_GLOB, TEST_UTILS_GLOB, `test.${TS_EXT_PATTERN}`];

// Pattern of non-JS/TS file extensions
export const NON_TS_REGEX = '\\.{css,sass,scss,less,gif,png,jpg,jpeg,svg,gql,graphql,yml,yaml}$';

// Pattern to find all custom TypeScript paths
export const TS_PATH_PREFIX_REGEX = '^:[a-z]';
