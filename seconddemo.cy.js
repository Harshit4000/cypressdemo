/// <reference types="cypress" />

describe("Testing the application", function() {
    it("should login with username and password", function() {

        // visit the lambdageeks page
        cy.visit('https://demo.applitools.com/')

        cy.get('#username').type('test123')

        cy.get('#password').type('123')

        cy.get('#log-in').click();

        cy.url().should('include', '/app')

    });
});