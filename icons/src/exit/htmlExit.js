
export default ({title='Exit'})=>(`
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
  <path d="M48 40v-8h-20v-8h20v-8l12 12zM44 36v16h-20v12l-24-12v-52h44v20h-4v-16h-32l16 8v36h16v-12z"></path>
  </svg>
`)