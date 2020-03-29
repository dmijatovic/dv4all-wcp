
export default ({title='Map'})=>(`
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
  <path d="M0 12l20-8v48l-20 8z"></path>
  <path d="M24 2l20 12v46l-20-10z"></path>
  <path d="M48 14l16-12v48l-16 12z"></path>
  </svg>
`)