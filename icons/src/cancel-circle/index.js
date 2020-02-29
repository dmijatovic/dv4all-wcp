//SHARED lib
import {newCustomElement} from '@dv4all/wcp-utils'

//NOTE!
//SHARED customElements dv4-overlay and dv4-loader-body
//NEED to be exported in index.js

//html template
import htmlCancelCirlce from './htmlCancelCircle'

// default props / attributes
const props = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: htmlCancelCirlce,
  //pass attributes to observe
  observedAttr: ['title']
}

//create new customElement
const Dv4IconCancelCircle = newCustomElement(props)

//register custom element
customElements.define('dv4-icon-cancel-circle', Dv4IconCancelCircle)

//need to export class to work with rollup
//additional benefit: class can be registered under custom name
//by user consuming the module. It will register same element twice
//which is not ideal (but only way at this point)
export default Dv4IconCancelCircle