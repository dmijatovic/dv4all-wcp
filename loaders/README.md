# Loaders/Spinners as web components

`THIS LIBRARY IS USED TO TEST USE OF WEB COMPONENTS, LERNA AND HOW PUBLISHING TO NPM WORKS.`

This module contains some loaders/spinners I used in the past as web components. These loaders are 'stolen' from web over the course of time.
The only added value of this library is that these are created as plain web components and can be used in on any web page.

**This module is part of monorepo [dv4all-wcp-lerna](https://github.com/dmijatovic/dv4all-wcp-lerna).**

## Usage

```bash
# install npm package
npm install @dv4all/loaders
```

### HTML5 implementation

Import cjs version of the library file in the header of html file. See demos/html-demo/icons.html for an example of the implementation.

For more details see [demos/html-demo](https://github.com/dmijatovic/dv4all-wcp-lerna/tree/master/demos/html-demo).

### NextJS implementation

NextJS supports SSR. On the server side customElements are not supported. Therefore you need to ensure that this library is loaded only at the client side. I achieve this in the demo by dynamically importing web components in the app template in React component life cycle method ComponentDidMount. See demos/next-demo/pages/\_app.js file for exact implementation.

For more details see [demos/next-demo](https://github.com/dmijatovic/dv4all-wcp-lerna/tree/master/demos/next-demo).

### NuxtJS implementation

In the NuxtJS I added web components as plugins and set SSR flag to false. This was sufficient. Nuxt has also a component `<client-only>...</client-only>` that can be used to wrap markup that should only be rendered on the client side.

For more details see [demos/nuxt-demo](https://github.com/dmijatovic/dv4all-wcp-lerna/tree/master/demos/nuxt-demo)
