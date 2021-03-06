
export default ({title='Cross'})=>(`
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
  <path d="M24 32h-20v-8h20v-8l12 12-12 12zM64 0v52l-24 12v-12h-24v-16h4v12h20v-36l16-8h-36v16h-4v-20z"></path>
  </svg>
`)