# Icons as web components

`THIS LIBRARY IS USED TO TEST USE OF WEB COMPONENTS AND HOW PUBLISHING TO NPM WORKS.`

The module contains icons as web components. It is a part of @dv4all monorepo created to test web components implementation as NPM packages (modules), how LERNA works and how custom components can be applied with React (NextJS), Vue (NuxtJS) and HTML5.

**This module is part of monorepo dv4all-wcp-lerna.**

## Usage

- install package from NPM

```bash
# install npm packages
npm install @dv4all/icons

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

## Rollup setup

Started based on the info from [this video](https://www.youtube.com/watch?v=K1RE9FspKxw) and adapted over time where needed. Important is to not forget to install the plugins.
