
export default ({title='Home'})=>(`
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
  <path d="M64 36.903l-32-24.839-32 24.839v-10.127l32-24.839 32 24.839zM56 36v24h-16v-16h-16v16h-16v-24l24-18z"></path>
  </svg>
`)