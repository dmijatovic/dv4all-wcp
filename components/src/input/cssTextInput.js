import dv4MessageClass from '../utils/cssDv4Message'

const shrinkCss=`
  top: calc(var(--input-label-size, 1rem) * -1.5);
  left: 0rem;
  font-size: calc(var(--input-label-size, 1rem) * 0.75);
  color: var(--input-main-color, #333);
`

export default`
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

/* MESSAGE using .dv4-message class*/
${dv4MessageClass}
`