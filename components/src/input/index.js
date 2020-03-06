import newCustomElement from './newCustomInput'
//html template
import htmlInput from './htmlInput'

//props
const props={
  //these attributes are passed to htmlInput template
  observedAttr:['type','name', 'label', 'value', 'message'],
  shadowMode: 'open',
  renderHtml: htmlInput
}

//create new custom element
const Dv4MaterialInput = newCustomElement(props)

//register custom element
customElements.define('dv4-material-input',Dv4MaterialInput)

//export so it can be misused?
export default Dv4MaterialInput