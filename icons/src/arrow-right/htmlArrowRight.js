
export default ({title='Arrow'})=>(`
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
  <path d="M62 32l-30-30v18h-32v24h32v18z"></path>
  </svg>
`)