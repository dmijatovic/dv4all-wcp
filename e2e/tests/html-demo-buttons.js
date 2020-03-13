/// <reference types="cypress" />

describe("Buttons demo page",()=>{
  before(()=>{
    cy.visit("http://localhost:5000/components/")
  })

  it("Shows buttons page with title",()=>{
    cy.get("title")
      .should("contain.text","Custom elements - buttons")
  })

  describe("Sidebar BUTTONS link",()=>{
    beforeEach(()=>{
      cy.get("dv4-sidebar-menu")
        .get("aside")
        .children()
        .first()
        .as("BUTTON")
    })
    it ("Sidebar has first item with label Buttons",()=>{
      cy.get("@BUTTON")
        .should("contain.text","Buttons")
    })
    it ("Sidebar Buttons item is active",()=>{
      cy.get("@BUTTON")
        .should("have",".active")
    })
  })

  describe("dv4-custom-button elements",()=>{
    it("Page has 6 dv4-custom-button elements",()=>{
      cy.get("dv4-custom-button")
        .should("have.length",6)
    })
    it("First custom button is clickable",()=>{
      cy.get("dv4-custom-button")
        .first()
        .click()
    })
  })
})