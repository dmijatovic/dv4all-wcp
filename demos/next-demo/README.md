# Next test web components

**`THIS MODULE TESTS USE OF WEB COMPONENTS with NextJS`**

This is simple test of (native) web components with NextJS.

**This module is part of monorepo [dv4all-wcp-lerna](https://github.com/dmijatovic/dv4all-wcp-lerna).**

## Development

```bash
# install latest @dv4all modules
npm i -s @dv4all/icons@latest @dv4all/loaders@latest @dv4all/web-components@latest
# install latest next
npm i -s next@latest react@latest react-dom@latest
# linter
npm i -D eslint@latest eslint-plugin-react@latest

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

```

## Web components and SSR

When using ServerSideRendering with Node the custom web components produce error on Node server. The error message is that customElements are undefined.
This sounds logical as customElements are not relevant in Node backend.

Possible solutions are:

- include webcomponents file in the header of index page - outside of Next.

```javascript
// import head component from Next
import Head from "next/head";
// add webcomponents script to header of the page
<Head>
  <script src="loader.esm.js"></script>
</Head>;
```

- dynamically import web components when component loaded. In this example we use template \_app component lifecycyle method 'componentDidMount'

```javascript

  componentDidMount(){
    console.log("MyApp.didMount...")
    import('@dv4all/loaders').then(d=>{
      console.log("imported dv4...", d)
    })
  }

```

## Web component events and React

React cannot listen to native custom element events by simply attaching the event to a custom element (as you can do with standard elements).

There are several options to mitigate this problem but I find NONE really developer friendly. At this point in time my conclusion is that React is not web components friendly.

For more info about possible ways to solve the challenge [see this article](https://coryrylan.com/blog/using-web-components-in-react).

I used the following approach to listen to native custom element events in this demo:

- Use reference to be able to access custom element from React component

```javascript
// set reference to custom element dv4info
const dv4info = useRef(null);
```

- Set event listener to custom element event we need to listen to after react component mounted (and update state on event).

```javascript
// listen to onClose event after React component mounted
useEffect(() => {
  if (dv4info.current) {
    dv4info.current.addEventListener("onClose", el => {
      setState({
        show: false,
        type: "info"
      });
    });
  }
}, []);
```

## NextJS learnings

Further in this readme I list learnings and remarks about NextJS. Some of remarks are not related to web components but to my experience with NextJS in general.

### Static site export

NexJS makes possible to export Rect code to a static website. [See documentation for an example](https://nextjs.org/learn/excel/static-html-export).
The repo from documentation is [here](https://github.com/zeit/next-learn-demo/tree/master/E1-static-export).

- add path map to next.config.js. Note: each route that needs to be accessible from outside world (drop-in) need to be defined.

```javascript
module.exports = {
  // static export definition
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/icons": { page: "/icons" },
      "/loaders": { page: "/loaders" }
    };
  }
};
```

- run `next build`: this will build the project
- run `next export`: this will create static stite in out folder.

There is a shortcut in package.json for build and export `npm run static`

### Page template

With NextJS page template should be stored in `pages\_app.js` file.

### Running server/browser side codes

NextJS has `getInitalProps` function that is runned before page is loaded (on server side)

Example of functional component is at link SSR.

```javascript
// intial data load by next
// first time loading is on the server side
// when using spa router next loadings are on the client
ssr.getInitialProps = function(ctx) {
  // console.log("SSR page.getInitalProps...", ctx)
  if (process.browser) {
    console.log("getInitialProps...in browser");
  } else {
    console.log("getInitialProps...on server");
  }
  return { loading: true };
};
```

### Custom node server approach

Next is universal Node app. It offers extending Node backend with custom codes for facilitating backend api.

Basic implementation should be like this (/server/index.js)

```javascript
const next = require("next");
const express = reqire("express");

//get environment
const dev = process.env.NODE_ENV !== "production";
// intialize next app
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server
    .use(handle)
    .listen(PORT,(err)=>{
      if err throw new Error(err.message)
      console.log("Ready on port...", PORT)
    })
});
```

**This module is part of monorepo [dv4all-wcp-lerna](https://github.com/dmijatovic/dv4all-wcp-lerna).**
