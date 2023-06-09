import { ROUTE_NAMES } from '../../src/constants/routesNames';
import { settings } from '../constants';

describe('Test themes', () => {
  settings.forEach(({ name, path }) => {
    describe(`Test ${name} page theme switch`, () => {
      beforeEach(() => {
        cy.visit(path);
      });

      it('Default theme should be light', () => {
        cy.get(`button[data-cy="drop-down-button"]`).contains('light');
      });

      it('Drop-down should contain "light" and "dark" themes', () => {
        cy.get(`button[data-cy="drop-down-button"]`).click();
        cy.get(`div[data-cy="drop-down-menu"]`).contains('light');
        cy.get(`div[data-cy="drop-down-menu"]`).contains('dark');
      });

      it('Drop-down closes when click outside', () => {
        cy.get(`button[data-cy="drop-down-button"]`).click();
        cy.get('body').click(0, 0);
        cy.get(`div[data-cy="drop-down-item"]`).should('not.exist');
      });

      it('Drop-down switch the theme', () => {
        cy.get(`button[data-cy="drop-down-button"]`).click();
        cy.get(`div[data-cy="drop-down-item"]`).contains('dark').click();
        cy.get(`button[data-cy="drop-down-button"]`).contains('dark');
      });

      it('Theme remains after switching to another page', () => {
        cy.get(`button[data-cy="drop-down-button"]`).click();
        cy.get(`div[data-cy="drop-down-item"]`).contains('dark').click();
        cy.get(`button[data-cy="drop-down-button"]`).contains('dark');
        cy.visit(ROUTE_NAMES.FUNCTIONAL_CALCULATOR);
        cy.visit(path);
        cy.get(`button[data-cy="drop-down-button"]`).contains('dark');
      });

      it('Theme remains after reloading the page', () => {
        cy.get(`button[data-cy="drop-down-button"]`).click();
        cy.get(`div[data-cy="drop-down-item"]`).contains('dark').click();
        cy.get(`button[data-cy="drop-down-button"]`).contains('dark');
        cy.reload();
        cy.get(`button[data-cy="drop-down-button"]`).contains('dark');
      });
    });
  });
});
