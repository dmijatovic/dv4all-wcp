# Modal web component

This web components extends generic HTMLElement. It has shadowRoot. In the shadowRoot default input element is styled. For this web component custom class was created to propagate value to the input element wrapped. in addition

[Custom elements cannot be self-closing because HTML only allows a few elements to be self-closing. Always write a closing tag (\<app-drawer>\</app-drawer>)](https://developers.google.com/web/fundamentals/web-components/customelements).

## Usage

Currently there are 2 types of modals:

- info modal: info modal supports image and text info. There is no support for actions (buttons). All info is passed to modal using element attributes.
- action modal: action modal supports buttons. This element uses slots for passing the information.

### Info modal

```html
<!-- INFO MODAL -->
<dv4-info-modal
  title="This is modal title"
  subtitle="This is modal subtitle"
  content="This is content"
></dv4-info-modal>
```

```javascript
//Select modal element
const dv4modal = document.querySelector("dv4-info-modal");
//Show modal
dv4modal.setAttribute("active", "true");
//Hide modal
dv4modal.removeAttribute("active");
```

#### Attributes

- active: true/false flag to show/hide modal
- title: modal title
- subtitle: modal subtitle
- content: modal body content
- img [OPTIONAL]: modal image placed on left side

#### Events

- onClose: modal will emit custom event `onClose` where you can listen to. To hide modal remove `active` attribute from custom element.

```javascript
//Select modal element
const dv4modal = document.querySelector("dv4-info-modal");
//Show modal
dv4modal.setAttribute("active", "true");
//listen to close event to close info modal
dv4modal.addEventListener("onClose", ({ target }) => {
  // console.log("Close modal");
  dv4modal.removeAttribute("active");
});
```

### Action modal

This modal supports passing (action) buttons. All information is passed using named slots.

```html
<!--ACTION MODAL -->
<dv4-action-modal>
  <!--MODAL TITLE SLOT -->
  <span slot="title">Action modal with a longer title</span>
  <!--MODAL SUBTITLE SLOT -->
  <span slot="subtitle">Use YES button to close modal</span>
  <!--CONTENT SLOT -->
  <div slot="content">
    <p>This is content of the action modal. Here we explain something.</p>
    <p>
      To close this modal click on YES button. Note that other 2 buttons don't
      do much in this example.
    </p>
  </div>
  <!--NAVIGATION SLOT -->
  <div slot="nav" class="action-modal-nav">
    <dv4-custom-button primary>
      <dv4-icon-checkmark></dv4-icon-checkmark>
      <div class="btn-lbl">Yes</div>
    </dv4-custom-button>
    <dv4-custom-button>
      <dv4-icon-cogs></dv4-icon-cogs>
      <div class="btn-lbl">Maybe</div>
    </dv4-custom-button>
    <dv4-custom-button danger>
      <dv4-icon-cancel-circle></dv4-icon-cancel-circle>
      <div class="btn-lbl">No way!</div>
    </dv4-custom-button>
  </div>
</dv4-action-modal>
```

#### Attributes action modal

- active: true/false flag to show/hide modal

```javascript
//Select modal element
const dv4modal = document.querySelector("dv4-action-modal");
//Show modal
dv4modal.setAttribute("active", "true");
//Hide modal
dv4modal.removeAttribute("active");
```

### CSS variables

Both modal types use similair variables. Action modal does not support image on the left side.

Each variable has default value which is used if CSS variable is not provided. The following css variables can be applied to custom button component. The listing is in the format: variable, default value

- modal-font-weight, 300
- modal-line-height, 1.5,
- modal-bg-color, rgba(0,0,0,0.5) - use rgba to have transparency
- modal-window-bg-color, #eee
- modal-window-box-shadow, 0 1rem 4rem rgba(0,0,0,.2)
- modal-img-width, 33.33333%
- modal-content-padding, 1.5rem
- modal-title-font-size, 2rem,
- modal-title-color,#333
- modal-subtitle-margin, 0.75rem 0rem
- modal-subtitle-opacity, 0.8
- modal-content-font-size, 1.125rem
- modal-content-column-cnt, 2
- modal-content-column-gap, 2rem
- modal-content-text-align, justify
- modal-content-word-break, break-all

These are the styles applied in shadowDOM. You can look at the code for the most accurate version of styles :-).

