
/**
 * HTML template of custom scrim element.
 * It has one slot that expects content
 */
const htmlOverlay=`
  <style>
    :host{
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      display:flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--overlay-bg-color, #fff);
      opacity: var(--overlay-bg-opacity, 0.75);
      z-index: var(--overlay-z-index, 9);
    }
  </style>
`

export default htmlOverlay