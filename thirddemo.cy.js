describe('', () => {
    beforeEach(() => {
      cy.screenshot();
    })
  })
describe('page test - suite', () => {
    it('Visits page', function () {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
  
      cy.pause()
  
      cy.get('.action-email')
        .should('have.value', '')
  
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
          
    })
  })