import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  plugins: ['unicorn'],
  rules: {
    // Improve readability
    'unicorn/better-regex': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/string-content': 'error',

    // Better error handling and implementation
    'unicorn/catch-error-name': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/prefer-type-error': 'error',

    // Too abrasive / too many false positives
    'unicorn/consistent-destructuring': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prevent-abbreviations': 'off',

    // Ensure consistent and correct syntax
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/throw-new-error': 'error',

    // Avoid mutations and side-effects
    'unicorn/no-array-callback-reference': 'error',

    // Ensure todo's are finished
    'unicorn/expiring-todo-comments': 'error',

    // Be explicit and avoid edge cases
    'unicorn/explicit-length-check': 'error',
    'unicorn/import-style': 'off',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-negative-index': 'error',

    // Doesnt cover the naming requirements I want
    'unicorn/filename-case': 'off',

    // Use shorthand file paths as much as possible
    'unicorn/import-index': ['error', { ignoreImports: true }],

    // Use compact code when applicable
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-ternary': 'error',

    // Allow any API
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-regexp-test': 'off',

    // Prefer default parameter values
    'unicorn/prefer-default-parameters': 'error',

    // Prefer object destructuring
    'unicorn/no-object-as-default-parameter': 'error',

    // Avoid array destructuring
    'unicorn/no-unreadable-array-destructuring': 'error',

    // Better handling of Node.js exit
    'unicorn/no-process-exit': 'error',

    // Prefer modern APIs
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',

    // Doesnt play nice with TypeScript
    'unicorn/prefer-spread': 'off',
  },
};

export default config;