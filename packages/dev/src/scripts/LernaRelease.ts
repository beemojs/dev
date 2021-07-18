/* eslint-disable no-console */

import { Arguments, ParserOptions, Path, Script, ScriptContext } from '@beemo/core';

export interface LernaReleaseOptions {
	changelogPreset?: string;
	graduate?: boolean;
	preid?: string;
	prerelease?: boolean;
}

class LernaRelease extends Script<LernaReleaseOptions> {
	override readonly name = 'beemo-script-lerna-release';

	npmClient: string = 'npx';

	override parse(): ParserOptions<LernaReleaseOptions> {
		return {
			options: {
				changelogPreset: {
					default: 'beemo',
					description: 'Conventional changelog preset to use for release generation',
					type: 'string',
				},
				graduate: {
					description: 'Graduate prereleases to an official stable version',
					type: 'boolean',
				},
				preid: {
					default: 'alpha',
					description: 'Suffix identifier to append to prerelease versions',
					type: 'string',
				},
				prerelease: {
					description: 'Mark this release as a prerelease and append suffix',
					type: 'boolean',
				},
			},
		};
	}

	async execute(context: ScriptContext, args: Arguments<LernaReleaseOptions>) {
		if (Path.resolve('yarn.lock', context.cwd).exists()) {
			this.npmClient = 'yarn';
		}

		const preid = args.options.prerelease ? args.options.preid : undefined;

		this.checkForGitHubToken();

		if (process.env.CI) {
			await this.setGitEnvVars();
		}

		await this.versionPackages(
			args.options.changelogPreset ?? 'beemo',
			args.options.graduate,
			preid,
		);

		await this.publishPackages(preid);
	}

	// Required to create GitHub releases
	checkForGitHubToken() {
		// Use require instead of import so that we can include TypeScript files
		require('../checks/githubToken');
	}

	// https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables
	async setGitEnvVars() {
		let name = '';
		let email = '';

		try {
			const gitName = await this.executeCommand('git', ['config', '--get', 'user.name']);

			if (gitName.stdout) {
				name = gitName.stdout;
			}

			const gitEmail = await this.executeCommand('git', ['config', '--get', 'user.email']);

			if (gitEmail.stdout) {
				email = gitEmail.stdout;
			}
		} catch {
			name = process.env.GITHUB_USER ?? 'gh-actions';
			email = process.env.GITHUB_EMAIL ?? 'actions@github.com';
		}

		Object.assign(process.env, {
			GIT_ASKPASS: 'echo',
			GIT_AUTHOR_EMAIL: email,
			GIT_AUTHOR_NAME: name,
			GIT_COMMITTER_EMAIL: email,
			GIT_COMMITTER_NAME: name,
			GIT_TERMINAL_PROMPT: '0',
		});
	}

	// https://github.com/lerna/lerna/tree/master/commands/version#readme
	async versionPackages(preset: string, graduate?: boolean, preid?: string) {
		const changelogPreset = preset.startsWith('conventional-changelog')
			? preset
			: `conventional-changelog-${preset}`;

		const args = [
			'lerna',
			'version',
			'--yes',
			// Only run on master
			'--allow-branch',
			'master',
			// Create a GitHub release
			'--create-release',
			'github',
			// Push changes to git
			'--push',
			// Alter commit message to skip CI
			'--message',
			'"Release [ci skip]"',
			// Use conventional commits
			'--conventional-commits',
			'--changelog-preset',
			changelogPreset,
		];

		if (graduate) {
			args.push('--conventional-graduate');
		} else if (preid) {
			args.push('--conventional-prerelease', '--preid', preid);
		}

		const { stdout } = await this.executeCommand(this.npmClient, args, {
			extendEnv: true,
			preferLocal: true,
		});

		console.log(stdout);
	}

	// https://github.com/lerna/lerna/tree/master/commands/publish#readme
	async publishPackages(preid?: string) {
		const args = ['lerna', 'publish', 'from-git', '--yes'];

		if (preid) {
			args.push('--dist-tag', 'next', '--preid', preid);
		}

		const { stdout } = await this.executeCommand(this.npmClient, args, {
			extendEnv: true,
			preferLocal: true,
		});

		console.log(stdout);
	}
}

export default () => new LernaRelease();