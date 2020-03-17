module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    "node": true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:nuxt/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    "allowImportExportEverywhere": true
  },
  'plugins': [
    'nuxt'
  ],
  'rules': {
    'indent': [
        'warn',
        2
    ],
    'linebreak-style': [
        'warn',
        'unix'
    ],
    'quotes': [
        'warn',
        'single'
    ],
    'semi': [
        'warn',
        'never'
    ],
    // 'nuxt/no-unused-components':['warn'],
    'no-unused-vars':['warn'],
    'no-debugger':['warn'],
    'no-trailing-spaces': ['warn']
  }
}
