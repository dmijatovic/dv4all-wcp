# Web components DEMO monorepo

This monorepo is created to test web components setup with lerna, nuxt, next and plain JS. I am developing ideas about project organization and structure. What folder structure is handy? How monorepo approach works? Where LERNA is helpful?

The components, loaders and utility functions use same namespace `@dv4all`. The following location and projects are considered as npm libraries:

- components: @dv4all/components, represents collection of shared components. I am considering spliting this into 2 packages when collection starts including more complex component. I will start with basic elements (atoms): button, input, checkbox etc. If I split later I will call basic module `@dv4all/elements`.
- loaders: @dv4all/loaders, holds various loader components
- utils: @dv4all/wcp-utils, this folder holds 2 libraries. Note! the second is just for purpose of testing. I am expecting to have mutiple utility libraries splitted by functionality. Currently I see 2: wcp-utils (web component utility functions) and fs-util (file system utility functions)

## Development

- clone repo
- then

```bash
# install
lerna bootstrap

# npm run dev:html
lerna run dev:html --parallel
lerna run dev:next --parallel
lerna run dev:nuxt --parallel

# build components
lerna run build:components

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
## see https://github.com/lerna/lerna/tree/master/commands/add
lerna add @rollup/plugin-node-resolve --scope=@dv4all/* --dev

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

## Packages

This repo is used to test lerna but also other various stuff. For example we test web components (customElements) creation and application in next (React) and nuxt (Vue)

- components: location for shared web components
- loaders: loaders as web components lib, using rollup as bundler.
- demos:
  - html-demo: plain html,css and js
  - next-test: tesing use of web components with next and React
  - nuxt-test: testing use of web components with nuxt and Vue
- utils:
  - fs: shared utils library, using rollup as bundler.
  - wcp: shared web components utilities between loader and components library
