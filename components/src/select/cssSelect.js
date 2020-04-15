export default `
:host{
  position:relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 4rem;
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
	box-sizing: border-box;
  border: none;
  border-bottom: 1px solid var(--select-sub-color, #ccc);
	-moz-appearance: none;
	-webkit-appearance: none;
  appearance: none;
  background-color: #fff;
}

select:focus,
select.touched{
  color: var(--select-main-color, #333);
}

select.touched,
select:focus ~ svg{
  transform: rotate(0deg);
  top: 1.5rem;
}

/* ICON */
svg{
  position: absolute;
  transform: rotate(180deg);
  width: 1.5rem;
  height: 1.5rem;
  right: 0.25rem;
  top: 0.825rem;
  fill: var(--select-main-color, #333);
  pointer-events: none;
}

/* MESSAGE */
.msg{
  padding: 0rem 0.25rem;
  font-size: calc(var(--select-label-size, 1rem) * 0.75);
}
`