import attachTemplate from './attachTemplate'
/**
 * Return class containing definitions of new loader custom element.
 * @param {Object} props = {
 *  name: {String} name of customElement,
 *  shadowMode: {ENUM} open, closed, null,
 *  htmlTemplate: {Function} returns html
 * }
 */
export default ({shadowMode, renderHtml, observedAttr=[]})=>{
  // props used to construct
  // return new custom HTML element
  return class CustomHtmlElement extends HTMLElement{
    constructor(){
      super()
      if (!renderHtml) throw new Error ('BaseLoaderElement...renderHtml method not provided!')
      //attach shadowDOM
      if (shadowMode) this.attachShadow({mode:shadowMode})
    }
    /**
     * Lifecycle event when component is mounted to DOM
     */
    connectedCallback(){
      console.log(`${this.localName}...mounted to DOM!`)
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
      console.log(`${this.localName}...attribut changed...`, name, newVal)
      this.render()
    }
    /**
     * Lifecycle event when element is removed from DOM
     */
    disconnectedCallback(){
      console.log(`${this.localName}...removed...bye!bye!`)
    }
  }
}