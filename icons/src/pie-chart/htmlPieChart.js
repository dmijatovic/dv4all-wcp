
export default ({title='Pie chart'})=>(`
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
  <path d="M28 36v-28c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28c0-4.502-1.064-8.755-2.952-12.524l-25.048 12.524zM57.048 15.476c-4.597-9.176-14.086-15.476-25.048-15.476v28l25.048-12.524z"></path>
  </svg>
`)