//SHARED lib
import {newCustomElement} from '@dv4all/wcp-utils'
//SHARED components
import '../shared/overlay/index.js'
import '../shared/loader-body/index.js'
//html template
import htmlDonut from './htmlDonut'

// default props / attributes
const props = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: htmlDonut
}

//create new customElement
const Dv4LoaderDonut = newCustomElement(props)

//register custom element
customElements.define('dv4-loader-donut', Dv4LoaderDonut)
//need to export class to work with rollup
//additional benefit: class can be registered under custom name
//by user consuming the module. It will register same element twice
//which is not ideal (but only way at this point)
export default Dv4LoaderDonut