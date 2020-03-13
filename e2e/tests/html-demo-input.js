/// <reference types="cypress" />

describe("Input demo page",()=>{
  before(()=>{
    cy.visit("http://localhost:5000/components/input")
  })

  it("Shows input page with title",()=>{
    cy.get("title")
      .should("contain.text","Custom elements - input")
  })
  describe("Sidebar INPUT link",()=>{
    beforeEach(()=>{
      cy.get("dv4-sidebar-menu")
        .get("aside")
        .children()
        .eq(1)
        .as("BUTTON")
    })
    it ("Sidebar has second item with label Input",()=>{
      cy.get("@BUTTON")
        .should("contain.text","Input")
    })
    it ("Sidebar Input item is active",()=>{
      cy.get("@BUTTON")
        .should("have",".active")
    })
  })

  describe("Input component",()=>{
    const testTxt="Test text"

    beforeEach(()=>{
      cy.get("dv4-text-input")
        .as("DV4INPUT")
    })

    it('Tag dv4-text-input EXISTS',()=>{
      cy.get("@DV4INPUT")
        .should("exist")
    })

    it(`dv4-text-input takes input "${testTxt}"`,()=>{
      cy.get("@DV4INPUT")
        .then(e=>{
          const [el] = e.get()
          const input = el.shadowRoot.querySelector('input')
          if (input) {
            //can get focus
            input.focus()
            //add value
            input.value = testTxt
            //trigger change
            let change = new Event("change")
            input.dispatchEvent(change)
            //OK
            return true
          }else{
            throw new Error("dv4input element missing")
          }
        })
        .should("be.true")
    })
    it('Shows input text onChange event in #text-output',()=>{
      cy.get("#text-output")
        .should("contain.text",testTxt)
    })
  })
})