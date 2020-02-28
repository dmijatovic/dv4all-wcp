# Gooey loader

This loader is 'stolen' from [this example](https://codepen.io/megatroncoder/pen/Xqeyva).

All credits for loader code go to Decatron.

## Usage

```html
<dv4-loader-gooey hide="false" backdrop>
  Loading message...
</dv4-loader-gooey>
```

### Attributes

- `hide`: show/hide flag for the loader. If hide attribute is not provided we show the loader.
- `backdrop`: adds full screen backdrop that will block access to page elements. The backgrop position is absolute. If you want to limit it to section of the page you will need to set parent position to relative in CSS (position:relative;).

### CSS classes, variables and defaults

Two circles use classes `.dv4-gooey-circle-1` and `.dv4-gooey-circle-2`.

Loader uses css variables to assign these properties:

#### CSS variable background (scrim component)

- '--scrim-bg-color', default #fff
- '--scrim-bg-opacity', default 0.75
- '--scrim-z-index', default is 9

#### CSS variables circles

CSS variables are applied using var(--variable-name, [default value])

- '--gooey-circle-distance', default 30rem, this is the area for animation
- '--gooey-circle-size', default value 4rem
- '--gooey-color-left', default value #fff is applied to circle 1 (left)
- '--gooey-color-right', default value #0074D9

#### CSS variables message

- '--gooey-message-font', default 'sans-serif'
- '--gooey-message-ft-size, default 1.5rem
- '--gooey-message-ft-weight, default 400
- '--gooey-message-color, default #333
