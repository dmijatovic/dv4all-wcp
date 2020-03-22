export default `
/* BASIC STYLES FOR ALL LOADERS */
:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}

/* DONUT LOADER */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.donut-loader {
  border: var(--donut-border-width, 0.75rem) solid var(--donut-border-bg-color, #f3f3f3);
  border-radius: 50%;
  border-top: var(--donut-border-width, 0.75rem) solid var(--donut-border-color, #333);
  width: var(--donut-size, 4rem);
  height: var(--donut-size, 4rem);
  animation: spin var(--donut-rotation-speed-sec, 1.5s) linear infinite;
}

.donut-text{
  text-align: center;
}
`