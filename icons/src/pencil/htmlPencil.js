
export default ({title='Pencil'})=>(`
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
  <path d="M54 0c5.523 0 10 4.477 10 10 0 2.251-0.744 4.329-2 6l-4 4-14-14 4-4c1.671-1.256 3.749-2 6-2zM4 46l-4 18 18-4 37-37-14-14-37 37zM44.724 22.724l-28 28-3.447-3.447 28-28 3.447 3.447z"></path>
  </svg>
`)