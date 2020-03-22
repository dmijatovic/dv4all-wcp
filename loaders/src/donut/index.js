//SHARED lib
import {newCustomElement, defineCustomElement} from '@dv4all/wcp-utils'

//html template
import htmlDonut from './htmlDonut'

// default props / attributes
const props = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: htmlDonut,
  //pass attributes to observe
  observedAttr: ['overlay','hide']
}

//create new customElement
const Dv4LoaderDonut = newCustomElement(props)

//register custom element
defineCustomElement('dv4-loader-donut', Dv4LoaderDonut)
//need to export class to work with rollup
//additional benefit: class can be registered under custom name
//by user consuming the module. It will register same element twice
//which is not ideal (but only way at this point)
export default Dv4LoaderDonut