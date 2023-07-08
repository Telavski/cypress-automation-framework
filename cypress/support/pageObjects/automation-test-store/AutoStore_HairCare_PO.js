class AutoStore_HairCare_Po {
    addHairCareProductToBasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click();
    }

}
export default AutoStore_HairCare_Po;