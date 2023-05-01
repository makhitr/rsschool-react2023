/// <reference types="cypress" />
describe('render main page', () => {
  beforeEach(() => cy.visit('/form'));
  it('render page title', () => {
    cy.get('h2').should('have.text', 'Add your favourite character');
  });
  it('render search button', () => {
    cy.get('button').should('have.text', 'Add Character');
  });
  it('can fill the form', () => {
    cy.get('form');
    cy.get('input[name="name"]').type('Molly').should('have.value', 'Molly');
    cy.get('input[name="created"]').type('2000-01-01').should('have.value', '2000-01-01');
    cy.get('[type="checkbox"]').check();
    cy.get('[type="radio"]').first().check();
    cy.get('input[type=file]')
      .selectFile({
        contents: Cypress.Buffer.from('file contents'),
        fileName: 'image.png',
        lastModified: Date.now(),
      })
      .should('have.prop', 'value', 'C:\\fakepath\\image.png');
  });
});
