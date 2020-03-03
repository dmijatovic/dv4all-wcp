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
