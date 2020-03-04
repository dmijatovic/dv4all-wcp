# Development

`THIS REPO IS USED TO TEST WEB COMPONENTS, WORKING WITH LERNA AND HOW PUBLISHING TO NPM WORKS.`

- clone repo
- then

```bash
# install
lerna bootstrap
# build components
lerna run build:components
# run any of the demo options

```

I prefer to run components build and watch in one bash window and one of the demos (next,nuxt,html) in another window. There are scripts created in the root package.json file to support this approach.

in the FIRST bash window run
`npm run dev:components`

in the SECOND bash window run any of these
`npm run dev:html`
`npm run dev:next`
`npm run dev:nuxt`

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
