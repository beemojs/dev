import type { PrettierConfig } from '@beemo/driver-prettier';

const config: PrettierConfig = {
  ...(require('prettier-config-beemo') as PrettierConfig),
  ignore: [
    'node_modules/',
    // Build folders
    'build/',
    'cjs/',
    'dist/',
    'esm/',
    'lib/',
    'mjs/',
    // Config files
    'CHANGELOG.md',
    'lerna.json',
    'package.json',
    'tsconfig.json',
    'tsconfig.*.json',
    '*.d.ts',
  ],
};

export default config;
