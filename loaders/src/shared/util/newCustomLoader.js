//SHARED customElements
import Dv4LoaderOverlay from '../overlay/index.js'
import Dv4LoaderBody from '../loader-body/index.js'
/**
 * Return class containing definitions of new loader custom element.
 * @param {Object} props = {
 *  name: {String} name of customElement,
 *  shadowMode: {ENUM} open, closed, null,
 *  htmlTemplate: {Function} returns html
 * }
 */
export default ({ bodyHtml='default content', styles, observedAttr=[]})=>{
  // props used to construct
  // return new custom HTML element
  return class CustomLoaderElement extends HTMLElement{
    constructor(){
      super()
      if (!bodyHtml) throw new Error ('CustomLoaderElement...bodyHtml not provided!')
      //attach shadowDOM
      this.attachShadow({mode:'open'})
      this.rendered = false
    }
    /**
     * Lifecycle event when component is mounted to DOM
     */
    connectedCallback(){
      // console.log(`${this.localName}...mounted to DOM!`)
      if (this.rendered) return
      //render if not already done
      this.render()
    }
    /**
     * Extract all attributes placed on the
     * element as props. It also includes
     * props defined in the constructor of the element
     */
    getPropsFromAttributes(){
      const props={
        ...this.props
      }
      for (let att of this.attributes){
        // console.log('att...', att)
        if (att.value){
          props[att.name] = att.value
        } else {
          props[att.name] = 'true'
        }
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
      // get props
      const {overlay} = this.getPropsFromAttributes()
      //reset to empty
      this.shadowRoot.innerHTML=''
      //append styles element
      if (styles){
        const styleNode = document.createElement('style')
        styleNode.type = 'text/css'
        styleNode.innerHTML = styles
        this.shadowRoot.appendChild(styleNode)
      }
      //append overlay
      if (overlay) {
        const overlayNode = new Dv4LoaderOverlay()
        this.shadowRoot.appendChild(overlayNode)
      }
      //apend body
      const bodyNode = new Dv4LoaderBody()
      bodyNode.innerHTML = bodyHtml
      this.shadowRoot.appendChild(bodyNode)
      //set rendered flag
      this.rendered = true
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
      // console.log(`${this.localName}...attribut changed...`, name, newVal)
      //reset render flag
      this.rendered = false
      //render again
      this.render()
    }
    /**
     * Lifecycle event when element is removed from DOM
     */
    disconnectedCallback(){
      // console.log(`${this.localName}...removed...bye!bye!`)
    }
  }
}