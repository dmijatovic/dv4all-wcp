# Testing with [JEST](https://jestjs.io/docs/en/getting-started.html)

```bash
# install Jest using lerna
lerna add jest babel-jest --dev

# you also need babel if not installed
lerna add @babel-preset-env --dev

# create config in the project
jest --init

```

## Testing ES6 with Jest

Babel need to be used with jest to support ES6 import statement. The setup is created based on [this article](https://medium.com/@saplos123456/using-es6-import-and-export-statements-for-jest-testing-in-node-js-b20c8bd9041c)

babel.config.js

```javascript
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
};
```

## Testing customElements/web components

My first impression is that testing web components with Jest at this moment is not optimal. There is [no support for customElements at the time of writing this](https://github.com/facebook/jest/issues/8818). Work around is to include JSDOM.

Maybe I can try to mockup customElement object and see if define is called with propper arguments?

Another idea is to move test to Cypress? These test will need to be done in the demo modules. On the other hand same test can be applied to all 3 demos.

I decided to do both. Jest part will be experiental and Cypress will have real test that can cover web components through demo pages :-).
