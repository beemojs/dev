import path from 'path';

const config = {
  collectCoverageFrom: ['**/(src|tests|__tests__)/**/*.[jt]s?(x)'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_modules/', 'build/', 'cjs/', 'dist/', 'esm/', 'lib/', 'mjs/'],
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
  },
  moduleNameMapper: {
    '\\.{css,sass,scss,less,gif,png,jpg,jpeg,svg,gql,graphql,yml,yaml}$': path.join(
      __dirname,
      './fileMock.js',
    ),
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: 'node',
  testMatch: ['**/(tests|__tests__)/**/*.test.[jt]s?(x)'],
  testRunner: 'jest-circus/runner',
};

export default config;
