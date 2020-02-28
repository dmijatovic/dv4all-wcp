//SHARED lib
import {newCustomElement} from '@dv4all/wcp-utils'


//html template
import htmlOverlay from './htmlOverlay'

//create open shadow DOM
const props={
  shadowMode:'open',
  renderHtml: htmlOverlay
}

const Dv4Overlay = newCustomElement(props)

customElements.define('dv4-overlay', Dv4Overlay)

export default Dv4Overlay