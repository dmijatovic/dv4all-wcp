# Web components monorepo - DEMO

`THIS MONOREPO IS USED TO TEST USE OF WEB COMPONENTS, LERNA AND HOW PUBLISHING TO NPM WORKS.`

The monorepo is created to test web components setup with lerna, nuxt, next and plain HTML5. I am developing ideas about project organization and structure. What folder structure is optimal for max. flexibility and efficiency? How monorepo approach works? When LERNA is helpful?

The components, loaders and utility functions use the same namespace `@dv4all`. The following location and projects are considered as npm libraries:

- `components` (@dv4all/components): represents collection of shared components. I am considering spliting this into 2 packages when collection starts including more complex component. I will start with basic elements (atoms): button, input, checkbox etc. If I split later I will call basic module `@dv4all/elements`.
- `icons` (@dv4all/icons): SVG icons as custom web elements (web components)
- `loaders` (@dv4all/loaders): holds various loader components
- `utils`: this folder holds 2 libraries. Note! the second is just for the purpose of testing. I expect to have mutiple utility libraries and split them by functionality. Currently I see 2:
  - wcp-utils (@dv4all/wcp-utils): web component utility functions
  - fs-util (@dv4all/fs-utils): file system utility functions

Bundling web components to NPM is challenging task. I have experienced some problems when creating bundles with rollup. [After reading this article](https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm/) I was able to solve number of warnings received from rollup.

## Demos

One of the goals is to test use of web components as NPM packages with plain HTML-CSS-JS project but also with React and Vue. For this purpose in the demos folder we have 3 projects. Important discovery concerning web components is that SSR solutions (Next & Nuxt) do require specific approach with web components, namely the web components rendering need to be avoided on the server side because Node does not have support for customElements.

- `html-demo`: plain HTML,CSS and JS application of web component libs from this monorepo. Just import commonjs version javascript file.
- `next-demo`: using custom web components with React. NexyJS is selected because it offers more options like SSR and static sites using React components. This was important choise because universal app do not support customElements on server side. Specific approach is required for web components to work with SSR. Demo imports modules dynmically in the app template on `ComponentDidMount` lifecycle method.
- `nuxt-demo`: using custom web components from this monorepo with Vue. Nuxt is selected in similair fastion as Next because it enables various approached like SSR and static website besides SPA. Demo implements web components as plugins with SSR disabled.

### HTML implementation

This is the easiest implementation of all tested. Just import cjs version of library (file) in the header of html file. For example of the implementation see demos/html-demo/icons.html for example.

For more information [see README in html-demo](/demos/html-demo/README.md).

### Webpack implementation

The webpack demo is actually used for debugging of more complex setups like NextJS and NuxtJS implementations. I had few challenges with these libraries. At the certain point I realised that build problems I was facing could be lot easier discovered if I have simple basic webpack setup.

For more infomation [see README file in webpack-demo](/demos/webpack-demo/README.md).

### NextJS implementation

NextJS supports SSR. On the server side customElements are not supported. Therefore you need to ensure that web components library is loaded only at the client side. I achieved this by dynamically importing web components in the app template in React component life cycle method ComponentDidMount. See demos/next-demo/pages/\_app.js file for exact implementation.

For more information [see README in next-demo](/demos/next-demo/README.md).

### NuxtJS implementation

In NuxtJS demo I added web components as plugins and set SSR flag to false. Nuxt has also an `<client-only>...</client-only>` component that can be used to wrap markup that should only be rendered on the client side.

**`In development mode everything works fine, BUT when compiled web components are not included in the bundle. Further investigation is needed.`**

For more details [see README in nuxt-demo](/demos/nuxt-demo/README.md).

## Testing

For testing I tried Jest and Cypress. At the moment of setting up this project testing web components with Jest have not worked well for me. I mainly used Cypress.

### Cypress

Because customElement (web components) are browser specific proper testing requires testing in browser. As Cypress has support for customElements I decided to use it for most of the tests.

Using e2e tool for testing web components makes it possible to cover demo projects and web components modules in one go. I belive that testing web components using Cypress is the optimal approach to testing web components.

### Jest

I used basic Jest setup with Babel. I did not managed to create succefull tests for the web components. At this point there is no [support for customElements in Jest](https://github.com/facebook/jest/issues/8818). In some articles on web I have seen approach with JSDOM.

I was able to test basic JS functionality in the module utils/wcp with Jest. See [JEST.md](JEST.md) file for more info.
