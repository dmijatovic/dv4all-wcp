
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
  <path d="M0 0h16v16h-16zM24 4h40v8h-40zM0 24h16v16h-16zM24 28h40v8h-40zM0 48h16v16h-16zM24 52h40v8h-40z"></path>
  </svg>
`)