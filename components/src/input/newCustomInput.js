import {attachTemplate} from '@dv4all/wcp-utils'
import {consoleLog} from '@dv4all/log-utils'

let Environment = 'development'
if (typeof ENV !== 'undefined'){
  Environment = ENV
}

export default ({shadowMode, renderHtml, observedAttr=[]})=>{
  // props used to construct
  // return new custom HTML element
  return class CustomInputElement extends HTMLElement{
    constructor(){
      super()
      if (!renderHtml) throw new Error ('CustomInputElement...renderHtml method not provided!')
      //attach shadowDOM
      if (shadowMode) this.attachShadow({mode:shadowMode})
      // internal value state
      this.value=''
    }
    /**
     * Lifecycle event when component is mounted to DOM
     */
    connectedCallback(){
      consoleLog(`${this.localName}...mounted to DOM!`, Environment)
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
      const props={
        type:'text'
      }
      for (let att of this.attributes){
        // console.log('att...', att)
        if (att.value){
          props[att.name] = att.value
        } else {
          props[att.name] = 'true'
        }
      }
      //add value to props list
      return this.setValueProp(props)
    }
    /**
     * Set value based on attribute input
     * and user input
     * @param {Array} props
     */
    setValueProp(props){
      //add value to props list
      if (props['value'] && this.value===''){
        return props
      } else if(this.value) {
        props['value'] = this.value
      } else {
        props['value'] =  ''
      }
      return props
    }
    /**
     * Create shadow DOM (based on defs) and
     * append html markup based on provided element
     * attributes
     * @param {Object} props
     */
    render(){
      consoleLog(`${this.localName}...render element`, Environment)
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
      this.handleInputChange()
    }
    handleInputChange(){
      //select input
      const input = this.shadowRoot.querySelector('input')
      //listen for onchange
      input['onchange'] = ({target})=>{
        if (target.value!==''){
          target.classList.add('changed')
        } else {
          target.classList.remove('changed')
        }
        //save new value
        this.value = target.value
        //publish event outside this customElement
        const newEvent = new Event('onChange',{bubbles:true, composed:true})
        target.dispatchEvent(newEvent)
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
      consoleLog(`${this.localName}...attribut changed...${name}=${newVal}`, Environment)
      // call render on attribute changes
      this.defferRender()
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
      consoleLog(`${this.localName}...removed...bye!bye!`, Environment)
    }
  }
}