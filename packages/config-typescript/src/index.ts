import type { TypeScriptConfig } from '@beemo/driver-typescript';

const { context, tool } = process.beemo;
const { decorators, react } = tool.config.settings as BeemoSettings;

const config = (context.getRiskyOption('build')
  ? require('tsconfig-beemo/tsconfig.workspaces.json')
  : require('tsconfig-beemo/tsconfig.json')) as TypeScriptConfig;

const options = config.compilerOptions!;

if (decorators) {
  options.experimentalDecorators = true;
}

if (react) {
  options.lib!.push('dom');

  if (react === 'automatic') {
    options.jsx = __DEV__ ? 'react-jsx-dev' : 'react-jsx';
  } else {
    options.jsx = tool.package.dependencies?.['react-native'] ? 'react-native' : 'react';
  }
}

if (context.getRiskyOption('sourceMaps')) {
  options.sourceMap = true;
}

// When not using project references, assume and include source files
if (!context.getRiskyOption('build')) {
  config.include = ['src/**/*', 'tests/**/*', 'types/**/*'];
}

export default config;
