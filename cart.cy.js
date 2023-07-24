describe('Login spec', () => {
    it('passes', () => {
      //visits amazon website 

      cy.visit('https://amazon.in');

      //login account

      cy.get('#nav-link-accountList-nav-line-1').click();
      cy.get('#ap_email').click().type('harshitrajput2000@gmail.com');
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').click().type('Harshit@1327');
      cy.get('#signInSubmit').click();
      cy.session();
      
      //wait for 2 seconds
      cy.wait(2000);

      //search for perfumes

      cy.get('#twotabsearchtextbox').click().type("perfumes");
      cy.get('#nav-search-submit-button').click();

      //add to cart the first item
      cy.get('#a-autoid-1-announce').click()
      cy.get('#sc-alm-buy-box-ptc-button-ctnow > .a-button-inner > .a-button-input').click();
     
    })
  })
//   Many OAuth providers, especially social logins, run A/B experiments, which means that their login screen is dynamically changing. This makes automated testing difficult.

// Many OAuth providers also throttle the number of web requests you can make to them. For instance, if you try to test Google, Google will automatically detect that you are not a human and instead of giving you an OAuth login screen, they will make you fill out a captcha.

// Additionally, testing through an OAuth provider is mutable - you will first need a real user on their service and then modifying anything on that user might affect other tests downstream.

// Here are solutions you may choose to use to alleviate these problems:

// Use another platform that you control to log in with username and password via cy.origin(). This likely guarantees that you will not run into the problems listed above, while still being able to automate your login flow. You can reduce the amount of authentication requests by utilizing cy.session().
// Stub out the OAuth provider and bypass it using their UI altogether if cy.origin() is not an option. You could trick your application into believing the OAuth provider has passed its token to your application.
// If you must get a real token and cy.origin() is not an option, you can use cy.request() and use the programmatic API that your OAuth provider provides. These APIs likely change more infrequently and you avoid problems like throttling and A/B campaigns.
// After running your test, instead of trying to cy.visit() GitHub, you can use cy.request() to programmatically interact with GitHub's APIs directly.