import newCustomModal from './newCustomModal'
//html template
import html from './htmlInfoModal'
import htmlAction from './htmlActionModal'

//props
const info={
  //these attributes are passed to htmlInput template
  observedAttr:['active', 'title', 'subtitle','content','img'],
  shadowMode: 'open',
  renderHtml: html
}

const action={
  //these attributes are passed to htmlInput template
  observedAttr:['active'],
  shadowMode: 'open',
  renderHtml: htmlAction
}

//create new custom element
const Dv4InfoModal = newCustomModal(info)
const Dv4ActionModal = newCustomModal(action)

//register custom element
customElements.define('dv4-info-modal',Dv4InfoModal)
customElements.define('dv4-action-modal',Dv4ActionModal)


export {
  Dv4InfoModal,
  Dv4ActionModal
}

//export so it can be misused?
export default Dv4InfoModal