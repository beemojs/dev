# tsconfig-beemo

[![Build Status](https://github.com/beemojs/dev/workflows/Build/badge.svg)](https://github.com/beemojs/dev/actions?query=branch%3Amaster)
[![npm version](https://badge.fury.io/js/tsconfig-beemo.svg)](https://www.npmjs.com/package/tsconfig-beemo)
[![npm deps](https://david-dm.org/beemojs/dev.svg?path=packages/tsconfig)](https://www.npmjs.com/package/tsconfig-beemo)

Pre-packaged and modern TypeScript `tsconfig.json`s. Each config assumes that TypeScript will _only_
be used as a type checker and _not_ a compiler.

```bash
yarn install --dev tsconfig-beemo
```

## Setup

Extend the config from your root `tsconfig.json`.

```json
{
	"extends": "tsconfig-beemo/tsconfig.json",
	"include": ["src/**/*"]
}
```

> Configs only define `compilerOptions` and not `include`, `exclude`, `references`, etc.

## Features

- First-class support for ECMAScript modules and their syntax.
  - Supports synthetic default exports.
  - Enables ES interoperability and isolation.
  - Enables the `esnext` lib.
  - Targets `es2022` (since we only type check).
- Supports project references through the `tsconfig.workspaces.json` config.
  - Enables declaration emitting.
- Supports React through the `tsconfig.react.json` config.
  - Enables the `dom` lib.
  - Sets JSX transform to `react`.
- Strict and performant by default (of course).
- Does _not_ check JavaScript files.
