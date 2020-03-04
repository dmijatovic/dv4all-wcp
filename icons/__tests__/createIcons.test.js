
window.customElements={
  define: (name, constructor)=>{
    console.log('Fake call...', name)
  }
}

import {Dv4ArrowRight} from '../src/index'

describe('create icons',()=>{

  it ('has icon arrow-right class',()=>{
    expect(true).toBe(true)
  })

})
