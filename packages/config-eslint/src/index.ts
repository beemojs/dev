import type { ESLintConfig } from '@beemo/driver-eslint';

const { tool } = process.beemo;
const { node, react } = tool.config.settings as BeemoSettings;

const config = {
  extends: ['beemo'],
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
