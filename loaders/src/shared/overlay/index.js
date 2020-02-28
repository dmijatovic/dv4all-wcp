//SHARED lib
import {newCustomElement} from '@dv4all/wcp-utils/lib/dv4wcp.utils.esm'


//html template
import htmlOverlay from './htmlOverlay'

//create open shadow DOM
const props={
  shadowMode:'open',
  renderHtml: htmlOverlay
}

const Overlay = newCustomElement(props)

customElements.define('dv4-overlay', Overlay)