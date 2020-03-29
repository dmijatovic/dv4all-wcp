// import {consoleLog} from '@dv4all/log-utils'

/**
 * Define customElement method. Checks if element
 * is already defined. If element alreadt defined it
 * logs warning that element is already defined.
 * @param {String} name
 * @param {Object} component
 * @param {Object} options
 */
function defineCustomElement(name, component, options){
  const defined = customElements.get(name)
  if (defined){
    // consoleLog(`defineCustomElement...${name}...ALREADY DEFINED`)
    console.warn(`defineCustomElement...${name}...ALREADY DEFINED:`, defined)
    return false
  } else {
    if (options){
      customElements.define(name, component, options)
    }else{
      customElements.define(name, component)
    }
    return true
  }
}

export default defineCustomElement