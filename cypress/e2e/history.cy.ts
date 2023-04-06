import { calculators } from '../constants';

calculators.forEach(({ name, path }) => {
  describe(`Test ${name} history`, () => {
    beforeEach(() => {
      cy.visit(path);
    });

    it(`Inititaly history is empty`, () => {
      cy.get(`button[data-cy="history-button"]`).click();
      cy.get('p[data-cy="no-history"]').should('exist');
    });

    it(`Add expression to history`, () => {
      cy.typeExpression('1+2=');
      cy.get(`button[data-cy="history-button"]`).click();
      cy.get(`ul[data-cy="history-list"]`).its('length').should('eq', 1);
      cy.get(`ul[data-cy="history-list"]`).contains('1+2=3');
    });

    it(`Doesn't add invalid expressions to history`, () => {
      cy.typeExpression('1+2)=');
      cy.get(`button[data-cy="history-button"]`).click();
      cy.get(`p[data-cy="no-history"]`).should('exist');
      cy.get(`ul[data-cy="history-list"]`).should('not.exist');
    });

    it(`History button shows history`, () => {
      cy.typeExpression('1+2=');
      cy.get(`button[data-cy="history-button"]`).click();
      cy.get(`ul[data-cy="history-list"]`).its('length').should('eq', 1);
      cy.get(`ul[data-cy="history-list"]`).contains('1+2=3');
    });

    it(`History button removes history`, () => {
      cy.typeExpression('1+2=');
      cy.get(`button[data-cy="history-button"]`).click();
      cy.get(`ul[data-cy="history-list"]`).its('length').should('eq', 1);
      cy.get(`ul[data-cy="history-list"]`).contains('1+2=3');
      cy.get(`button[data-cy="history-button"]`).click();
      cy.get(`ul[data-cy="history-list"]`).should('not.exist');
    });

    it(`History button shows history`, () => {
      cy.typeExpression('1+2=');
      cy.get(`button[data-cy="history-button"]`).click();
      cy.get(`ul[data-cy="history-list"]`).its('length').should('eq', 1);
      cy.get(`ul[data-cy="history-list"]`).contains('1+2=3');
      cy.get(`ul[data-cy="no-history"]`).should('not.exist');
    });

    it(`History remains after switching to another page`, () => {
      cy.typeExpression('1+2=');
      cy.visit('/settings');
      cy.visit(path);
      cy.get(`button[data-cy="history-button"]`).click();
      cy.get(`ul[data-cy="history-list"]`).contains('1+2=3');
      cy.get(`ul[data-cy="history-list"]`).its('length').should('eq', 1);
      cy.get(`ul[data-cy="no-history"]`).should('not.exist');
    });

    it(`History remains after reloading the page`, () => {
      cy.typeExpression('1+2=');
      cy.reload();
      cy.get(`button[data-cy="history-button"]`).click();
      cy.get(`ul[data-cy="history-list"]`).contains('1+2=3');
      cy.get(`ul[data-cy="history-list"]`).its('length').should('eq', 1);
      cy.get(`ul[data-cy="no-history"]`).should('not.exist');
    });
  });
});

describe('Test global history', () => {
  it('FC calcultor history is not added to CC history', () => {
    cy.visit('/fc-calculator');
    cy.typeExpression('1+2=');
    cy.visit('/cc-calculator');
    cy.get(`button[data-cy="history-button"]`).click();
    cy.get(`p[data-cy="no-history"]`).should('exist');
  });

  it('CC calcultor history is not added to FC history', () => {
    cy.visit('/cc-calculator');
    cy.typeExpression('1+2=');
    cy.visit('/fc-calculator');
    cy.get(`button[data-cy="history-button"]`).click();
    cy.get(`p[data-cy="no-history"]`).should('exist');
  });
});

describe('Test "clear all history" button clears both histories', () => {
  it('FC calcultor history is not added to CC history', () => {
    cy.visit('/fc-calculator');
    cy.typeExpression('1+2=');
    cy.visit('/cc-calculator');
    cy.typeExpression('1+2=');
    cy.visit('/settings');
    cy.get('button').contains('Clear all history').click();
    cy.visit('/fc-calculator');
    cy.get(`button[data-cy="history-button"]`).click();
    cy.get(`p[data-cy="no-history"]`).should('exist');
    cy.visit('/cc-calculator');
    cy.get(`button[data-cy="history-button"]`).click();
    cy.get(`p[data-cy="no-history"]`).should('exist');
    cy.visit('/settings');
  });
});
