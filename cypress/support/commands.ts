/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Create several Todo items via UI
     * @example
     * cy.createDefaultTodos()
     */
    typeExpression(expression: string): Chainable<any>;
  }
}

Cypress.Commands.add('typeExpression', (expression: string): void => {
  expression.split('').forEach((key: string) => {
    cy.get(`button[data-cy="${key}"]`).click();
  });
});
