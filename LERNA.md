# LERNA commands

These are my remarks about using LERNA. You can always [check official docs](https://github.com/lerna/lerna#readme).

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

## Adding new package to monorepo

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

## [Versioning with LERNA](https://github.com/lerna/lerna/tree/master/commands/version#readme)

```bash
lerna version 1.0.1 # explicit
lerna version patch # semver keyword
lerna version       # select from prompt(s)
```
