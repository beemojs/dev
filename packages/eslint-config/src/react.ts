import type eslint from 'eslint';

const isJsxRuntime = process.env.BEEMO_REACT === 'automatic';

const config: eslint.Linter.Config = {
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  extends: [require.resolve('./browser.js'), 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: ['Link', { name: 'Link', linkAttribute: 'to' }],
  },
  rules: {
    // Support the new JSX runtime when available
    'react/react-in-jsx-scope': isJsxRuntime ? 'off' : 'error',
    'react/jsx-uses-react': isJsxRuntime ? 'off' : 'error',

    // Support hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Align with the DOM instead, avoid "is" prefix
    'react/boolean-prop-naming': 'off',
    'react/jsx-boolean-value': ['error', 'never'],

    // Destructure to avoid references
    'react/destructuring-assignment': 'error',

    // Display name is inferred from function declarations
    'react/display-name': 'off',

    // Always use function declarations for components
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prefer-es6-class': 'off',
    'react/prefer-stateless-function': 'error',
    'react/jsx-pascal-case': ['error', { allowAllCaps: true, allowNamespace: true }],

    // Allow multiple components in a file
    'react/no-multi-comp': 'off',

    // Always self-close when applicable
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/void-dom-elements-no-children': 'error',

    // Allow component level state
    'react/no-set-state': 'off',
    'react/no-unused-state': 'error',

    // Use alternatives instead of danger
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',

    // Avoid deprecated APIs
    'react/no-deprecated': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-unsafe': ['error', { checkAliases: true }],

    // Dont restrict prop/element usage (is an app concern)
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/no-adjacent-inline-elements': 'off',

    // Dont use prop types since were using TypeScript
    'react/default-props-match-prop-types': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'off',

    // Avoid bad or problematic patterns
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-will-update-set-state': 'error',
    'react/require-optimization': 'off',
    'react/style-prop-object': 'error',

    // Accessibility requirements
    'react/button-has-type': 'error',

    // Security requirements
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',

    // Performance requirements
    'react/jsx-no-constructed-context-values': 'error',

    // Ensure JSX is returned
    'react/require-render-return': 'error',

    // Initialization should happen anywhere
    'react/state-in-constructor': 'off',

    // Enforce consistent JSX spacing and syntax
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-indent': ['error', 2], // TODO tabs?
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-newline': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-space-before-closing': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],

    // Avoid interpolation as much as possible
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

    // Avoid spaces within or around props
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': ['error', 'never'],

    // Only use tsx extension for JSX code
    'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.tsx'] }],

    // Always use shorthand fragments when applicable
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-no-useless-fragment': 'error',

    // Ensure keys are used correctly
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
      },
    ],

    // Allow any level of nesting
    'react/jsx-max-depth': 'off',

    // Limit 1 prop per line when multiline
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    // Avoid inline function props
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false,
      },
    ],

    // Encourage the use of i18n libraries
    'react/jsx-no-literals': [
      'error',
      {
        noStrings: true,
        ignoreProps: true,
        noAttributeStrings: false,
      },
    ],

    // Allow spreading of props since it allows better composition,
    // and TypeScript will catch any issues regardless
    'react/jsx-props-no-spreading': 'off',

    // Always sort props for better readability
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        // Sort component using React instead of TypeScript
        'react/sort-comp': [
          'error',
          {
            order: [
              'statics',
              'properties',
              'lifecycle',
              'everything-else',
              'handlers',
              'renderers',
            ],
            groups: {
              statics: ['propTypes', 'defaultProps'],
              properties: [
                '/^(?!on).+$/',
                '/^(?!handle).+$/',
                '/^(?!render).+$/',
                '/^.+Ref$/',
                'state',
              ],
              lifecycle: [
                'constructor',
                'getDerivedStateFromProps',
                'componentDidMount',
                'shouldComponentUpdate',
                'getSnapshotBeforeUpdate',
                'componentDidUpdate',
                'componentDidCatch',
                'componentWillUnmount',
              ],
              handlers: ['/^on.+$/', '/^handle.+$/'],
              renderers: ['/^render.+$/', 'render'],
            },
          },
        ],
        'react/static-property-placement': 'error',
        '@typescript-eslint/member-ordering': 'off',
      },
    },
  ],
};

export default config;