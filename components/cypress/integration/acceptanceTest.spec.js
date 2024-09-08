describe('FizzBuzzBass Application - End-to-End Test', () => {
  it('should load the homepage and render the main components', () => {
    cy.visit('/');

    cy.contains('Dark Mode').should('exist');
    cy.get('input[placeholder="Enter a number"]').should('exist');
    cy.get('button').contains('Submit').should('exist');
  });

  it('should submit a valid number and show FizzBuzz result', () => {
    cy.get('input[placeholder="Enter a number"]').type('3');
    cy.get('button').contains('Submit').click();
    cy.contains('Result: Fizz').should('exist');
  });

  it('should show an error for a negative number', () => {
    cy.get('input[placeholder="Enter a number"]').clear().type('-1');
    cy.get('button').contains('Submit').click();
    cy.contains('Value error, The number must be a positive integer').should('exist');
  });

  it('should show an error when the API request fails', () => {
    cy.get('input[placeholder="Enter a number"]').clear().type('invalid');
    cy.get('button').contains('Submit').click();
    cy.contains('Error: Could not process your request').should('exist');
  });
});
