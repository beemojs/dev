import { builtinModules } from 'module';
import type eslint from 'eslint';
import { IGNORE_LIST, NON_TS_REGEX, TS_PATH_PREFIX_REGEX } from '@beemo/config-constants';

const extensions = ['.ts', '.tsx', '.js', '.mjs'];

const config: eslint.Linter.Config = {
	plugins: ['import', 'simple-import-sort'],
	settings: {
		'import/extensions': extensions,
		'import/ignore': [...IGNORE_LIST, NON_TS_REGEX],
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
		'import/max-dependencies': 'off',
		'import/no-namespace': 'off',
		'import/no-relative-parent-imports': 'off',

		// Ensure import paths are succinct as possible
		'import/no-relative-packages': 'error',
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

		// Dont resolve custom TS paths, but do others
		'import/no-unresolved': [
			'error',
			{ commonjs: true, caseSensitive: true, ignore: [TS_PATH_PREFIX_REGEX] },
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
		'import/no-import-module-exports': 'error',

		// Prefer named exports (over default) as they provide a better package setup
		'import/no-anonymous-default-export': 'off',
		'import/no-default-export': 'warn',
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
						'^@react',
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
	overrides: [
		// Allow default exports from package indexes
		{
			files: ['**/index.ts', '**/index.tsx'],
			rules: {
				'import/no-default-export': 'off',
			},
		},
	],
};

export default config;
