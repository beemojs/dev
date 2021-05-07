import path from 'path';

let nodeVersion: number;

// Attempt to extract the node engine from the root package.json
export function getRootNodeVersion(): number {
  if (nodeVersion !== undefined) {
    return nodeVersion;
  }

  try {
    // eslint-disable-next-line import/no-dynamic-require
    const pkg = require(path.join(process.cwd(), 'package.json')) as {
      engines?: { node?: string };
    };
    const version = pkg.engines?.node;

    if (version) {
      nodeVersion = Number.parseFloat(version.replace(/[^\d.]+/g, ''));
    }
  } catch {
    nodeVersion = 0;
  }

  return nodeVersion;
}
