import type { BabelConfig } from '@beemo/driver-babel';

const { context, tool } = process.beemo;
const { decorators, react } = tool.config.settings as BeemoSettings;

const config: BabelConfig = {
  babelrc: true,
  babelrcRoots: tool.project.getWorkspaceGlobs({ relative: true }),
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
