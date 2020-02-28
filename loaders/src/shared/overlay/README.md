# Overlay

This is wrapper behind the loader or dialog.
The implementation ideas are 'stolen' from [google material design pages](https://material.io/components/dialogs/#anatomy)

## Usage

This component is used in combination with desired loader when fullscreen loader is desired.

### CSS classes, variables and defaults

Overlay (aka Backdrop, Scrim) is very simple component that ocupies full screen. There are 3 CSS variables used

#### CSS variables backdrop/background/scrim (scrim component)

- '--overlay-bg-color', default #fff
- '--overlay-bg-opacity', default 0.75
- '--overlay-z-index', default is 9
