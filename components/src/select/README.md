# Custom select web component

This web components extends generic HTMLElement. It has shadowRoot. In the shadowRoot default button element is styled. There is no slot support, all data is passed using attributes.

Note! The list of options is comma separated string, eg "Option 1, Option 2 ...". Missing option is ONE value used as starting selected value. This value returns -1 value in onChange event.

## Usage

```html
<!-- MINIMUM SETUP -->
<dv4-select options="Option 1, Option 2, Option 3"> </dv4-select>

<!--WITH custom label and No answer missing option -->
<dv4-select title="Select option" options="Option 1, Option 2, Option 3">
</dv4-select>

<!--WITH custom name, custom label and No answer missing option -->
<dv4-select
  name="select-options"
  title="Select option"
  options="Option 1, Option 2, Option 3"
  missing-option="No answer"
>
</dv4-select>
```

### Events

- onChange: component emits custom onChange event after each option change. Selected value can be received through `target.value` prop.

```Javascript
const dv4select = document.querySelector('dv4-select')

dv4select.addEventListener('onChange',function({target}){
  const value = target.value
})
```

### Attributes

- name: element name. It uses name value to assign #id to inner select element.
- title: label shown above select box. If ommitted no label is shown/loaded
- options: comma separated list of VALID options to select from
- missing-option: ONE option to be added at the start of the option list. This option will be selected by default. It returns value of -1.
- value: assign which value from the options is selected
- message: helper message to be shown below select box
- disabled: disables the select box and the custom element. Note! You need to ensure that onChange event handles invalid values properly.

### CSS variables

Each variable has default value which is used if CSS variable is not provided. The following css variables can be applied to custom button component. The listing is in the format: variable, default value

- select-min-width, 5rem
- select-margin, 1.25rem 0rem
- select-label-left, 0.25rem
- select-label-top, 0.25rem
- select-main-color, #333
- select-sub-color, #ccc
- select-bg-color, #fff
- select-padding, 2px 2rem 1px 0.25rem
- select-font-size, 1rem
- select-icon-top, 1.5rem
- select-icon-size,1.5rem
- select-icon-top, 0.825rem
- select-icon-right, 0.25rem
- message-padding, 0.25rem
- message-font-size, 0.75rem

These are the styles applied in shadowDOM. You can look at the htmlButton.js for the most accurate version of styles :-).

```css
<style>
:host{
  position:relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: var(--select-min-width, 5rem);
}
:host([disabled]){
  opacity: 0.7;
  cursor: not-allowed;
}
.dv4-select{
  display: block;
  width: 100%;
  margin: var(--select-margin, 1.25rem 0rem);
}
/* LABEL STYLES */
label{
  position: absolute;
  left: var(--select-label-left, 0.25rem);
  top: var(--select-label-top, 0.25rem);
  line-height: normal;
  font-size: calc(var(--select-label-size, 1rem) * 0.75);
  color: var(--select-main-color, #333);
  font-weight: normal;
  pointer-events: none;
}
/* SELECT BOX */
select{
  display: block;
  width: 100%;
  margin: 0;
  padding: var(--select-padding, 2px 2rem 1px 0.25rem);
  font-size: var(--select-font-size, 1rem);
  color: var(--select-sub-color, #ccc);
  border: none;
  border-bottom: 1px solid var(--select-sub-color, #ccc);
	-moz-appearance: none;
	-webkit-appearance: none;
  appearance: none;
  background-color: var(--select-bg-color, #fff);
}

select:focus,
select.touched{
  color: var(--select-main-color, #333);
}

select.touched,
select:focus ~ svg{
  transform: rotate(0deg);
  top: var(--select-icon-top, 1.5rem);
}

/* ICON */
svg{
  position: absolute;
  transform: rotate(180deg);
  width: var(--select-icon-size,1.5rem);
  height: var(--select-icon-size,1.5rem);
  top: var(--select-icon-top, 0.825rem);
  right: var(--select-icon-right,0.25rem);
  fill: var(--select-main-color, #333);
  pointer-events: none;
}

/* MESSAGE */
.dv4-message{
  padding: var(--message-padding, 0.25rem);
  font-size: calc(var(--message-font-size, 1rem) * 0.75);
  line-height: var(--message-font-size, 1rem);
}
</style>
```
