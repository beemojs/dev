import fs from 'fs';
import type { ProjectReference } from 'typescript';
import { PACKAGE_JSON_PATH, TSCONFIG_JSON_PATH } from './constants';

export function parseJSON<T>(filePath: string): T {
	const content = fs
		.readFileSync(filePath, 'utf8')
		.split('\n')
		// Remove comments from JSON files
		.filter((line) => !/^\s*(#|\/)/.test(line))
		.join('\n');

	return JSON.parse(content) as T;
}

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
		packageJson = parseJSON(PACKAGE_JSON_PATH);
	}

	return packageJson;
}

// NODE.JS

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
		const pkg = parseJSON<{ version: string }>(require.resolve('react/package.json'));

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
		tsconfigJson = parseJSON(TSCONFIG_JSON_PATH);
	}

	return tsconfigJson;
}

// TYPESCRIPT

export function getRootProjectReferences(): ProjectReference[] | undefined {
	return getRootTSConfig().references;
}
