import { IGNORE_LIST } from '@beemo/config-constants';
import type { ESLintConfig } from '@beemo/driver-eslint';

const { tool } = process.beemo;
const { node, react } = tool.config.settings as BeemoSettings;

const config = {
  root: true,
  extends: ['beemo'],
  ignore: [...IGNORE_LIST, '*.min.js', '*.map', '*.snap'],
};

if (node) {
  config.extends.push('beemo/node');
} else {
  config.extends.push('beemo/browser');
}

if (react) {
  config.extends.push('beemo/react');
}

export default config as ESLintConfig;
