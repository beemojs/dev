import fs from 'fs';
import path from 'path';
import {
	ALL_FILES_GLOB,
	IGNORE_LIST,
	NON_TS_REGEX,
	ROOT,
	TEST_FILES_GLOB,
} from '@beemo/config-constants';

const setupFilesAfterEnv: string[] = [];
const setupFilePath = path.join(ROOT, 'tests/setup.ts');

// Only include the file if it exists, otherwise Jest throws an error
if (fs.existsSync(setupFilePath)) {
	setupFilesAfterEnv.push(setupFilePath);
}

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
		[NON_TS_REGEX]: require.resolve('./fileMock.js'),
	},
	setupFilesAfterEnv,
	testEnvironment: 'node',
	testMatch: [TEST_FILES_GLOB],
	testRunner: 'jest-circus/runner',
};

export default config;
