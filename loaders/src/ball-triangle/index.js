//SHARED lib
import {newCustomElement, defineCustomElement} from '@dv4all/wcp-utils'

//NOTE!
//SHARED customElements dv4-overlay and dv4-loader-body
//NEED to be exported in index.js

//html template
import htmlBallTriangle from './htmlBallTriangle'

// default props / attributes
const props = {
  //create open shadow DOM
  shadowMode:'open',
  //render function
  renderHtml: htmlBallTriangle,
  //pass attributes to observe
  observedAttr: ['overlay','hide']
}

//create new customElement
const Dv4LoaderBallTriangle = newCustomElement(props)

//register custom element
defineCustomElement('dv4-loader-ball-triangle', Dv4LoaderBallTriangle)

//need to export class to work with rollup
//additional benefit: class can be registered under custom name
//by user consuming the module. It will register same element twice
//which is not ideal (but only way at this point)
export default Dv4LoaderBallTriangle