declare const __DEV__: boolean;

declare interface BeemoSettings {
  // Enable TypeScript decorators
  decorators?: boolean;
  // Enable Jest projects
  projects?: boolean;
  // Support React
  react?: boolean | 'classic' | 'automatic';
}
