//SHARED lib
import {newCustomElement} from '@dv4all/wcp-utils'

//html template
import htmlLoaderBody from './htmlLoaderBody'

//create open shadow DOM
const props={
  shadowMode: 'open',
  renderHtml: htmlLoaderBody,
  observedAttr: []
}

const Dv4LoaderBody = newCustomElement(props)

customElements.define('dv4-loader-body', Dv4LoaderBody)

export default Dv4LoaderBody