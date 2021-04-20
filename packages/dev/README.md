# Beemo - Development configuration module

[![Build Status](https://github.com/beemojs/dev/workflows/Build/badge.svg)](https://github.com/beemojs/dev/actions?query=branch%3Amaster)
[![npm version](https://badge.fury.io/js/%40beemo%config-babel.svg)](https://www.npmjs.com/package/@beemo/config-babel)
[![npm deps](https://david-dm.org/beemojs/dev.svg?path=packages/config-babel)](https://www.npmjs.com/package/@beemo/config-babel)

An official "batteries included" Beemo [configuration module](https://beemo.dev/docs/provider) that
provides pre-packaged configs for the Babel, ESLint, Jest, Prettier, and TypeScript drivers and
developer tools.

```bash
yarn install --dev @beemo/dev
```

## Setup

Create a `.config/beemo.ts` file in the root of your project that configures `@beemo/dev` as the
configuration module. Be sure to enable all drivers and any settings.

```ts
// .config/beemo.ts
export default {
  module: '@beemo/dev',
  drivers: ['babel', 'eslint', 'jest', 'prettier', 'typescript'],
  settings: {},
};
```

### Settings

The following Beemo `settings` can be defined and will be passed to applicable drivers.

- `decorators` (`boolean`) - Enable decorators for Babel and TypeScript drivers. Defaults to
  `false`.
- `node` (`boolean`) - Current project will target Node.js instead of the browser. Defaults to
  `false`.
- `projects` (`boolean | string[]`) - Enable Jest projects. If `true` is passed, will be resolved
  using workspaces, otherwise requires an array of explicit strings. Defaults to `false`.
- `react` (`boolean | classic | automatic`) - Enable React and JSX support for all drivers. Defaults
  to `false`.

### Overrides

If you would like to override a driver config, create a `.config/beemo/<driver>.ts` file in the root
of the project.
[View the official Beemo docs for more information](https://beemo.dev/docs/consumer#overriding-configs).

```ts
// .config/beemo/eslint.ts
export default {
  rules: {
    'no-param-reassign': 'off',
  },
};
```

## Drivers

The following drivers are directly supported in this configuration module, and automatically set
common command line options when being ran.

- [Babel](https://www.npmjs.com/package/@beemo/config-babel)
  - Always passes `--copy-files`.
  - Sets `--extensions` to `.ts,.tsx` if using TypeScript.
  - If no out provided, defaults to `src/ --out-dir lib/`.
- [ESLint](https://www.npmjs.com/package/@beemo/config-eslint)
  - Always passes `--color --fix`.
  - Sets `--extensions` to `.ts,.tsx` if using TypeScript.
  - If no target provided, defaults to linting `src/ tests/`.
  - If using workspaces, will target the above in each package.
  - Generates Prettier and TypeScript configs when enabled.
- [Jest](https://www.npmjs.com/package/@beemo/config-jest)
  - Always passes `--colors --logHeapUsage`.
  - Passes `--detectOpenHandles` when running code coverage.
  - Sets `NODE_ENV=test` and `TZ=UTC`.
  - Generates a Babel config when enabled.
  - Supports projects through the `projects` setting.
- [Prettier](https://www.npmjs.com/package/@beemo/config-prettier)
  - If no args provided, defaults to `--write .`.
  - Provides a default ignore list of common files.

> Please refer to their documentation for more information on how each one is configured.
