# Lessons NPM

In this document I write my learnings about publishing NPM packages.

## Important props in package.json

```json
// set package type to module
"type":"module",
// set main to es6 module
"main": "lib/dv4wcp.js",
// set module also to es6 module file
"module": "lib/dv4wcp.js",
// set browser to commonjs (iife) file
// i used this file in plain HTML demo
"browser":"lib/dv4wcp.cjs.js",
```

## Important rollup settings

You do need to import plugins for commonjs and node resolvers. The main export should point to ES6 module (type:esm). In the example bellow this is first output defined.
In plain HTML demo I needed to use commonjs bundel (second option).

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
      file: "lib/dv4wcp.cjs.js",
      format: "iife"
    }
  ],
  plugins: [resolve(), commonjs()]
};
```

## Publishing NPM packages

This repo is used to test web components (customElements) creation and application in next (React), nuxt (Vue) and plain HTML5 projects. This section will address lernings related to publishing packages to NPM. Besides manual approach nowadays there are tools to automate publishing. These tools are able to bump a version, generate CHANGES.LOG, tag release and publish the package. Let's first look at bare manual approach and later we will [test some tools that are widely used](https://www.npmtrends.com/release-it-vs-semantic-release-vs-standard-version-vs-np-vs-conventional-changelog)

All packages from this monorepo which are published to NPM are scoped as @dv4all/

### Manual publishing to NPM

This is common manual approach.

```bash
# first time on machine you need to adduser/login
npm adduser

# increase version number
# it will also create tag
npm version patch

```