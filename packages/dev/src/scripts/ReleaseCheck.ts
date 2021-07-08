import { Script } from '@beemo/core';

class ReleaseCheck extends Script {
	async execute() {
		await import('../checks/githubToken');
	}
}

export default () => new ReleaseCheck();
