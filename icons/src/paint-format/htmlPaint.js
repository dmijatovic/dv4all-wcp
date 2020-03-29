
export default ({title='Format'})=>(`
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
  <path d="M64 36v-24h-12v-4c0-2.2-1.8-4-4-4h-44c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4h44c2.2 0 4-1.8 4-4v-4h8v16h-36v8h-2c-1.105 0-2 0.895-2 2v20c0 1.105 0.895 2 2 2h8c1.105 0 2-0.895 2-2v-20c0-1.105-0.895-2-2-2h-2v-4h36zM48 12h-44v-4h44v4z"></path>
  </svg>
`)