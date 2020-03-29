# Custom button web component

This web components extends generic HTMLElement. It has shadowRoot. In the shadowRoot default button element is styled. There is one generic slot. The slot supports adding custom icon elements from @dv4all/icons.

## Usage

```html
<!-- WITHOUT custom icons -->
<dv4-custom-button>Label</dv4-custom-button>
<dv4-custom-button primary>Primary Button</dv4-custom-button>
<dv4-custom-button danger>Danger Button</dv4-custom-button>
<dv4-custom-button disabled>Disabled Button</dv4-custom-button>

<!--WITH custom dv4all icons -->
<dv4-custom-button>
  <dv4-icon-camera></dv4-icon-camera>
  Icon Default Button
</dv4-custom-button>
<dv4-custom-button primary>
  <dv4-icon-checkmark></dv4-icon-checkmark>
  Icon Primary Button
</dv4-custom-button>
<dv4-custom-button danger>
  <dv4-icon-cancel-circle></dv4-icon-cancel-circle>
  Icon Danger Button
</dv4-custom-button>
```

### Attributes

- primary: primary attribute, will use primary color for the button background
- danger: danger attribute, will use warning color for the button background
- disabled: `visualy indicates that button is disabled`. Programmer needs to handle events ingnore on its own. This just visually indicates to user that click won't work.

See next section about CSS variables for more information about available variables.

### CSS variables

Each variable has default value which is used if CSS variable is not provided. The following css variables can be applied to custom button component. The listing is in the format: variable, default value

- btn-font-size, 1rem
- btn-border, 1px solid lightgrey
- btn-border-radius, 0.25rem
- btn-padding, 0.5rem 1rem
- btn-min-width, 3rem
- btn-cursor, pointer
- btn-focus-color, lightblue
- btn-icon-height, 1rem
- btn-icon-width, 1rem
- btn-icon-margin, 0rem 0.5rem 0rem 0rem

These are the styles applied in shadowDOM. You can look at the htmlButton.js for the most accurate version of styles :-).

```css
<style>
:host{
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-between;
}
:host([disabled]){
  opacity: 0.7;
  cursor: not-allowed;
}
button{
  flex:1;
  display: inline-flex;
  align-items: end;
  justify-content: space-between;
  font-family: inherit;
  font-size: var(--btn-font-size, 1rem);
  border: var(--btn-border, 1px solid lightgrey);
  border-radius: var(--btn-border-radius, 0.25rem);
  padding: var(--btn-padding, 0.5rem 1rem);
  min-width: var(--btn-min-width, 3rem);
  min-height: var(--btn-min-height, 1rem);
  cursor: var(--btn-cursor, pointer);
  background-color: transparent;
}
button:focus:not([disabled]){
  outline: none;
  box-shadow: 0 0 1pt 1pt var(--btn-focus-color, lightblue);
}
button:hover:not([disabled]),
button[primary]:hover:not([disabled]),
button[danger]:hover:not([disabled]){
  color: var(--color-accent, lightblue);
  fill:  var(--color-accent, lightblue);
}
button:hover:not([disabled]) > ::slotted(*),
button[danger]:hover:not([disabled]) > ::slotted(*),
button[primary]:hover:not([disabled]) > ::slotted(*){
  color: var(--color-accent, lightblue);
  fill: var(--color-accent, lightblue);
}
button:active:not([disabled]),
button[primary]:active:not([disabled]){
  transform: translate(1px,1px);
}
button[primary],
button[primary] > ::slotted(*){
  background-color: var(--color-primary, darkblue);
  color: var(--color-primary-contrast, #fff);
  fill: var(--color-primary-contrast, #fff);
}
button[danger],
button[danger] > ::slotted(*){
  background-color: var(--color-warning, darkred);
  color: var(--color-warning-contrast, #fff);
  fill: var(--color-warning-contrast, #fff);
}
button[disabled]{
  opacity: 0.7;
  cursor: not-allowed;
}
::slotted(*){
  height: var(--btn-icon-height, 1rem);
  width: var(--btn-icon-width, 1rem);
  margin: var(--btn-icon-margin, 0rem 0.5rem 0rem 0rem) !important;
}
</style>
```
