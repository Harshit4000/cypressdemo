describe('Login spec', () => {
    it('passes', () => {
        // .check()
        // .check(value)
        // .check(values)
        // .check(options)
        // .check(value, options)
        // .check(values, options)

      cy.visit('http://autopract.com/selenium/form5/');
    //   Select all Checkboxes and Radio Buttons
// cy.get('[type="checkbox"]').check()
// cy.get('[type="radio"]').check()
// // Select a Checkbox or Radio Button using Locator
// // cy.xpath("(//input[@name='count'])[2]").check()
// cy.get("input[name='country']:first-of-type").check()
// // Select a Checkbox or Radio Button using a value
// cy.get('[type="radio"]').check('IN')
// cy.get('[type="checkbox"]').check('three')
// // Select multiple checkboxes using values
// cy.get("input[name='count']").check(['three', 'four'])
// Verify currently selected checkboxes or radio button
//Select checkbox using div id and :checked property
cy.get('#countries :checked')
    .should('be.checked')
    .and('have.value', 'one')

// Select radio button using multiple attributes and values
cy.get("input[name='country'][checked='checked']")
    .should('be.checked')
    .and('have.value', 'US')

     
    })
  })