# Development

`THIS REPO IS USED TO TEST WEB COMPONENTS AND HOW PUBLISHING TO NPM WORKS.`

- clone repo
- then

```bash
# install
lerna bootstrap
# build components
lerna run build:components
# run any of the demo options

```

I prefer to run components build and watch in one bash window and demo side (next,nuxt,html) in another window. There are scripts created in the root package.json file to support this way of working.

in FIRST bash window
`npm run dev:components`

in SECOND bash window
`npm run dev:html`
`npm run dev:next`
`npm run dev:nuxt`

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

## LERNA commands

- created lerna project with `lerna init`
- initialized projects with some installs

```bash
# started with lerna init first
lerna init

# add new packages
lerna create <packagename>

# list packages - check if lerna understands all folders
lerna list

# bootstrap - hoisting node_modules at the top
lerna bootstrap --hoist

# add axios and typescript as dependency TO ALL packages
lerna add axios typescript ts-node

# add  "@rollup/plugin-node-resolve" to ALL @dv4all packages as devDependency
# see https://github.com/lerna/lerna/tree/master/commands/add
# NOTE! there is NO remove command in LERNA at the moment
# see https://github.com/lerna/lerna/issues/1886
lerna add @rollup/plugin-node-resolve --scope=@dv4all/* --dev
lerna add @rollup/plugin-commonjs --scope=@dv4all/* --dev

```

`To be seen as package you need definition to main file in package.json`

### Adding new package to monorepo

```bash
# add new package
lerna create <package-name>

```

### Add node_module hoisting to lerna.json

In section command-bootstrap add hoist:true param. Now you can run bootstrap command without parameter --hoist as it is part of configuration.

```json
{
  "packages": [
    "components",
    "loaders",
    "icons",
    "next-demo",
    "nuxt-demo",
    "web-demo",
    "utils"
  ],
  "command": {
    "bootstrap": {
      "hoist": true
    }
  },
  "version": "0.0.1"
}
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