```css
<style>
:host {
  display: block;
  font-weight: var(--modal-font-weight, 300);
  line-height: var(--modal-line-height, 1.5);
  box-sizing: border-box;
}
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.dv4-modal{
  position: fixed;
  /*cannot animate with display:none*/
  display: flex;
  align-items: center;
  justify-content: center;
  top:0;left:0;
  height: 100vh;
  width: 100%;
  background-color: var(--modal-bg-color, rgba(0,0,0,0.5));
  /* start invisible */
  opacity:0;
  visibility: hidden;
  z-index: -1;
  /* animate */
  transition: all 0.3s;
  -webkit-backdrop-filter: blur(10px);
}

.dv4-modal.active{
  /* display:flex; */
  visibility: visible;
  opacity:1;
  z-index: var(--modal-z-index, 99);
}

.dv4-modal-window{
  /* we use display:table to create
    2 cell layout and center right cell in the middle
  */
  position: relative;
  display: table;
  width: 65%;
  min-height: 50vh;
  max-height: 70vh;
  border-radius: 3px;
  overflow: hidden;
  background-color: var(--modal-window-bg-color, #eee);
  box-shadow: var(--modal-window-box-shadow, 0 1rem 4rem rgba(0,0,0,.2));
  /* half size */
  transform: scale(0);
  transition: all 0.5s 0.2s;
}

.dv4-modal.active .dv4-modal-window{
  /* half size */
  transform: scale(1);
}

.dv4-modal-image{
  display: table-cell;
  vertical-align: middle;
  width: var(--modal-img-width, 33.33333%);
  background-size: cover;
}

.dv4-modal-content{
  display: table-cell;
  vertical-align: top;
  padding: var(--modal-content-padding, 1.5rem);
  overflow: auto;
  ${!img ? '' : 'width: calc(100% - var(--modal-img-width, 33.33333%));'}
}

.dv4-modal-title{
  font-size: var(--modal-title-font-size, 2rem);
  line-height: calc(var(--modal-title-font-size, 2rem) * 1.125);
  text-transform: uppercase;
  color: var(--modal-title-color,#333);
  /* margin to facilitate button */
  margin-right: 2.75rem;
}

.dv4-modal-subtitle{
  font-size: calc(var(--modal-title-font-size, 2rem) * 0.625);
  text-transform: uppercase;
  font-weight: var(--modal-font-weight, 300);
  color: var(--modal-title-color,#333);
  margin: var(--modal-subtitle-margin, 0.75rem 0.25rem);
  opacity: var(--modal-subtitle-opacity, 0.8);
}

.dv4-modal-body{
  font-size: var(--modal-content-font-size, 1.125rem);
  /* //new css3 column layout props
  //number of columns */
  column-count: var(--modal-content-column-cnt, 2);
  /* //gap between columns */
  column-gap: var(--modal-content-column-gap, 2rem);
  /* v-line between columns */
  /* column-rule: 1px solid lighten($grey-color, 30%);*/
  /*
    add auto hypens to break words
    add languge
  */
  hyphens: inherit;
  text-align: var(--modal-content-text-align, justify);
  word-break: var(--modal-content-word-break, break-all);
}

.dv4-modal-close-btn{
  position: absolute;
  top: 1.25rem;
  right: 1rem;
  font-size: 2rem;
  padding: 0rem 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

@media screen and (min-width: 1600px) {
  .dv4-modal-window{
    max-width: 50%;
  }
}

@media screen and (max-width: 800px) {
  .dv4-modal-body{
    column-count:1;
    overflow-y: auto;
    width: 100%;
  }
  .dv4-modal-image{
    display: none;
  }
  .dv4-modal-content{
    width: 100%;
  }
}

@media screen and (max-width: 420px) {
  :host{
    font-size: 50%;
  }
  .dv4-modal-window{
    display: flex;
    width: 100vw;
    max-height: 100vh;
    border-radius: 0px;
  }
  .dv4-modal-content{
    height:100vh;
  }
}
</style>
```
