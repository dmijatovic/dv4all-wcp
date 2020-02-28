//SHARED lib
import {newCustomElement} from '@dv4all/wcp-utils/lib/dv4wcp.utils.esm'

//html template
import htmlLoaderBody from './htmlLoaderBody'

//create open shadow DOM
const props={
  shadowMode:'open',
  renderHtml: htmlLoaderBody
}

const LoaderBody = newCustomElement(props)

customElements.define('dv4-loader-body', LoaderBody)