/// <reference types="cypress" />

describe("Modal demo page",()=>{
  before(()=>{
    cy.visit("http://localhost:5000/components/modals")
  })

  it("Shows modal page with title",()=>{
    cy.get("title")
      .should("contain.text","Custom elements - modal")
  })

  describe("Sidebar MODALS link",()=>{
    beforeEach(()=>{
      cy.get("dv4-sidebar-menu")
        .get("aside")
        .children()
        .eq(1)
        .as("BUTTON")
    })
    it ("Sidebar has second item with label Modals",()=>{
      cy.get("@BUTTON")
        .should("contain.text","Input")
    })
    it ("Sidebar Input item is active",()=>{
      cy.get("@BUTTON")
        .should("have",".active")
    })
  })

})