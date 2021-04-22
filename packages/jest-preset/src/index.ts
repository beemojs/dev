import { ALL_FILES_GLOB, IGNORE_LIST, NON_TS_GLOB, TEST_FILES_GLOB } from '@beemo/config-constants';

const config = {
  collectCoverage: false, // Enabled by consumers
  collectCoverageFrom: [ALL_FILES_GLOB],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [...IGNORE_LIST],
  coverageReporters: ['lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  globals: {
    [`__DEV__`]: true,
    [`__PROD__`]: true,
  },
  moduleNameMapper: {
    [NON_TS_GLOB]: require.resolve('./fileMock.js'),
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: 'node',
  testMatch: [TEST_FILES_GLOB],
  testRunner: 'jest-circus/runner',
};

export default config;
