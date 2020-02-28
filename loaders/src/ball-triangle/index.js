//SHARED lib
import {newCustomElement} from '@dv4all/wcp-utils/lib/dv4wcp.utils.esm'

//SHARED components
import '../shared/overlay/index.js'
import '../shared/loader-body/index.js'
//html template
import htmlBallTriangle from './htmlBallTriangle'

// default props / attributes
const props = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: htmlBallTriangle
}

//create new customElement
const BallTriangle = newCustomElement(props)
//register custom element
customElements.define('dv4-loader-ball-triangle', BallTriangle)