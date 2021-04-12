# Beemo - TypeScript config

[![Build Status](https://github.com/beemojs/dev/workflows/Build/badge.svg)](https://github.com/beemojs/dev/actions?query=branch%3Amaster)
[![npm version](https://badge.fury.io/js/%40beemo%config-jest.svg)](https://www.npmjs.com/package/@beemo/config-jest)
[![npm deps](https://david-dm.org/beemojs/dev.svg?path=packages/config-jest)](https://www.npmjs.com/package/@beemo/config-jest)

An official Jest config for Beemo managed projects. Configures
[jest-preset-beemo](https://www.npmjs.com/package/jest-preset-beemo) based on environment and
settings.

```bash
yarn install --dev jest @beemo/core @beemo/driver-jest @beemo/config-jest
```

## Setup

Create a `configs/jest.ts` file in your configuration module that imports this config.

```ts
export { default } from '@beemo/config-jest';
```

## Settings

The following `beemo.settings` can be defined to customize Jest even further.

- `projects` (`boolean | string[]`) - Enable Jest projects. If `true` is passed, will be resolved
  using workspaces, otherwise requires an array of explicit strings. Defaults to `false`.
- `react` (`boolean | classic | automatic`) - Set the testing environment to `jsdom` to support
  React. Defaults to `false`.

```ts
export default {
  module: '<config-module>',
  drivers: ['jest'],
  settings: {
    react: true,
  },
};
```
