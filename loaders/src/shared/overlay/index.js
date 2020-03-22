//SHARED lib
import {newCustomElement, defineCustomElement} from '@dv4all/wcp-utils'


//html template
import htmlOverlay from './htmlOverlay'

//create open shadow DOM
const props={
  shadowMode: 'open',
  renderHtml: htmlOverlay,
  //pass attributes to observe
  observedAttr: []
}

const Dv4Overlay = newCustomElement(props)

defineCustomElement('dv4-overlay', Dv4Overlay)

export default Dv4Overlay