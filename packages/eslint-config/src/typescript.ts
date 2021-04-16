import path from 'path';
import type eslint from 'eslint';
import type { ProjectReference } from 'typescript';

let project: string | string[] = path.join(process.cwd(), 'tsconfig.json');

// If the project is using project references, we need to include a path
// to every tsconfig.json in the graph.
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject
try {
  // eslint-disable-next-line
  const rootTsconfig: { references?: ProjectReference[] } = require(project);

  if (rootTsconfig?.references) {
    project = rootTsconfig.references.map((ref) =>
      path.join(process.cwd(), ref.path, 'tsconfig.json'),
    );
  }
} catch {}

const config: eslint.Linter.Config = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project,
  },
  rules: {
    // Disabled by Prettier: https://github.com/prettier/eslint-config-prettier/blob/main/index.js#L95
    // We need to do this as they may be re-enabled based on config extending order.
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/indent': 'off',

    // Expands upon base config
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    // Overloads should be stacked on top of the original signature
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Prefer shorthand and utility types as much as possible
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    // Prefer interfaces as extending and composition syntax is much nicer
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Allow any types as they each serve a specific purpose
    '@typescript-eslint/ban-types': 'off',

    // Await is designed to auto wrap with promises, so avoid this
    '@typescript-eslint/await-thenable': 'off',

    // Require comments when using ts directives
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],
    '@typescript-eslint/ban-tslint-comment': 'error',

    // Too abrasive or controversial
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',

    // Enforce a single assertion pattern
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],

    // Inference is powerful so allow it
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Require modifiers when not public
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
  },
};

export default config;
