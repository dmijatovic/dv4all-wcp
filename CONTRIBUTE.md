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
