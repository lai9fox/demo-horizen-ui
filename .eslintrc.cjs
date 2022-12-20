/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
