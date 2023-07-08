/// <reference types="cypress" />

describe("Verify radio buttons via webdriverunit", () => {
    it("Check specific radio button", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons')
            .invoke('removeAttr', 'target').click({force:true})

        cy.get('#radio-buttons').find("input[type='radio']")
            .eq(0).check()
        cy.get('#radio-buttons').find("input[type='radio']")
            .eq(1).check()
        cy.get('#radio-buttons').find("input[type='radio']")
            .eq(2).check()
        cy.get('#radio-buttons').find("input[type='radio']")
            .eq(3).check()
        cy.get('#radio-buttons').find("input[type='radio']")
            .eq(4).check()

    });

    it.only("Validate the states of specific radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons')
            .invoke('removeAttr', 'target').click({force:true})

        cy.get("input[value='lettuce']").should('not.be.checked')
        cy.get("input[value='pumpkin']").should('be.checked')

        cy.get("input[value='lettuce']").check()
        cy.get("input[value='lettuce']").should('be.checked')
        cy.get("input[value='pumpkin']").should('not.be.checked')

        cy.get("input[value='cabbage']").should('be.disabled')
    });
})