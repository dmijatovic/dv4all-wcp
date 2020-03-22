
import consoleLog from '@dv4all/log-utils'

function defineCustomElement(name, component, options){
  debugger
  if (customElements.get(name)==='undefined'){
    if (options){
      customElements.define(name, component, options)
    }else{
      customElements.define(name, component)
    }
  } else {
    consoleLog(`defineCustomElement...${name}...ALREADY DEFINED`)
  }
}

export default defineCustomElement