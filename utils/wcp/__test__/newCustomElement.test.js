import {newCustomElement} from "../src/"

//props
const props={
  observedAttr:['role'],
  shadowMode:'open',
  renderHtml:`
    <h1>Test</h1>
  `
}

describe("newCustomElement",()=>{
  it ("returns function to create CustomHtmlElement",()=>{
    const ne = newCustomElement(props)
    expect(typeof ne).toBe("function")
  })
})