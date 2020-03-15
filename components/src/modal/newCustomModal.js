import {attachTemplate} from '@dv4all/wcp-utils'
import {consoleLog} from '@dv4all/log-utils'

export default ({shadowMode, renderHtml, observedAttr=[]})=>{
  // props used to construct
  // return new custom HTML element
  return class CustomModalElement extends HTMLElement{
    constructor(){
      super()
      if (!renderHtml) throw new Error ('CustomModalElement...renderHtml method not provided!')
      //attach shadowDOM
      if (shadowMode) this.attachShadow({mode:shadowMode})
    }
    /**
     * Lifecycle event when component is mounted to DOM
     */
    connectedCallback(){
      consoleLog(`${this.localName}...mounted to DOM!`, ENV)
      // console.log(`${this.localName}...mounted to DOM!`)
      //init with props (attribute values
      this.render()
    }
    /**
     * Extract all attributes placed on the
     * element as props. It also includes
     * props defined in the constructor of the element
     */
    getPropsFromAttributes(){
      const props={}
      for (let att of this.attributes){
        // console.log('att...', att)
        if (att.value){
          props[att.name] = att.value
        } else {
          props[att.name] = 'true'
        }
      }
      //add value to props list
      return props
    }
    // /**
    //  * Set value based on attribute input
    //  * and user input
    //  * @param {Array} props
    //  */
    // setValueProp(props){
    //   //add value to props list
    //   if (props['value'] && this.value===''){
    //     return props
    //   } else if(this.value) {
    //     props['value'] = this.value
    //   } else {
    //     props['value'] =  ''
    //   }
    //   return props
    // }
    /**
     * Create shadow DOM (based on defs) and
     * append html markup based on provided element
     * attributes
     * @param {Object} props
     */
    render(){
      consoleLog(`${this.localName}...render element`, ENV)
      //get attributes from the element
      let htmlTemplate=''
      if (typeof renderHtml === 'function'){
        const props = this.getPropsFromAttributes()
        //generate html template
        htmlTemplate = renderHtml(props)
      }else{
        htmlTemplate = renderHtml
      }
      //attach html template to element
      attachTemplate(this, htmlTemplate )
      //attach event listeners
      this.attachListeners()
    }
    attachListeners(){
      this.handleOnClose()
    }
    handleOnClose(){
      //select input
      const close = this.shadowRoot.querySelector('.dv4-modal-close-btn')
      this.modal = this.shadowRoot.querySelector('section')
      //listen for onchange
      close['onclick'] = ({target})=>{
        consoleLog('Close button clicked...', ENV)
        //publish event outside this customElement
        const newEvent = new Event('onClose',{bubbles:true, composed:true})
        target.dispatchEvent(newEvent)
      }
    }
    handleActiveAttr(value){
      if(this.modal){
        if (value){
          this.modal.classList.add('active')
        } else {
          this.modal.classList.remove('active')
        }
      }
    }
    /**
     * Listen for changes in these attributes
     */
    static get observedAttributes(){
      // console.log("observedAttributes...", observedAttr)
      return observedAttr
    }
    /**
     * Lifecycle event when attribute is changed
     */
    attributeChangedCallback(name, oldVal, newVal){
      consoleLog(`${this.localName}...attribut changed...${name}=${newVal}`, ENV)
      if (name==='active'){
        this.handleActiveAttr(newVal)
      }else {
        // call render on attribute changes
        this.defferRender()
      }
    }
    /**
     * Call render function after all attrs initialized.
     * we do this by setting call at the end of the callstack
     */
    defferRender(){
      //clear previous if exists
      if (this.timeout){
        clearTimeout(this.timeout)
      }
      //set lastone
      this.timeout = setTimeout(()=>{
        this.render()
      },10)
    }
    /**
     * Lifecycle event when element is removed from DOM
     */
    disconnectedCallback(){
      consoleLog(`${this.localName}...removed...bye!bye!`, ENV)
    }
  }
}