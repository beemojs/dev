# babel-preset-beemo

[![Build Status](https://github.com/beemojs/dev/workflows/Build/badge.svg)](https://github.com/beemojs/dev/actions?query=branch%3Amaster)
[![npm version](https://badge.fury.io/js/babel-preset-beemo.svg)](https://www.npmjs.com/package/babel-preset-beemo)
[![npm deps](https://david-dm.org/beemojs/dev.svg?path=packages/babel-preset)](https://www.npmjs.com/package/babel-preset-beemo)

A development only Babel preset for Beemo configured projects. Should not be used for building
packages for distribution and should instead be used for unit testing, linting, etc.

```bash
yarn install --dev @babel/core babel-preset-beemo
```

## Setup

Add the preset to your root `babel.config.js`.

```js
module.exports = {
  presets: ['beemo'],
};
```

## Features

- Configures the `env` preset for the current Node.js version.
- Enables the `typescript` preset by default. TypeScript everywhere!
- Enables native `async`/`await` and avoids Regenerator.
- Enables `export` default and namespace from syntax.
- Supports the `react` preset and both its JSX runtimes.
- Converts `__DEV__` conditionals to `process.env` checks.

## Options

The following options can be passed to the preset.

- `decorators` (`boolean`) - Enable TypeScript decorators. If true, will toggle Babel into loose
  mode. Defaults to `false`.
- `loose` (`boolean`) - Turn on Babel loose mode for all plugins. Defaults to `false`.
- `modules` (`boolean`) - Force transpilation to use ECMA script module syntax. Defaults to `false`
  (`auto` modules).
- `react` (`boolean | classic | automatic`) - Enable the React plugin and the defined JSX runtime.
  Defaults to `false`.

```js
module.exports = {
  presets: [['beemo', { decorators: true, react: 'automatic' }]],
};
```
