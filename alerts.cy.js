// pop are of two types alert and confirmation
// implementation for alet pop up
// describe(' Test', function () {
//     // test case
//     it('Test Case', function (){
//        // launch the url
//        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
//        // click on submit button to produce the alert pop up
//        cy.get('input[type="submit"]').click();
//        // firing window: alert event with on() method
//        cy.on('window:alert',(txt)=>{
//           //Mocha assertions
//           expect(txt).to.contains('Your full name cannot be blank.');
//        })
//     })
// })
// code for confirmation alert
describe(' Test', function () {
    // test case
    it('Test Case3', function (){
       // launch the url
       cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm");
       // click on submit button to produce the confirmation alert pop up
       cy.get('button[name="submit"]').click();
       // firing window: alert event with on() method
       cy.on('window:confirm',(txt)=>{
          //Mocha assertions
          expect(txt).to.contains('You are submitting information to an external page.');
       })
    });
 });