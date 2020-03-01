# Web components TEST

`THIS LIBRARY IS USED TO TEST USE OF WEB COMPONENTS AND HOW PUBLISHING TO NPM WORKS.`

This lib contains basic web components like buttons, inputs etc. It exports all components into dv4wc module. It depens on two other libraries from @dv4all scope.

**This module is part of monorepo dv4all-wcp-lerna.**

## Usage

- install package from NPM

```bash
# install npm package
npm install @dv4all/web-components
```

### HTML5 implementation

Import cjs version of the library () file in the header of html file. For example of the implementation see demos/html-demo/icons.html for example.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/favicon.png" sizes="16x16" type="image/png" />
    <title>Icons - web components</title>
    <!--IMPORT @dv4all PACKAGES to registed customElements -->
    <script src="node_modules/@dv4all/icons/lib/dv4icons.cjs.js"></script>
    <script src="node_modules/@dv4all/loaders/lib/dv4loaders.cjs.js"></script>
    <script src="node_modules/@dv4all/components/lib/dv4wcp.cjs.js"></script>
    <!-- END IMOPRT CUSTOM COMPONENTS-->
    <script src="styles/layout.js"></script>
    <link rel="stylesheet" href="icons.css" />
  </head>
  <body>
    <!--EXAMPLE ICON CUSTOM WEB COMPONENT -->
    <dv4-icon-cancel-circle class="dv4-icon" title="My new title" />
  </body>
</html>
```

### NextJS implementation

NextJS supports SSR. On the server side customElements are not supported. Therefore you need to ensure that this library is loaded only at the client side. I achieve this in the demo by dynamically importing web components in the app template in React component life cycle method ComponentDidMount. See demos/next-demo/pages/\_app.js file for exact implementation.

```javascript
export default class MyApp extends App {
  // IMPORT web components on CLIENT SIDE
  // othewise NextJS will try to render it
  // on the server and it will faile with error
  // about customElements.define ... undefined
  componentDidMount() {
    console.log("MyApp.didMount...");
    import("@dv4all/loaders").then(d => {
      console.log("imported dv4loaders...", d);
    });
    import("@dv4all/icons").then(d => {
      console.log("imported dv4icons...", d);
    });
    import("@dv4all/components").then(d => {
      console.log("imported dv4components...", d);
    });
  }
  // ... OTHER CODE ...
}
```

### NuxtJS implementation

In the NuxtJS I added web components as plugins and set SSR flag to false. This was sufficient. Nuxt has also a component `<client-only>...</client-only>` that can be used to wrap markup that should only be rendered on the client side.

`extract from nuxt.config.js`

```javascript
  // .... OTHER CODE
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/dv4-loaders-wc.js'
    { src: '@/plugins/dv4-loaders-wc.js', ssr: false },
    { src: '@/plugins/dv4-components.js', ssr: false },
    { src: '@/plugins/dv4-icons.js', ssr: false }
  ],
  // .... OTHER CODE
```

Content dv4-loaders-wc.js is simple import of @dv4all/loaders npm package

```javascript
// import NPM package
import "@dv4all/loaders";
```

## Lessons learned about web components and NPM publishing

The rest of readme contains my remarks about setting process and specific 'quirks' during use of web components with plain html, nuxtjs and nextjs projects (which are also part of this monorepo).

### Important props in package.json

```json
// set package type to module
"type":"module",
// set main to es6 module
"main": "lib/dv4wcp.js",
// set module also to es6 module file
"module": "lib/dv4wcp.js",
// for browser I used cjs (iife) format
"browser":"lib/dv4wcp.csj.js"
```

### Rollup setup

The rollup setup is partially based on [this video](https://www.youtube.com/watch?v=K1RE9FspKxw)

You do need to import plugins for commonjs and node resolvers. The main export points to ES6 module (type:esm). In the example bellow this is first output defined. The second export is for browsers and it uses IIFE. I have succefully used this version in my plain HTML demo project, see demos/html-demo (which is part of this monorepo).

```javascript
// import babel from 'rollup-plugin-babel'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: [
    {
      file: "lib/dv4wcp.js",
      format: "esm"
    },
    {
      name: "Dv4WCP",
      file: "lib/dv4wcp.cjs.js",
      format: "iife"
    }
  ],
  plugins: [resolve(), commonjs()]
};
```

### Publishing module to NPM

This package is scoped under @dv4all.

```bash
# first time on machine you need to adduser/login
npm adduser
# you need to be logged in first
npm run pub
# or directly
npm publish --access public
```
