import type { ProjectReference } from 'typescript';
import { PACKAGE_JSON_PATH, TSCONFIG_JSON_PATH } from './constants';

// PACKAGE.JSON

type PackageDeps = Record<string, string>;

interface PackageJSON {
	engines?: { node?: string };
	dependencies?: PackageDeps;
	devDependencies?: PackageDeps;
	peerDependencies?: PackageDeps;
}

let packageJson: PackageJSON;

export function getRootPackageJSON(): PackageJSON {
	if (packageJson === undefined) {
		// eslint-disable-next-line import/no-dynamic-require
		packageJson = require(PACKAGE_JSON_PATH) as PackageJSON;
	}

	return packageJson;
}

// NODEJS

let nodeVersion: number;

export function getTargetNodeRuntime(): number {
	if (nodeVersion !== undefined) {
		return nodeVersion;
	}

	try {
		const pkg = getRootPackageJSON();
		const version = pkg.engines?.node;

		if (version) {
			nodeVersion = Number.parseFloat(version.replace(/[^\d.]+/g, ''));
		}
	} catch {
		nodeVersion = 0;
	}

	return nodeVersion;
}

// REACT

let reactVersion: number;

export function getTargetReactVersion(): number {
	if (reactVersion !== undefined) {
		return reactVersion;
	}

	try {
		// eslint-disable-next-line import/no-extraneous-dependencies
		const pkg = require('react/package.json') as { version: string };

		reactVersion = Number.parseFloat(pkg.version);

		return reactVersion;
	} catch {
		reactVersion = 0;
	}

	try {
		const pkg = getRootPackageJSON();
		const version =
			pkg.dependencies?.react ?? pkg.devDependencies?.react ?? pkg.peerDependencies?.react;

		if (version) {
			reactVersion = Number.parseFloat(version.replace(/[^\d.]+/g, ''));

			return reactVersion;
		}
	} catch {
		reactVersion = 0;
	}

	return reactVersion;
}

// TSCONFIG.JSON

interface TSConfigJSON {
	references?: ProjectReference[];
}

let tsconfigJson: TSConfigJSON;

export function getRootTSConfig(): TSConfigJSON {
	if (tsconfigJson === undefined) {
		// eslint-disable-next-line import/no-dynamic-require
		tsconfigJson = require(TSCONFIG_JSON_PATH) as TSConfigJSON;
	}

	return tsconfigJson;
}

// TYPESCRIPT

export function getRootProjectReferences(): ProjectReference[] | undefined {
	return getRootTSConfig().references;
}
