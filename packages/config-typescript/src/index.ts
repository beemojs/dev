import type { TypeScriptConfig } from '@beemo/driver-typescript';

const { context, tool } = process.beemo;
const { decorators, react } = tool.config.settings as BeemoSettings;

const config: TypeScriptConfig = context.getRiskyOption('build')
  ? require('tsconfig-beemo/tsconfig.workspaces.json')
  : require('tsconfig-beemo/tsconfig.json');
const options = config.compilerOptions!;

if (decorators) {
  options.experimentalDecorators = true;
}

if (react) {
  options.lib!.push('dom');

  if (react === 'automatic') {
    options.jsx = __DEV__ ? 'react-jsx-dev' : 'react-jsx';
  } else {
    options.jsx = 'react';
  }
}

export default config;
