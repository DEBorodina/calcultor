const baseUrlL: string = Cypress.config().baseUrl.toString();

describe('Navidation panel', () => {
  it('"/" should redirect to functioval calculator page', () => {
    cy.visit('/');
    cy.url().should('eq', `${baseUrlL}/fc-calculator`);
  });

  it('"Home(CC)" should redirect to class calculator page', () => {
    cy.visit('/fc-calculator');
    cy.get('li').contains('Home(CC)').click();
    cy.url().should('eq', `${baseUrlL}/cc-calculator`);
  });

  it('"Settings" should redirect to class calculator page', () => {
    cy.visit('/fc-calculator');
    cy.get('li').contains('Settings').click();
    cy.url().should('eq', `${baseUrlL}/settings`);
  });

  it('"Home(FC)" should redirect to functional calculator page', () => {
    cy.visit('/cc-calculator');
    cy.get('li').contains('Home(FC)').click();
    cy.url().should('eq', `${baseUrlL}/fc-calculator`);
  });
});
