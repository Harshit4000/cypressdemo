// An option in the select dropdown can be selected using its,

// Value
// Text
// Index
describe('Login spec', () => {
//     // Cypress test for selecting drop-down option by its index
// it.only("Validate the dropdown option selection by it's index", () => {
// cy.visit("https://www.bstackdemo.com/")
// cy.get("select").select(1).invoke("val").should("eq", "lowestprice")
// In the above code example, first finding the element using get() and then using chained command select() to pass the index(index starts from 0). In order to ensure that the value selected is proper, you can invoke the element’s value using invoke(“val”) and assert using should()
// })
// Cypress test for selecting Drop-Down option by its value
// it.only("Validate the dropdown option selection by it's value", () => {
// cy.visit("https://www.bstackdemo.com/")
// cy.get("select")
//   .select("lowestprice")
//   .invoke("val")
//   .should("eq", "lowestprice")
// })
// In the above code example, passing the select dropdown option’s value to Cypress’s select() function. Note that the select command accepts index, value, and text.
// Asserting the selected Dropdown options by text is saved
// There are use cases where you would need to validate if the drop down option selected is the right one and the option is retained in the select drop-down once it’s selected.

// You can validate this by retrieving the selected value’s text like in the below example

it.only("Validate the dropdown option selection by it's text and assert the selection", () => {
cy.visit("https://www.bstackdemo.com/")
cy.get("select").select("Highest to lowest")
cy.get("select option:selected")
  .invoke("text")
  .should("eq", "Highest to lowest")
})
})