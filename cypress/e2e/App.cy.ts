/// <reference types="cypress" />
describe('App E2E', () => {
  it('render fist page', () => {
    cy.visit('/');

    // cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Add Character');
  });
  // it('should have form', () => {
  //   cy.visit('/form');

  //   // cy.get('input').should('have.value', '');
  //   cy.get('button').should('have.text', 'Add Character');
  // });
});
