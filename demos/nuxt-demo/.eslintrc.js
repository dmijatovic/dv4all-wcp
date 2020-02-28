module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        "node": true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/recommended'
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
        'vue'
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
        'vue/no-unused-components':['warn'],
        'no-unused-vars':['warn'],
        'no-debugger':['warn']
    }
}
