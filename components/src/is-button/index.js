import {newButtonElement} from '@dv4all/wcp-utils'
//html template
import htmlButton from './htmlIsButton'

//props
const props={
  observedAttr:['role'],
  renderHtml:htmlButton
}

//create new custom element
const Dv4IsButton = newButtonElement(props)

//this extends button element
customElements.define('is-dv4-button',Dv4IsButton,{extends: 'button'})

export default Dv4IsButton