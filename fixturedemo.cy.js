describe('Login spec', () => {
    //for wrong user name with correct password
    it('passes', () => {
      //visits amazon website
      cy.visit('https://amazon.in');
      cy.fixture('amazon').then((data)=>{
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').click().type('data.username');
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').click().type('data.password');
        cy.get('#signInSubmit').click();
      })
  
      //login your account
      
    })
})