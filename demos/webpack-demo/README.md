# Webpack & web components bundling

This project is created to test bundling of custom web components with webpack. I had a problem with NuxtJS build with custom web components of this monorepo. Development version worked well but when building to production web components modules were not inlcuded. It seemed to me that the problem is webpack related. To isolate the problem I created this project.

Maybe I can test different bundlers here later?

All @dv4all web components are bundled with rollup.

## Setup

```bash
# 1 install latest @dv4all modules
npm i -s @dv4all/icons@latest @dv4all/loaders@latest @dv4all/web-components@latest

# 2. install webpack modules
npm i -D webpack@latest webpack-cli@latest webpack-dev-server@latest webpack-bundle-analyzer@latest

# 3. install webpack plugins for html and static assets copying
npm i -D html-webpack-plugin@latest copy-webpack-plugin@latest

# 4. more webpack plugins - not used during test
npm i -D url-loader@latest file-loader@latest uglifyjs-webpack-plugin clean-webpack-plugin

```

## Webpack setup challenges

Basic setup was working in devlopment mode, but when building @dv4all web component modules (imports) were not included in the final build.

### Optimization.sideEffects

[After searching on internet](https://github.com/webpack/webpack/issues/7499) I found info that [otimization options sideEffect](<(https://webpack.js.org/configuration/optimization/#optimizationsideeffects)>) is set to true by default in webpack. After setting this value to false in webpack.config.js @dv4all web components modules were included in the build.

### Tree shaking web components with Webpack

[Further investigation about sideEffects](<(https://webpack.js.org/guides/tree-shaking/)>) points out that sideEffect value provided in package.json is used for tree shaking. @dv4all modules have sideEffects value set to false in their package.json files. Simple import with Webpack when optimization sideEffects value is set to true it causes @dv4all web components not to be included in the build (while these are present in development mode).

### `browser` vs `module` vs `main` prop in package.json

[Next discovery I made](https://github.com/webpack/webpack/issues/4674) is that webpack prefers file defined in the browser prop of package.json. In @dv4all I defined CommonJS with IIFE as version for the browser. This seem to cause compile problems in webpack which are evindent ONLY in production build.

After removing "browser" prop and defining ESM in the module prop and CJS in the main prop of package.jsob the webpack build worked as expected. But still webpack imports all classes from lib even when I used only one class icon as in the example here and when I set optimization.usedExports to true. Further investigation is required to get tree shaking working optimally.
