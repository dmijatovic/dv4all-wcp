# Custom text input web component

This web components extends generic HTMLElement. It has shadowRoot. In the shadowRoot default input element is styled. For this web component custom class was created to propagate value to the input element wrapped. in addition

[Custom elements cannot be self-closing because HTML only allows a few elements to be self-closing. Always write a closing tag (\<app-drawer>\</app-drawer>)](https://developers.google.com/web/fundamentals/web-components/customelements).

## Usage

```html
<!-- CUSTOM TEXT INPUT ELEMENT -->
<dv4-text-input
  name="var-name"
  label="Your name"
  message="Type your first and last name"
>
</dv4-text-input>
```

### Attributes

- name: variable name
- label: input label
- message: the message shown onder the input
- value: optional, default value

See next section about CSS variables for more information about available variables.

### Events

- onChange: the elemnt will emit custom event `onChange` where you can listen to value changes in the input element.

```javascript
//get element
const dv4input = document.querySelector("dv4-text-input");

//listen to onChange event
dv4input.addEventListener("onChange", function({ target }) {
  console.log("dv4-material-input.onChange...value...", target.value);
});
```

### CSS variables

Each variable has default value which is used if CSS variable is not provided. The following css variables can be applied to custom button component. The listing is in the format: variable, default value

- input-margin, 1.25rem 0rem
- input-bg-color, #fff
- input-sub-color, #ccc
- input-font-size, 1rem
- input-text-color, #333
- input-label-left, 0.25rem
- input-label-top, -0.25rem
- input-label-size, 1rem
- message-padding, 0.25rem
- message-font-size, 0.75rem

These are the styles applied in shadowDOM. You can look at the cssTextInput.js for the most accurate version of styles :-).

```css
<style>
  :host{
    display: inline-flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .dv4-input{
    flex:1;
    position:relative;
    margin: var(--input-margin, 1.25rem 0rem);
  }
  /* INPUT STYLES */
  input{
    display: block;
    background: none;
    background-color: var(--input-bg-color, #fff);
    color: var(--input-text-color, #333);
    font-size: var(--input-font-size, 1rem);
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--input-sub-color, #ccc);
  }

  input:focus {
    outline: none;
  }
  /*
  label needs to BE AFTER
  input for this to work
  */
  input:focus ~ label {
    ${shrinkCss}
  }

  input.changed ~ label{
    ${shrinkCss}
  }

  /* LABEL STYLES */
  label{
    position: absolute;
    left: var(--input-label-left, 0.25rem);
    top: var(--input-label-top, -0.25rem);
    color: var(--input-sub-color, #ccc);
    font-size: var(--input-label-size, 1rem);
    font-weight: normal;
    pointer-events: none;
    transition: 300ms ease all;
  }

  label.shrink {
    ${shrinkCss}
  }

  /* MESSAGE */
  .dv4-message{
    padding: var(--message-padding, 0.25rem);
    font-size: calc(var(--message-font-size, 1rem) * 0.75);
    line-height: var(--message-font-size, 1rem);
  }
</style>
```
