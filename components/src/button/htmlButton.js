import cssButton from './cssButton'

const htmlButton = props =>{
  const {primary, danger, disabled} = props
  let button='<button'

  if(primary) button+=' primary'
  if(danger) button+=' danger'
  if(disabled) button+=' disabled'

  button+='>'

  return (`
    <style>
      ${cssButton}
    </style>
    ${button}
      <slot>Default</slot>
    </button>
  `)
}

export default htmlButton