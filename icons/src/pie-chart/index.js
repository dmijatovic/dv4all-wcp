//SHARED lib
import {newCustomElement} from '@dv4all/wcp-utils'

//html template
import html from './htmlPieChart'

// default props / attributes
const props = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: html,
  //pass attributes to observe
  observedAttr: ['title']
}

//create new customElement
const Dv4IconPieChart = newCustomElement(props)

//register custom element
customElements.define('dv4-icon-pie-chart', Dv4IconPieChart)

//need to export class to work with rollup
//additional benefit: class can be registered under custom name
//by user consuming the module. It will register same element twice
//which is not ideal (but only way at this point)
export default Dv4IconPieChart