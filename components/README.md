# Web components TEST

`THIS LIBRARY IS USED TO TEST USE OF WEB COMPONENTS AND HOW PUBLISHING TO NPM WORKS.`

This lib contains basic web components like buttons, inputs etc. It exports all components into dv4wc module. It depens on two other libraries from @dv4all scope.

**This module is part of monorepo dv4all-wcp-lerna.**

## Usage

```javascript
import "@dv4all/web-components";
// TODO: DEMONSTRATE API
```

## Lessons learned about web components and NPM publishing

The rest of readme contains my remarks about setting process and specific 'quirks' during use of web components with plain html, nuxtjs and nextjs projects (which are also part of this monorepo).

### Important props in package.json

```json
// set package type to module
"type":"module",
// set main to es6 module
"main": "lib/dv4wcp.js",
// set module also to es6 module file
"module": "lib/dv4wcp.js",
// for browser I used cjs (iife) format
"browser":"lib/dv4wcp.csj.js"
```

### Rollup setup

The rollup setup is partially based on [this video](https://www.youtube.com/watch?v=K1RE9FspKxw)

You do need to import plugins for commonjs and node resolvers. The main export should point to ES6 module (type:esm). In the example bellow this is first output defined.

```javascript
// import babel from 'rollup-plugin-babel'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: [
    {
      file: "lib/dv4wcp.js",
      format: "esm"
    },
    {
      name: "Dv4WCP",
      file: "lib/dv4wcp.umd.js",
      format: "umd"
    },
    {
      name: "Dv4WCP",
      file: "lib/dv4wcp.cjs.js",
      format: "iife"
    }
  ],
  plugins: [resolve(), commonjs()]
};
```

### Publishing moule to NPM

This package is scoped under @dv4all.

```bash
# first time on machine you need to adduser/login
npm adduser

# you need to be logged in first
npm run publish
```
