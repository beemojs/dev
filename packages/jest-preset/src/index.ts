const config = {
  collectCoverage: false, // Enabled by consumers
  collectCoverageFrom: ['**/{src,tests,__tests__}/**/*.{ts,tsx}'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_modules/', 'build/', 'cjs/', 'dist/', 'esm/', 'lib/', 'mjs/'],
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
    '\\.{css,sass,scss,less,gif,png,jpg,jpeg,svg,gql,graphql,yml,yaml}$': require.resolve(
      './fileMock.js',
    ),
  },
  testEnvironment: 'node',
  testMatch: ['**/{tests,__tests__}/**/*.test.{ts,tsx}'],
  testRunner: 'jest-circus/runner',
};

export default config;
