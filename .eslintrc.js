module.exports = {
  root: true,
  extends: ['beemo/node', 'beemo'],
  globals: {
    BeemoSettings: 'readonly',
  },
  rules: {
    // Config packages are typically a default export
    'import/no-default-export': 'off',
  },
};
