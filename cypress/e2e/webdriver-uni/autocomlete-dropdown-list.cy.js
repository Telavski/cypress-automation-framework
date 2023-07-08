/// <reference types="cypress" />

describe("Verify Autocomlete dropwdown lists via webdriveruni", () => {
    it("Select specific product via autocomlete  lists", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list>*').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Avacado'

            if(prod === productToSelect) {
                //$el.click();
                $el.trigger("click")

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list>*').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Grapes'
    
                if(prod === productToSelect) {
                    //$el.click();
                    $el.trigger("click")
    
                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                }
            })
        })

    });
})