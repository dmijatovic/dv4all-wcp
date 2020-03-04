# Next test web components

**`THIS MODULE IS USED TO TEST USE OF WEB COMPONENTS AND HOW PUBLISHING TO NPM WORKS.`**

This is simple test of plain web components with next.

**This module is part of monorepo [dv4all-wcp-lerna](https://github.com/dmijatovic/dv4all-wcp-lerna).**

## Page template

With NextJS page template should be stored in \_app.js file.

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

## Running server/browser side codes

NextJS has 'getInitalProps' function that is runned before page is loaded (on server side)

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

## Custom node server approach

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
