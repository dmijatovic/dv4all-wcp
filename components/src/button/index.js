import {newCustomElement} from '@dv4all/wcp-utils/lib/dv4wcp.utils.esm'
//html template
import htmlButton from './htmlButton'

//props
const props={
  observedAttr:['role'],
  shadowMode:'open',
  renderHtml:htmlButton
}

//create new custom element
const Dv4Button = newCustomElement(props)

//register custom element
customElements.define('dv4-button',Dv4Button)