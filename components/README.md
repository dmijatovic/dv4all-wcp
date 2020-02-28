# Web components

This lib contains some basic web components like buttons, inputs etc.

It exports all components into dv4wc module. In addition there is export per component eg. dv4btn for button.

## Usage

```javascript
import "@dv4all/components";
// TODO: DEMONSTRATE API
```

## Rollup setup

Made partially by [this video](https://www.youtube.com/watch?v=K1RE9FspKxw)

## Importing ESM modules directly

It seems that I need to import esm module directly. Why is that? If I just specify lib it seems to be importing umd files which do not work properly?!?

### Example direct ESM module import

```javascript
// needs to directly point to esm module?!?
import { newCustomElement } from "@dv4all/wcp-utils/lib/dv4wcp.utils.esm";
// THIS WILL NOT WORK!?!?
import { newCustomElement } from "@dv4all/wcp-utils";
```

## Important props in package.json

```json
// set package type to module
"type":"module",
// set main to es6 module
"main": "lib/dv4wcp.js",
// set module also to es6 module file
"module": "lib/dv4wcp.js",

```

## Important rollup settings

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
