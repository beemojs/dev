import type { JestConfig } from '@beemo/driver-jest';

const { tool } = process.beemo;
const { projects, react } = tool.config.settings as BeemoSettings;

const config: JestConfig = {
	preset: 'jest-preset-beemo',
	testEnvironment: react ? 'jsdom' : 'node',
};

if (tool.package.workspaces && projects) {
	config.projects = tool.project
		.getWorkspaceGlobs({ relative: true })
		.map((wsPath) => `<rootDir>/${wsPath}`);
}

export default config;
