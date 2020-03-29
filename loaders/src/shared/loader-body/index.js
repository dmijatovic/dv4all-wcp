//SHARED lib
import {newCustomElement, defineCustomElement} from '@dv4all/wcp-utils'

//html template
import htmlLoaderBody from './htmlLoaderBody'

//create open shadow DOM
const props={
  shadowMode: 'open',
  renderHtml: htmlLoaderBody,
  observedAttr: []
}

const Dv4LoaderBody = newCustomElement(props)

defineCustomElement('dv4-loader-body', Dv4LoaderBody)

export default Dv4LoaderBody