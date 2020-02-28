
import {attachShadow, attachTemplate} from '../utils/initElement'

//html template
import htmlGooey from './htmlGooey'

// default props / attributes
const defaults = {
  //create open shadow DOM
  shadowMode:'open'
}

class Gooey extends HTMLElement{
  constructor(){
    super()
    attachShadow(this,defaults['shadowMode'])
  }
  /**
   * Lifecycle event when component is mounted to DOM
   */
  connectedCallback(){
    console.log('dv4-loader-gooey...mounted to DOM!')
    //init with props (attribute values
    this.render()
  }
  /**
   * Extract all attributes placed on the
   * element as props. It includes default
   * props defined for this element
   */
  getPropsFromAttributes(){
    const props={
      ...defaults
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
    const props = this.getPropsFromAttributes()
    //update template
    attachTemplate(this, props['shadowMode'], htmlGooey(props))
  }
  /**
   * Listen for changes in these attributes
   */
  static get observedAttributes(){
    return ['hide','backdrop']
  }
  /**
   * Lifecycle event when attribute is changed
   */
  attributeChangedCallback(name, oldVal, newVal){
    console.log('attribut changed...', name, newVal)
    this.render()
  }
  /**
   * Lifecycle event when element is removed from DOM
   */
  disconnectedCallback(){
    console.log('dv4-loader-gooey...removed...bye!bye!')
  }
}

customElements.define('dv4-loader-gooey',Gooey)