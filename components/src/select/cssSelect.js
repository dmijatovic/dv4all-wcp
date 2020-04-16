export default `
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

.dv4-missing-option{
  color: var(--select-sub-color, #ccc);
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
.msg{
  padding: var(--select-message-padding, 0rem 0.25rem);
  font-size: calc(var(--select-label-size, 1rem) * 0.75);
}
`