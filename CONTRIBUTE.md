# Development

`THIS REPO IS USED TO TEST WEB COMPONENTS, WORKING WITH LERNA AND HOW PUBLISHING TO NPM WORKS.`

- clone repo
- then run lerna bootstrap

```bash
# install
lerna bootstrap
```

I prefer to run components build and watch in one bash window and one of the demos (next,nuxt,html) in another window. There are scripts created in the root package.json file to support this approach.

in the FIRST bash window run
`npm run dev:components`

in the SECOND bash window run any of these
`npm run dev:html`
`npm run dev:next`
`npm run dev:nuxt`

in THIRD window run Cypress to create test
`npm run e2e:open`

## [Commit conventions](https://www.conventionalcommits.org/en/v1.0.0/#summary)

This repo is also used to test working of conventional commits for generating CHANGELOG. This feature is supported by lerna.

For complete info see [official documentation](https://www.conventionalcommits.org/en/v1.0.0/#summary). Below is short summary:

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- `fix`: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).
- `feat`: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
- `chore`: not sure where to use this? For some small changes not related to code?
- `docs`: documentation changes
- `ci`: continuous integration tasks / devops tasks

### BREAKING CHANGES

A commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.

footers other than BREAKING CHANGE: \<description> may be provided and follow a convention similar to git trailer format.

Additional types are not mandated by the conventional commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE).

## Publishing flow

In this repo I am testing two approaches.

### Manual publishing of packages to NPM

This can be called traditional approach. It is slower but allows for more granularity.
The steps are:

- commit changes: `git commit ...`
- increase version number: manually set version number in package.json
- update CHANGELOG.ms file: manually add text to changelog.md
- commit and tag version: push a tag in format `@scope/module@version`
- push to github: `git push`
- publish npm package: `npm run release` or `npm publish --access public`

### Using LERNA to publish

This repo is created to test how well automated approach with LERNA works. In the lerna config file (lerna.json) we stated that versioning should use conventional commits. We run `lerna changed` to check which packages are changed. If we have changes then we run `lerna publish` which will update changelog.md file, decide on version increase (major|minor|patch), create tag with the version number, push tag to the github repo and publish the module(s) to NPM.

- commit changes: `git ...`
- check changes: `lerna changed`
- publish packages: `lerna publish`

My first impleressions are: lerna does quite a lot automatically which is good. What I would like to be improved:

- CHANGELOG.md: there is lot of empty space in the file between each release tag
- Minor version bump: it is based on conventional commits and in some cases I did not have a need for a minor version bump but lerna advices so. I am new to conventional commits so why/when the minor version is used insteda of patch is not completely clear to me.
