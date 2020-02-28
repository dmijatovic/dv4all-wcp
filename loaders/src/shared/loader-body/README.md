# Loader Body (SHARED)

This component is shared in all loader components. It is used to display text message and/or loader body elements. It is centered in the middle of the screen.

This component has 2 named slots (defined in htmlLoaderBody.js)

- loader-body: place to capture the body
- loader-text: place for loading text. It uses parent slot.

`SHARED COMPONENTS need to be exported in index file, preferably before loaders.`

## Usage

This component is used in other custom loader components like ball-triangle.

```html
<dv4-loader-body>
  <!--pass loader body to loader container-->
  <div slot="loader-body" class="ball-triangle-path">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div slot="loader-text">
    <slot></slot>
  </div>
</dv4-loader-body>
```

### CSS classes, variables and defaults

Loader body uses CSS variables to assign following properties

- '--loader-body-font', default sans-serif
- '--loader-body-ft-size', default 1.5rem
- '--loader-body-ft-weight', default is 400
- '--loader-body-color', default is #333
- '--loader-body-z-index', default is 9
