import type { ProjectReference } from 'typescript';
import { PACKAGE_JSON_PATH, TSCONFIG_JSON_PATH } from './constants';

// PACKAGE.JSON

interface PackageJSON {
	engines?: { node?: string };
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
