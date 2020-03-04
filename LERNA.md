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
# NOTE! if there are errors with package versions
# references you might need to delete node_modules
# from all packages
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

## [Versioning with LERNA](https://github.com/lerna/lerna/tree/master/commands/version#readme)

```bash
# explicit
lerna version 1.0.1
# semver keyword
lerna version patch
# select from prompt(s)
lerna version
# add conventional-commit
# see more here https://conventionalcommits.org
lerna version --conventional-commits
```

### Independent versioning

Basic info comes from [this article](https://samhogy.co.uk/2018/08/lerna-independent-mode-with-semver.html)

So we use semver but each package has their own version number. I think this is more flexible approach in most situations. There might be situation that 'tight' version coupling is required. For that set the version number in the version prop of lerna.json.

## [Check changes](https://github.com/lerna/lerna/tree/master/commands/changed)

This will detect new commits that are not published and will show list of packages that have changes.

```bash
# check what is changed
lerna changed
```

## Publishing with LERNA

Use [lerna publish command](https://github.com/lerna/lerna/tree/master/commands/publish) to publish the packages. Lerna will publish only changed packages. After executing code, if version is defined as `independent` you can select which version to apply for each package.

Lerna publish supports automaticall creation of CHANGELOG.md if you use [commits convention](https://conventionalcommits.org)

```bash
# start interactive publish mode
# you need to provide public access
lerna publish --access public
```

### Publishing scoped packages

To publish scoped packages as open source you need to [add definition in package.json](https://github.com/lerna/lerna/tree/master/commands/publish#per-package-configuration)

package.json

```json
// ... OTHER
"publishConfig": {
  "access": "public"
},
// ... OTHER

```

When publishing scoped packages, the access level defaults to restricted. If you want your scoped package to be [publicly viewable (and installable)](https://docs.npmjs.com/misc/config#access):

```bash
npm config set access public
```

## LERNA config file (lerna.json)

lerna.json

```json
{
  "version": "independent",
  "npmClient": "npm",
  "command": {
    "bootstrap": {
      "hoist": true
    },
    "version": {
      "conventionalCommits": true,
      "message": "chore(release): publish package with lerna"
    }
  },
  "packages": ["components", "icons", "loaders", "utils/**"]
}
```
