import newCustomInput from './newCustomInput'
//html template
import htmlInput from './htmlTextInput'

//props
const props={
  //these attributes are passed to htmlInput template
  observedAttr:['name', 'label', 'value', 'message'],
  shadowMode: 'open',
  renderHtml: htmlInput
}

//create new custom element
const Dv4TextInput = newCustomInput(props)

//register custom element
customElements.define('dv4-text-input',Dv4TextInput)

//export so it can be misused?
export default Dv4TextInput