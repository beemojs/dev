import type { BabelConfig } from '@beemo/driver-babel';
import type { BabelPresetBeemoOptions } from 'babel-preset-beemo';

const { context, tool } = process.beemo;
const { decorators = false, react = false } = tool.config.settings as Pick<
  BabelPresetBeemoOptions,
  'decorators' | 'react'
>;

const config: BabelConfig = {
  babelrc: true,
  babelrcRoots: tool.project.getWorkspaceGlobs({ relative: true }),
  caller: {
    name: 'beemo',
  },
  comments: false,
  presets: [
    [
      'beemo',
      {
        decorators,
        modules: !!context.getRiskyOption('esm'),
        react,
      },
    ],
  ],
};

export default config;
