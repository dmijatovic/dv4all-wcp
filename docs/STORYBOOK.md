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

## Webpack config

```json
{
  "mode": "production",
  "bail": true,
  "devtool": "#cheap-module-source-map",
  "entry": [
    "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/@storybook/core/dist/server/common/polyfills.js",
    "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/@storybook/core/dist/server/preview/globals.js",
    "/home/dusan/iis/dev/dv4all/dv4all-wcp/.storybook/preview.js"
  ],
  "output": {
    "path": "/home/dusan/iis/dev/dv4all/dv4all-wcp/gh_pages",
    "filename": "[name].[hash].bundle.js",
    "publicPath": ""
  },
  "plugins": [
    {
      "options": {
        "template": "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/@storybook/core/dist/server/templates/index.ejs",
        "templateContent": false,
        "filename": "iframe.html",
        "hash": false,
        "inject": false,
        "scriptLoading": "blocking",
        "compile": true,
        "favicon": false,
        "minify": {
          "collapseWhitespace": true,
          "removeComments": true,
          "removeRedundantAttributes": true,
          "removeScriptTypeAttributes": false,
          "removeStyleLinkTypeAttributes": true,
          "useShortDoctype": true
        },
        "cache": true,
        "showErrors": true,
        "chunks": "all",
        "excludeChunks": [],
        "chunksSortMode": "none",
        "meta": {},
        "base": false,
        "title": "Webpack App",
        "xhtml": false,
        "alwaysWriteToDisk": true
      },
      "version": 4
    },
    {
      "definitions": {
        "process.env": {
          "NODE_ENV": "\"production\"",
          "NODE_PATH": "\"\"",
          "PUBLIC_URL": "\".\""
        },
        "NODE_ENV": "\"production\""
      }
    },
    {
      "options": {},
      "logger": {},
      "pathCache": {},
      "fsOperations": 0,
      "primed": false
    },
    {
      "profile": false,
      "modulesCount": 500,
      "showEntries": false,
      "showModules": true,
      "showActiveModules": true
    },
    {
      "definitions": {}
    },
    {
      "resourceRegExp": {}
    }
  ],
  "module": {
    "rules": [
      {
        "test": {},
        "use": [
          {
            "loader": "babel-loader",
            "options": {
              "cacheDirectory": "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/.cache/storybook",
              "presets": [
                [
                  "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/@babel/preset-env/lib/index.js",
                  {
                    "shippedProposals": true,
                    "useBuiltIns": "usage",
                    "corejs": "3"
                  }
                ],
                [
                  "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/babel-preset-minify/lib/index.js",
                  {
                    "builtIns": false,
                    "mangle": false,
                    "simplify": false
                  }
                ]
              ],
              "plugins": [
                "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js",
                "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/@babel/plugin-proposal-class-properties/lib/index.js",
                "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js",
                [
                  "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/babel-plugin-emotion/dist/babel-plugin-emotion.cjs.js",
                  {
                    "sourceMap": true,
                    "autoLabel": true
                  }
                ],
                "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/babel-plugin-macros/dist/index.js"
              ]
            }
          }
        ],
        "include": ["/home/dusan/iis/dev/dv4all/dv4all-wcp"],
        "exclude": ["/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules"]
      },
      {
        "test": {},
        "use": [
          {
            "loader": "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/raw-loader/dist/cjs.js"
          }
        ]
      },
      {
        "test": [{}, {}, {}, {}, {}, {}, {}],
        "use": {
          "loader": "babel-loader",
          "options": {
            "plugins": [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-syntax-import-meta",
              [
                "bundled-import-meta",
                {
                  "importStyle": "baseURI"
                }
              ]
            ],
            "presets": [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "entry",
                  "corejs": 3
                }
              ]
            ],
            "babelrc": false
          }
        }
      },
      {
        "test": {},
        "sideEffects": true,
        "use": [
          "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/style-loader/dist/cjs.js",
          {
            "loader": "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/css-loader/dist/cjs.js",
            "options": {
              "importLoaders": 1
            }
          },
          {
            "loader": "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/postcss-loader/src/index.js",
            "options": {
              "ident": "postcss",
              "postcss": {}
            }
          }
        ]
      },
      {
        "test": {},
        "loader": "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/file-loader/dist/cjs.js",
        "query": {
          "name": "static/media/[name].[hash:8].[ext]"
        }
      },
      {
        "test": {},
        "loader": "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/url-loader/dist/cjs.js",
        "query": {
          "limit": 10000,
          "name": "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  "resolve": {
    "extensions": [".mjs", ".js", ".jsx", ".json"],
    "modules": ["node_modules"],
    "alias": {
      "babel-runtime/core-js/object/assign": "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/core-js/es/object/assign.js",
      "react": "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/react",
      "react-dom": "/home/dusan/iis/dev/dv4all/dv4all-wcp/node_modules/react-dom"
    }
  },
  "optimization": {
    "splitChunks": {
      "chunks": "all"
    },
    "runtimeChunk": true,
    "minimizer": [
      {
        "options": {
          "test": {},
          "extractComments": true,
          "sourceMap": true,
          "cache": true,
          "parallel": true,
          "terserOptions": {
            "mangle": false,
            "keep_fnames": true
          }
        }
      }
    ]
  },
  "performance": {
    "hints": "warning"
  }
}
```
