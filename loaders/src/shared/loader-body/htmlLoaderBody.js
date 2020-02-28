
const htmlLoaderBody = (`
  <style>
    :host{
      display: block;
      position: absolute;
      top:50%;left:50%;
      transform:translate(-50%,-50%);
      font-family: var(--loader-body-font, sans-serif);
      font-size: var(--loader-body-ft-size, 1.5rem);
      font-weight: var(--loader-body-ft-weight, 400);
      color: var(--loader-body-color, #333);
      z-index: var(--loader-body-z-index, 9);
    }
  </style>
  <slot name="loader-body">Default body</slot>
  <slot name="loader-text">Default text</slot>
`)

export default htmlLoaderBody