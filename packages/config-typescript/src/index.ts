import type { TypeScriptConfig } from '@beemo/driver-typescript';

const { context, tool } = process.beemo;
const { decorators, react } = tool.config.settings as BeemoSettings;

const config = require('tsconfig-beemo/tsconfig.json') as TypeScriptConfig;
const options = config.compilerOptions!;

// When using project references, we must merge the 2 configs instead of replacing,
// otherwise the `tsconfig.options.json` separation that Beemo automates... breaks.
if (tool.package.workspaces) {
  Object.assign(
    options,
    (require('tsconfig-beemo/tsconfig.workspaces.json') as TypeScriptConfig).compilerOptions,
  );

  // When not using project references, assume and include all files
} else {
  config.include = ['src/**/*', 'tests/**/*', 'types/**/*'];
}

if (decorators) {
  options.experimentalDecorators = true;
}

if (react) {
  if (options.lib) {
    options.lib.push('dom');
  } else {
    options.lib = ['dom'];
  }

  if (react === 'automatic') {
    options.jsx = __DEV__ ? 'react-jsx-dev' : 'react-jsx';
  } else {
    options.jsx = tool.package.dependencies?.['react-native'] ? 'react-native' : 'react';
  }
}

if (context.getRiskyOption('sourceMaps')) {
  options.sourceMap = true;
}

export default config;
