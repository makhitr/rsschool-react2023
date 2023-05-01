/// <reference types="cypress" />
describe('render main page', () => {
  beforeEach(() => cy.visit('/'));
  it('render page title', () => {
    cy.get('h2').contains('Main Page');
  });
  it('render nav links', () => {
    cy.get('a').should('have.length', 3);
  });
  it('render search input', () => {
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Search');
  });
  it('render cards', () => {
    cy.get('[data-testid="cards-list"]').should('exist');
    cy.get('[data-testid="card-preview"]').should('have.length', 10);
  });
  it('render modals', () => {
    cy.get('[data-testid="card-modal"]').should('not.exist');
    cy.get('[data-testid="card-preview"]').first().click();
    cy.get('[data-testid="card-modal"]').should('exist');
    cy.get('[data-testid="close-modal"]').click();
    cy.get('[data-testid="card-modal"]').should('not.exist');
  });
});
