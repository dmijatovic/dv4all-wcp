# Storybook

This monorepo is also used to test [Storybook with web components](https://github.com/storybookjs/storybook/tree/master/app/web-components).

Storybook started originally as React only lib from documenting the components. Due to popularity it extended to other frameworks and lately added support for web components.

The [official documentation](https://storybook.js.org/docs/basics/introduction/) is well written.

There is [separate module for web components](https://www.npmjs.com/package/@storybook/web-components)

## Setup

I just followed documentation on this. I needed to install lit-html element as devDependecy. My @dv4all web component projects use `plain web components` with zero dependencies.

```bash
# scaffold storybook
npx -p @storybook/cli sb init -t web_components

# install lit-html
npm i -D lit-html

# install plugins
npm i -D @storybook/addon-a11y @storybook/addon-actions @storybook/addon-console @storybook/addon-docs @storybook/addon-storysource @storybook/addon-notes

# Datapunt plugins
npm i -D @storybook/addon-info @storybook/addon-actions @storybook/addon-knobs @storybook/addon-links

# plugin to deploy to gh_pages
@storybook/storybook-deployer

```

## Stories location

Storybook works with the .stories.js files. The location of the files is defined in main.js prop stories or can be defined in preview.js. In this repo I have multiple locations to load stories from. The advice from documentation is to define these in preview.js file like this.

```javascript
// excerpt from ./storybook/preview.js
//... OTHER CODE ...
// Load stories from 3 locations
const reqStories = () => [
  require.context("../components/src", true, /\.stories\.(js|mdx)$/),
  require.context("../icons/src", true, /\.stories\.(js|mdx)$/),
  require.context("../loaders/src", true, /\.stories\.(js|mdx)$/)
];
configure(reqStories(), module);
```

## Add Custom Head Tags

You can add different tags to the HTML head. This is useful for adding web fonts or some external scripts.

See here for [more info](https://storybook.js.org/docs/configurations/add-custom-head-tags/)

## Addons

There are lot of [addons for storybook](https://storybook.js.org/addons/). These are defined in main.js file.

The tab order is created by order in which they appear in the array in the main.js file.

```javascript
//.storybook/main.js
module.exports = {
  addons: [
    // register in the panel
    "@storybook/addon-notes/register-panel",
    // '@storybook/addon-actions',
    "@storybook/addon-a11y/register",
    // '@storybook/addon-storysource',
    "@storybook/addon-docs"
    // register at top
    //'@storybook/addon-notes/register-panel'
  ]
};
```

### Addon-notes

It enables [markdown notes](https://www.npmjs.com/package/@storybook/addon-notes).

### Accessibility

[Official documentation](https://github.com/storybookjs/storybook/tree/master/addons/a11y)

```bash
# install a11y addon
npm i -D @storybook/addon-a11y
```

### Story source

[Official documentation](https://github.com/storybookjs/storybook/tree/master/addons/storysource)

```bash
# install source viewer addon
npm i -D @storybook/addon-storysource
```

### DocsPage

Official addon documentation.

Additional setup is required for [web components](https://github.com/storybookjs/storybook/tree/master/addons/docs/web-components)

There is [demo web components repo on storybook](https://github.com/storybookjs/storybook/tree/master/examples/web-components-kitchen-sink).

```bash
npm i -D @storybook/addon-docs
```

### Console and actions

More info about [console addon](https://github.com/storybookjs/storybook-addon-console)

```bash
# install plugins
npm i -D @storybook/addon-console @storybook/addon-actions
```

## Publishing

Storybook can build static site.

```bash
# build static site in folder gh_pages
build-storybook -o gh_pages

# npm script in this project
npm run build:storybook
```

### Publish to githug pages

There is addon for [publishing storybook to Github pages](https://github.com/storybookjs/storybook-deployer).

```bash
# install addon
npm i -D @storybook/storybook-deployer

# script to deploy
storybook-to-ghpages

# npm script
npm run deploy:storybook
```
