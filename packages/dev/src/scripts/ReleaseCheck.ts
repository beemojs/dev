import { Script } from '@beemo/core';

class ReleaseCheck extends Script {
	override readonly name = 'beemo-script-release-check';

	async execute() {
		await import('../checks/githubToken');
	}
}

export default () => new ReleaseCheck();
