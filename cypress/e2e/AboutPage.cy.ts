/// <reference types="cypress" />
describe('render main page', () => {
  beforeEach(() => cy.visit('/about'));
  it('render page title', () => {
    cy.get('h2').should('have.text', 'About Us Page');
  });
});
