import { Script } from '@beemo/core';

class ReleaseCheck extends Script {
	override readonly name = 'beemo-script-release-check';

	async execute() {
		// Use require instead of import so that we can include TypeScript files
		await require('../checks/githubToken');
	}
}

export default () => new ReleaseCheck();
