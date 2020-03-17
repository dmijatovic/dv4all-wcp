module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    "node": true,
  },
  'extends': [
    'eslint:recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
    "allowImportExportEverywhere": true
  },
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
    'no-unused-vars':['warn'],
    'no-debugger':['warn'],
    'no-trailing-spaces': ['warn']
  }
}
