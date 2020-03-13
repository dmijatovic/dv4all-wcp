# Rollup

Started based on the info from [this video](https://www.youtube.com/watch?v=K1RE9FspKxw) and adapted over time where needed. Important is to not forget to install the plugins.

```bash
npm i -D @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-replace rollup-plugin-uglify

```

rollup.config.js

```javascript
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";

export default {
  input: "src/index.js",
  output: [
    {
      file: "lib/dv4wcp.js",
      format: "esm"
    },
    {
      name: "Dv4WCP",
      file: "lib/dv4wcp.cjs.js",
      format: "iife"
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    replace({
      exclude: "node_modules/**",
      ENV: JSON.stringify(process.env.NODE_ENV || "development")
    }),
    process.env.NODE_ENV === "production" && uglify()
  ]
};
```

## [ENV variables](https://www.learnwithjason.dev/blog/learn-rollup-js/)

ENV variables in the example found on internet are performed using replace plugin.

Replace plugin will replace ENV value based on NODE_ENV
