export default `
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
`