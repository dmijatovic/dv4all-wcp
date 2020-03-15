import newCustomModal from './newCustomModal'
//html template
import html from './htmlInfoModal'

//props
const props={
  //these attributes are passed to htmlInput template
  observedAttr:['active', 'title', 'subtitle','content','img'],
  shadowMode: 'open',
  renderHtml: html
}

//create new custom element
const Dv4InfoModal = newCustomModal(props)

//register custom element
customElements.define('dv4-info-modal',Dv4InfoModal)

//export so it can be misused?
export default Dv4InfoModal