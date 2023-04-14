import { ROUTE_NAMES } from '../../src/constants/routesNames';
import { calculators, settings } from '../constants';

const baseUrlL: string = Cypress.config().baseUrl.toString();

describe('Navigation', () => {
  it('"/" should redirect to functional calculator page', () => {
    cy.visit('/');
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.FUNCTIONAL_CALCULATOR}`);
  });

  [...calculators, ...settings].forEach(({ name, path }) => {
    describe(`${name} navigation panel`, () => {
      it('"Home(CC)" should redirect to class calculator page', () => {
        cy.visit(path);
        cy.get('li').contains('Home(CC)').click();
        cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.CLASS_CALCULATOR}`);
      });

      it('"Home(FC)" should redirect to class calculator page', () => {
        cy.visit(path);
        cy.get('li').contains('Home(FC)').click();
        cy.url().should(
          'eq',
          `${baseUrlL}${ROUTE_NAMES.FUNCTIONAL_CALCULATOR}`
        );
      });

      it('"Settings(FC)" should redirect to functional calculator page', () => {
        cy.visit(path);
        cy.get('li').contains('Settings(FC)').click();
        cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.FUNCTIONAL_SETTINGS}`);
      });

      it('"Settings(CC)" should redirect to functional calculator page', () => {
        cy.visit(path);
        cy.get('li').contains('Settings(CC)').click();
        cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.CLASS_SETTINGS}`);
      });
    });
  });
});
