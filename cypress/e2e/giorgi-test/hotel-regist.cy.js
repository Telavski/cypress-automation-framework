/// <reference types="cypress" />

describe('Limehome Website - Locations Page', () => {
    beforeEach(() => {
      cy.visit('https://www.limehome.com/our-locations');
    });
  
    it('should display a list of locations', () => {
        // Wait for the element to be visible and contain the text 'Our Locations'
        cy.get('.our-locations__item-img').should('be.visible').and('contain', 'span.our-locations__item-img>, 5 more... ');
    });
  
    // it('should navigate to a location page when a location is clicked', () => {
    //   // Click on the first location in the list
    //   cy.get('.locations-list-item').first().click();
  
    //   // Verify that the URL contains the location name
    //   cy.url().should('include', '/our-locations/');
  
    //   // Verify that the location page is displayed
    //   cy.get('.location-header').should('be.visible');
    // });
  
    // it('should show location details when a location is selected', () => {
    //   // Click on the first location in the list
    //   cy.get('.locations-list-item').first().click();
  
    //   // Verify that the location details are displayed
    //   cy.get('.location-address').should('be.visible');
    //   cy.get('.location-contact').should('be.visible');
    //   cy.get('.location-amenities').should('be.visible');
    // });
  
    // it('should be able to go back to the locations list from a location page', () => {
    //   // Click on the first location in the list
    //   cy.get('.locations-list-item').first().click();
  
    //   // Click on the back button
    //   cy.go('back');
  
    //   // Verify that we are back on the locations page
    //   cy.url().should('include', '/our-locations');
    //   cy.get('.locations-list-item').should('have.length.greaterThan', 0);
    // });
  });
  