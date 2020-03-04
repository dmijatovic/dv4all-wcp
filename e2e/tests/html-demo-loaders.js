/// <reference types="cypress" />

const loaders=[

]

describe("Loaders demo page",()=>{
  before(()=>{
    cy.visit("http://localhost:5000/loaders")    
  })

  beforeEach(()=>{
    //get all btns
    cy.get("dv4-button").as('dv4btn')
  })
  
  it("Shows loader page with title",()=>{
    cy.get("title")
      .should("contain.text","Loaders - ")
  })

  it("Has at least 1 custom button",()=>{
    cy.get("@dv4btn")
      .then(btns=>{
        return btns.length
      })
      .should("be.greaterThan",0)
  })

  it("Button has data-loader-type attribute",()=>{
    cy.get("@dv4btn")
      .then(btns=>{
        const loaders=[]
        for (let i=0; i<btns.length; i++){
          const loader = btns[i].getAttribute("data-loader-type")
          // console.log("button...", btns[i])
          // console.log("loader...", loader)
          loaders.push(loader)
        }
        return loaders.length
      })
      .should("be.greaterThan", 0)
  })
})