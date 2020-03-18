# HTML demo of custom web components

`THIS MODULE IS USED TO TEST USE OF WEB COMPONENTS AND HOW PUBLISHING TO NPM WORKS.`

This folders contains plain JS demos of web components:

- @dv4all/components: basic web components. See components.html page
- @dv4all/icons: SVG icons wrapped as custom elements / web components. See icons.html.
- @dv4all/loaders: CSS loaders wrapped as custom elements. See loaders.html.

## Usage

```bash
# install npm packages to test
npm install @dv4all/web-components@latest @dv4all/icons@latest @dv4all/loaders@latest

# run dev server
npm run dev
```

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

`npm run dev` will run development server on localhost:5000.

**This module is part of monorepo [dv4all-wcp-lerna](https://github.com/dmijatovic/dv4all-wcp-lerna).**
