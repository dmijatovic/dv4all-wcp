
export default ({title='Embed'})=>(`
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
    width="80"
    height="64"
    viewBox="0 0 80 64">
  <title>${title}</title>
  <path d="M52 46l6 6 20-20-20-20-6 6 14 14z"></path>
  <path d="M28 18l-6-6-20 20 20 20 6-6-14-14z"></path>
  <path d="M43.831 9.407l4.342 1.184-11.999 44.002-4.342-1.184 11.999-44.002z"></path>
  </svg>
`)