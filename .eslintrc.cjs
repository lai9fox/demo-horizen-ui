require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  rules: {
    // 末尾分号
    semi: ['error', 'always'],
    // 使用单引号
    quotes: ['error', 'single', { avoidEscape: true }],
    // 每个文件最后一行是空行
    'eol-last': ['error', 'always'],
    // 不允许使用 var 关键字
    'no-var': 'error',
    'array-bracket-newline': ['error', { multiline: true }],
    'vue/multi-word-component-names': 0, // 不检验组件名需要多个单词组成
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/attributes-order': 'error', // 校验节点的属性顺序
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'bemNS',
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
