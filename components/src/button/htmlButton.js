
const htmlButton = props =>(`
  <style>
    :host{
      display: inline-flex;
      align-items: flex-start;
      justify-content: space-between;
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
    button:focus{
      outline: none;
      box-shadow: 0 0 1pt 1pt var(--btn-focus-color, lightblue);
    }
    button:hover,
    button[primary]:hover,
    button[danger]:hover{
      color: var(--color-accent, lightblue);
      fill:  var(--color-accent, lightblue);
    }
    button:hover > ::slotted(*),
    button[danger]:hover > ::slotted(*),
    button[primary]:hover > ::slotted(*){
      color: var(--color-accent, lightblue);
      fill: var(--color-accent, lightblue);
    }
    button:active,
    button[primary]:active{
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
    ::slotted(*){
      height: var(--btn-icon-height, 1rem);
      width: var(--btn-icon-width, 1rem);
      margin: var(--btn-icon-margin, 0rem 0.5rem 0rem 0rem) !important;
    }
  </style>
  ${props['primary'] ? '<button primary>':
    props['danger'] ? '<button danger>': '<button>'}
    <slot>Default</slot>
  </button>
`)

export default htmlButton