describe('Cypress variables example', () => {
    it('Should create and use a variable', () => {
      let name = 'ramzes'
      cy.visit("https://automationteststore.com/index.php?rt=account/login");
        cy.get('#loginFrm_loginname').type(name)
        cy.get('#loginFrm_password').type(123456)
        cy.get('#loginFrm > fieldset > .btn').click()
       // cy.get('.current > [href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click()
      //cy.get('#welcome-message').should('contain.text', `Welcome, ${name}!`)
    })
    it.only('Should acsess apparel&accesory select item and chack out ', () => {
        let name = 'ramzes'
        cy.visit("https://automationteststore.com/index.php?rt=product/category&path=68")
        cy.get('ul.thumbnails > :nth-child(1) > :nth-child(1) > img').click()
        cy.get(':nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
        cy.get('[for="option344749"]').click()
        cy.get('#product > fieldset > :nth-child(2)').click()
        cy.get('.cart').click()
        cy.get('#cart_checkout1').click()
        cy.get('#loginFrm_loginname').type(name)
        cy.get('#loginFrm_password').type(123456)
        cy.get('#loginFrm > fieldset > .btn').click()
        cy.get('#checkout_btn').click()
        cy.get('.maintext').should('be.be.visible')
        //cy.get('.mb40 > :nth-child(3)')
  })
})  