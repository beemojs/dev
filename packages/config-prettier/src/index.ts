import { IGNORE_LIST } from '@beemo/config-constants';
import type { PrettierConfig } from '@beemo/driver-prettier';

const config: PrettierConfig = {
	...(require('prettier-config-beemo') as PrettierConfig),
	ignore: [
		...IGNORE_LIST,
		// Config files
		'CHANGELOG.md',
		'*.d.ts',
		'*.d.cts',
		'*.d.mts',
	],
};

export default config;
