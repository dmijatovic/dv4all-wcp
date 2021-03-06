
export default ({title='Image'})=>(`
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
  <path d="M59.993 8c0.002 0.002 0.005 0.005 0.007 0.007v47.986c-0.002 0.002-0.005 0.005-0.007 0.007h-55.986c-0.003-0.002-0.005-0.005-0.007-0.007v-47.986c0.002-0.002 0.005-0.005 0.007-0.007h55.986zM60 4h-56c-2.2 0-4 1.8-4 4v48c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4v-48c0-2.2-1.8-4-4-4v0z"></path>
  <path d="M52 18c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"></path>
  <path d="M56 52h-48v-8l14-24 16 20h4l14-12z"></path>
  </svg>
`)