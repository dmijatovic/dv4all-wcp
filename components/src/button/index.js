import {newCustomElement, defineCustomElement} from '@dv4all/wcp-utils'
//html template
import htmlButton from './htmlButton'

//props
const props={
  observedAttr:['primary','danger','disabled'],
  shadowMode: 'open',
  renderHtml:htmlButton
}

//create new custom element
const Dv4CustomButton = newCustomElement(props)

//register custom element
defineCustomElement('dv4-custom-button',Dv4CustomButton)
// customElements.define()

export default Dv4CustomButton