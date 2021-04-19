# eslint-config-beemo

[![Build Status](https://github.com/beemojs/dev/workflows/Build/badge.svg)](https://github.com/beemojs/dev/actions?query=branch%3Amaster)
[![npm version](https://badge.fury.io/js/eslint-config-beemo.svg)](https://www.npmjs.com/package/eslint-config-beemo)
[![npm deps](https://david-dm.org/beemojs/dev.svg?path=packages/eslint-config)](https://www.npmjs.com/package/eslint-config-beemo)

A modern TypeScript-only ESLint config with optional presets. Expands upon the amazing
[Airbnb config](https://www.npmjs.com/package/eslint-config-airbnb-base) to provide latest the
ECMAScript features, enforce popular patterns, and align with the wider community.

```bash
yarn install --dev eslint eslint-config-beemo
```

## Setup

Extend the `beemo` config in your root `.eslintrc.js`. Additional [presets](#presets) are available
for additional rules.

```js
module.exports = {
  extends: ['beemo'],
};
```

### Presets

The following additional configs can also be extended, but are not enabled by default.

- `beemo/browser` - Sets the environment to the browser/DOM and enables the
  [compat](https://www.npmjs.com/package/eslint-plugin-compat) plugin. Should _not_ be used with the
  `node` preset.
- `beemo/node` - Sets the environment to Node.js and enables the
  [node](https://www.npmjs.com/package/eslint-plugin-node) plugin. Should _not_ be used with the
  `browser` preset.
- `beemo/react` - Enables the [react](https://www.npmjs.com/package/eslint-plugin-react),
  [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), and
  [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) plugins. Only applies to `*.tsx`
  files and also extends the `browser` preset.

## Features

- Extends the [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) config and
  enables additional rules.
- Enforces async/await/promise best practices with the
  [promise](https://www.npmjs.com/package/eslint-plugin-promise) plugin.
- Sorts imports/exports in a logical way using the
  [simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort) plugin.
- Encourages readable tests with the [jest](https://www.npmjs.com/package/eslint-plugin-jest)
  plugin. Only applies to [test](#requirements) files.
- Enables additional awesome rules from the
  [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) plugin.

## Requirements

- Source files must be located in a `src` folder.
- Tests files must end in `*.test.{ts,tsx}` and be located within a `tests` or `__tests__` folder.
- Relies on TypeScript for parsing files.
