# Square jelly loader

This loader is lended from [Daniel Cardoso](https://github.danielcardoso.net/load-awesome/animations/square-jelly-box.html)

All credits for loader code go to Daniel :-).

## Usage

```html
<!-- FULL SCREEN WITH OVERLAY-->
<dv4-loader-square-jelly overlay="true">
  Loading message...
</dv4-loader-square-jelly>
<!-- BASIC SMALL -->
<dv4-loader-square-jelly>
  Loading message...
</dv4-loader-square-jelly>
```

```javascript
//improt loader
import Dv4SquareJelly from "@dv4all/loaders/lib/square-jelly";
//create new instance
const loader = new Dv4SquareJelly();
//add overlay
loader.setAttribute("overlay", true);
//get refference to body element
const body = document.querySelector("body");
//append loader to body
body.appendChild(loader);
```

### Attributes

- `hide`: show/hide flag for the loader. If hide attribute is not provided we show the loader.
- `overlay`: adds full screen backdrop that will block access to page elements. The backgrop position is absolute. If you want to limit it to section of the page you will need to set parent position to relative in CSS (position:relative;).

### CSS classes, variables and defaults

Ball triangle loader uses CSS variables to assign specific values. The loader consist of 3 modules (subcomponents)

#### CSS variables overlay/backdrop/scrim (overlay component)

- '--overlay-bg-color', default #fff
- '--overlay-bg-opacity', default 0.75
- '--overlay-z-index', default is 9

#### CSS variables loader body (loader-body component)

Loader body has 2 slots for passing loader elements and loading text. For more info see loader-body component README.md

CSS variables are applied using var(--variable-name, [default value])

- '--loader-body-font', default sans-serif
- '--loader-body-ft-size', default 1.5rem
- '--loader-body-ft-weight', default is 400
- '--loader-body-color', default is #333
- '--loader-body-z-index', default is 9

#### CSS variables specific to ball triangle

- '--square-jelly-color', default #333
- '--sqaure-jelly-size', default 3rem
- '--square-jelly-margin', default 1rem auto
