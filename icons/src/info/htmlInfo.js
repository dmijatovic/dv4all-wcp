
export default ({title='Info'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M28 19c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v2c0 1.65-1.35 3-3 3h-2c-1.65 0-3-1.35-3-3v-2z"></path>
  <path d="M40 48h-16v-4h4v-12h-4v-4h12v16h4z"></path>
  <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26z"></path>
  </svg>
`)