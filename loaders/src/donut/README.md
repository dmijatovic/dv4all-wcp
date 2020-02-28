# Rotating donut

The code for this loader is borrowed from [here](https://www.w3schools.com/howto/howto_css_loader.asp)

## Usage

```html
<dv4-loader-donut>
  Loading message...
</dv4-loader-donut>
```

### Attributes

- `hide`: show/hide flag for the loader. If hide attribute is not provided we show the loader.
- `backdrop`: adds full screen backdrop that will block access to page elements. The backgrop position is absolute. If you want to limit it to section of the page you will need to set parent position to relative in CSS (position:relative;).

### CSS classes, variables and defaults

Donut loader uses CSS variables to assign specific values. The loader consist of 3 modules (subcomponents)

#### CSS variables overlay/backdrop/scrim (overlay component)

- '--overlay-bg-color', default #fff
- '--overlay-bg-opacity', default 0.75
- '--overlay-z-index', default is 9

#### CSS variables loader body (loader-body component)

Loader body has 2 slots for passing loader elements and loading text. For more info see utils/loader-body component README.md

CSS variables are applied using var(--variable-name, [default value])

- '--loader-body-font', default sans-serif
- '--loader-body-ft-size', default 1.5rem
- '--loader-body-ft-weight', default is 400
- '--loader-body-color', default is #333
- '--loader-body-z-index', default is 9

#### CSS variables specific to donut loader

- '--donut-size', default 4rem
- '--donut-border-bg-color', default #f3f3f3
- '--donut-border-color', default #3498db
- '--donut-border-width', default 0.75rem
- '--donut-rotation-speed-sec', default 1.5s (seconds for one revolution)
