# nuxt-demo web components

**`THIS MODULE IS USED TO TEST USE OF WEB COMPONENTS AND HOW PUBLISHING TO NPM WORKS.`**

Nuxt test of web components in this monorepo.

**This module is part of monorepo [dv4all-wcp-lerna](https://github.com/dmijatovic/dv4all-wcp-lerna).**

## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Working with SSR, client side scripts and web components

In this demo we test customElements and web components on page loader. When in `universal` mode (SSR on), the loaders should be loaded ONLY on clients side because HTMLElement is not supported element on SSR (in Node).

nuxt.config.js - plugins section

```javascript
  mode: 'universal',
  /*
  ...
  */
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // Client side ONLY plugins - SET ssr to FALSE
    { src: '@/plugins/dv4-loaders-wc.js', ssr: false }
  ],
```

Wrap your client side ONLY components with `client-only` markup

```html
<client-only>
  <dv4-loader-gooey v-if="show">
    {{ message }}
  </dv4-loader-gooey>
</client-only>
```

When nuxt is in spa mode wrapping custom elements in client-only markup is not requiered.
