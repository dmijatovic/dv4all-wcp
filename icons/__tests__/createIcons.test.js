import {Dv4ArrowRight} from '../src/index'

describe('create icons',()=>{

  it ('has icon arrow-right class',()=>{
    const ar = Dv4ArrowRight()
    console.log('ar...', ar)
    expect(ar).toBeTruthy()
  })

})
