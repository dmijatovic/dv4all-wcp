import {newCustomWithEvents, defineCustomElement} from '@dv4all/wcp-utils'

//html template
import htmlSelect from './htmlSelect'

//props
const props={
  observedAttr:['name','title','options','missing-option',
    'value','message','disabled'],
  observedEvents:[{
    querySelector:'select',
    native:'onchange',
    custom:'onChange',
    classes:'changed'
  }],
  shadowMode: 'open',
  renderHtml: htmlSelect
}

//create new custom element
const Dv4Select = newCustomWithEvents(props)

//register custom element
defineCustomElement('dv4-select',Dv4Select)
// customElements.define()

export default Dv4Select