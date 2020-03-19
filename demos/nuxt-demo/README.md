# Nuxt demo web components

**`THIS MODULE IS USED TO TEST WEB COMPONENTS with NuxtJS.`**

Test web components with NuxtJS.

**This module is part of monorepo [dv4all-wcp-lerna](https://github.com/dmijatovic/dv4all-wcp-lerna).**

## Setup

```bash
# install all dependencies
npm install

# install latest @dv4all modules
npm i -s @dv4all/icons@latest @dv4all/loaders@latest @dv4all/web-components@latest

# serve with hot reload at localhost:3000
npm run dev

# build for production and launch server
npm run build
npm run start

# generate static project
npm run generate

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
    { src: '@/plugins/dv4all.js', mode: 'client' }
  ],
```

The content of /plugins/dv4all.js is simply import

```javascript
/**
 * Import @dv4all modules
 */
import "@dv4all/icons";
import "@dv4all/loaders";
import "@dv4all/web-components";
```

You might need to wrap your client side ONLY components with `client-only` markup

```html
<client-only>
  <dv4-loader-gooey v-if="show">
    {{ message }}
  </dv4-loader-gooey>
</client-only>
```

When nuxt is in spa mode wrapping custom elements in client-only markup is not requiered.
