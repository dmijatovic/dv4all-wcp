# Overlay

This is wrapper behind the loader or dialog.
The implementation ideas are 'stolen' from [google material design pages](https://material.io/components/dialogs/#anatomy).

`SHARED COMPONENTS need to be exported in index file, preferably before loaders.`

## Usage

This component is used in combination with desired loader when fullscreen loader is desired. Custom element is refred by its markup. It DOES NOT have to be imported in the component, INSTEAD is needs to be exported from this module. During my tests import did not worked and export seem to work. This can be verifyed by inspecting module output at lib/dv4loaders.js

### CSS classes, variables and defaults

Overlay (aka Backdrop, Scrim) is very simple component that ocupies full screen. There are 3 CSS variables used

#### CSS variables backdrop/background/scrim (overlay component)

- '--overlay-bg-color', default #fff
- '--overlay-bg-opacity', default 0.75
- '--overlay-z-index', default is 9
