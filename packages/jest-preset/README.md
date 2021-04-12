# jest-preset-beemo

[![Build Status](https://github.com/beemojs/dev/workflows/Build/badge.svg)](https://github.com/beemojs/dev/actions?query=branch%3Amaster)
[![npm version](https://badge.fury.io/js/jest-preset-beemo.svg)](https://www.npmjs.com/package/jest-preset-beemo)
[![npm deps](https://david-dm.org/beemojs/dev.svg?path=packages/babel-preset)](https://www.npmjs.com/package/jest-preset-beemo)

A reusable Jest preset for Beemo configured projects. Provides code coverage and performance out of
the box.

```bash
yarn install --dev jest-preset-beemo jest-circus
```

> This preset requires `jest-circus` to also be installed.

## Setup

Add the preset to your root `jest.config.js`.

```js
module.exports = {
  preset: 'jest-preset-beemo',
};
```

## Features

- Configured for Node.js environments.
- Defines an empty file mock for non-JS/TS files (like CSS).
- Requires 90% code coverage of all source files.
- Supports `__DEV__` and `__PROD__` globals.
