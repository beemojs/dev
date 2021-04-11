# Beemo - Prettier config

[![Build Status](https://github.com/beemojs/dev/workflows/Build/badge.svg)](https://github.com/beemojs/dev/actions?query=branch%3Amaster)
[![npm version](https://badge.fury.io/js/%40beemo%config-prettier.svg)](https://www.npmjs.com/package/@beemo/config-prettier)
[![npm deps](https://david-dm.org/beemojs/dev.svg?path=packages/config-prettier)](https://www.npmjs.com/package/@beemo/config-prettier)

An official Prettier config for Beemo managed projects. Configures
[prettier-config-beemo](https://www.npmjs.com/package/prettier-config-beemo) with a default list of
ignored paths.

```bash
yarn install --dev prettier @beemo/core @beemo/driver-prettier @beemo/config-prettier
```

## Setup

Create a `configs/prettier.ts` file in your configuration module that imports this config.

```ts
export { default } from '@beemo/config-prettier';
```
