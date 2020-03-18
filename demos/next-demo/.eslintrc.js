module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    "node": true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    //nuxt does not require react import
    "React": "writable"
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    "allowImportExportEverywhere": true
  },
  'plugins': [
    'react'
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
    'no-unused-vars':['warn'],
    'no-debugger':['warn'],
    'no-trailing-spaces': ['warn'],
    //nuxt does not require react import
    "react/react-in-jsx-scope": "off",
    "react/prop-types":"off"
  }
}
