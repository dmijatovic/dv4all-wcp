# Storybook

This monorepo is also used to test [Storybook with web components](https://github.com/storybookjs/storybook/tree/master/app/web-components).

At the point of testing it there were some problems with export of strorybook and seeing web compoenents.

## Installation

Just followed documentation on this. I needed to install lit-html element as devDependecy. My @dv4all web component projects use `plain web components` with zero dependencies.

```bash
# install storybook with web components support
npx -p @storybook/cli sb init -t web_components

# install lit-html
npm i -D lit-html

```

## Plugins

There are number of usefull [addons for storybook](https://storybook.js.org/addons/). We test few here.

### Console and actions

More info about [console addon](https://github.com/storybookjs/storybook-addon-console)

```bash
# install plugins
npm i -D @storybook/addon-console @storybook/addon-actions
```

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
