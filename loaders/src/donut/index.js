//SHARED lib
import {newCustomElement} from '@dv4all/wcp-utils/lib/dv4wcp.utils.esm'
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
const DonutLoader = newCustomElement(props)
//register custom element
customElements.define('dv4-loader-donut', DonutLoader)