/// <reference types="cypress" />
describe('render main page', () => {
  beforeEach(() => cy.visit('/'));
  it('render page title', () => {
    cy.get('h2').should('have.text', 'Main Page');
  });
  it('render nav links', () => {
    cy.get('a').should('have.length', 3);
  });
  it('render search input', () => {
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Search');
  });
  it('render cards', () => {
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Search');
  });
});
