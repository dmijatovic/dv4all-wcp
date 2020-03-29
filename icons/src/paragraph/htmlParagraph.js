
export default ({title='Paragraph', type='left'})=>{
  //default is paragraph center
  let svgPath = ''

  switch(type){
  case 'center':
    //do nothing
    svgPath = '<path d="M0 4h64v8h-64zM12 16h40v8h-40zM12 40h40v8h-40zM0 28h64v8h-64zM0 52h64v8h-64z"></path>'
    break
  case 'justify':
    svgPath='<path d="M0 4h64v8h-64zM0 16h64v8h-64zM0 28h64v8h-64zM0 40h64v8h-64zM0 52h64v8h-64z"></path>'
    break
  case 'right':
    svgPath='<path d="M0 4h64v8h-64zM24 16h40v8h-40zM24 40h40v8h-40zM0 28h64v8h-64zM0 52h64v8h-64z"></path>'
    break
  case 'left':
  default:
    svgPath='<path d="M0 4h64v8h-64zM0 16h40v8h-40zM0 40h40v8h-40zM0 28h64v8h-64zM0 52h64v8h-64z"></path>'
  }
  return(`
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
  ${svgPath}
  </svg>
`)}