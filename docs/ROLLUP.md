# Rollup

Started based on the info from [this video](https://www.youtube.com/watch?v=K1RE9FspKxw) and adapted over time where needed. Important is to not forget to install the plugins.

```bash
npm i -D @rollup/plugin-node-resolve @rollup/plugin-commonjs

```

rollup.config.js

```javascript
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: [
    {
      file: "lib/dv4loaders.js",
      format: "esm"
    },
    {
      name: "Dv4Loaders",
      file: "lib/dv4loaders.cjs.js",
      format: "iife"
    }
  ],
  plugins: [resolve(), commonjs()]
};
```
