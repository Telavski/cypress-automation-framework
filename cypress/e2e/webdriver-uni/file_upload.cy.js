/// <reference types="cypress" />

describe("Test File Upload via webriveruni", () => {
    it("Upload a file ....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
      
        cy.get('#myFile').selectFile("cypress/fixtures/laptop.png")
        cy.get('#submit-button').click()

    })

    it("Upload a file ....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target')
            .click({force:true})
        cy.get('#submit-button').click()
    })
})