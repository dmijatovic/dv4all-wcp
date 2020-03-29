
export default ({title='Next'})=>(`
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
  <path d="M32 6c-6.945 0-13.474 2.704-18.385 7.615s-7.615 11.44-7.615 18.385c0 6.945 2.704 13.474 7.615 18.385s11.44 7.615 18.385 7.615c6.945 0 13.474-2.705 18.385-7.615s7.615-11.44 7.615-18.385c0-6.945-2.705-13.474-7.615-18.385s-11.44-7.615-18.385-7.615zM32 0v0c17.673 0 32 14.327 32 32s-14.327 32-32 32c-17.673 0-32-14.327-32-32s14.327-32 32-32zM28 44h8v8h-8zM28 12h8v24h-8z"></path>
  </svg>
`)