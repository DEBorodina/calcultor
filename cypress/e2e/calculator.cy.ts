import { keys } from '../../src/constants/keys';
import { calculators } from '../constants';

calculators.forEach(({ name, path }) => {
  describe(`${name} test`, () => {
    beforeEach(() => {
      cy.visit(path);
    });

    describe('Test key buttons', () => {
      keys.forEach((key) => {
        if (key != 'C' && key != 'CE' && key != '=')
          it(`button "${key}" prints  ${key} on display`, () => {
            cy.get(`button[data-cy="${key}"]`).click();
            cy.get('p[data-cy=current-display]').should('have.text', key);
          });
      });

      it(`button "C" removes the last element from the equation`, () => {
        cy.typeExpression('11C');
        cy.get('p[data-cy=current-display]').should('have.text', '1');
      });

      it(`button "C" removes all the equation when its length is 1`, () => {
        cy.typeExpression('1C');
        cy.get('p[data-cy=current-display]').should('have.text', '0');
      });

      it(`button "C" removes the result and returns the equation after "=" pressed`, () => {
        cy.typeExpression('1+1=C');
        cy.get('p[data-cy=current-display]').should('have.text', '1+1');
      });

      it(`button "C" doesn't do anything if equation's length is 0`, () => {
        cy.get(`button[data-cy=C]`).click();
        cy.get('p[data-cy=current-display]').should('have.text', '0');
      });

      it(`button "CE" removes all the equation`, () => {
        cy.typeExpression('11');
        cy.get(`button[data-cy=CE]`).click();
        cy.get('p[data-cy=current-display]').should('have.text', '0');
      });

      it(`button "CE" removes the result and the equation after "=" pressed`, () => {
        cy.typeExpression('1+1=');
        cy.get(`button[data-cy=CE]`).click();
        cy.get('p[data-cy=current-display]').should('have.text', '0');
      });

      it(`button "CE" doesn't do anything if equation's length is 0`, () => {
        cy.get(`button[data-cy=CE]`).click();
        cy.get('p[data-cy=current-display]').should('have.text', '0');
      });
    });

    describe('Test opetaions', () => {
      it(`Test addition`, () => {
        cy.typeExpression('1+2=');
        cy.get('p[data-cy=current-display]').should('have.text', '=3');
      });

      it(`Test subtraction`, () => {
        cy.typeExpression('1-2=');
        cy.get('p[data-cy=current-display]').should('have.text', '=-1');
      });

      it(`Test multiplication`, () => {
        cy.typeExpression('3*2=');
        cy.get('p[data-cy=current-display]').should('have.text', '=6');
      });

      it(`Test division`, () => {
        cy.typeExpression('2/4=');
        cy.get('p[data-cy=current-display]').should('have.text', '=0.5');
      });

      it('Test operations with float numbers', () => {
        cy.typeExpression('0.3/.7=');
        cy.get('p[data-cy=current-display]').should('have.text', '=0.429');
      });

      it('Test operations with negative numbers', () => {
        cy.typeExpression('-2/4=');
        cy.get('p[data-cy=current-display]').should('have.text', '=-0.5');
      });

      it('Test expression with + and *', () => {
        cy.typeExpression('3+2*4=');
        cy.get('p[data-cy=current-display]').should('have.text', '=11');
      });

      it('Test expression with brackets', () => {
        cy.typeExpression('3(2+4)=');
        cy.get('p[data-cy=current-display]').should('have.text', '=18');
      });
    });

    describe('Test invalid expressions', () => {
      it(`Test expression starts with invalid operator`, () => {
        cy.typeExpression('/3=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Invalid input'
        );
      });

      it(`Test expression ends with invalid operator`, () => {
        cy.typeExpression('3*3*=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Invalid input'
        );
      });

      it(`Test expression consists only of one operator`, () => {
        cy.typeExpression('-=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Invalid input'
        );
      });

      it(`Test number includes two "."`, () => {
        cy.typeExpression('1+.3.=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Invalid input'
        );
      });

      it(`Test number ends with "."`, () => {
        cy.typeExpression('1+3.=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Invalid input'
        );
      });

      it(`Test empty brackets`, () => {
        cy.typeExpression('()=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Invalid input'
        );
      });

      it(`Test invalid brackets`, () => {
        cy.typeExpression('(3+3)+2)=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Invalid input'
        );
      });

      it(`Test only operator in brackets`, () => {
        cy.typeExpression('(+)=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Invalid input'
        );
      });

      it(`Test 2 operators in a row`, () => {
        cy.typeExpression('++=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Invalid input'
        );
      });

      it(`Test division by zero`, () => {
        cy.typeExpression('2/0=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Division by zero'
        );
      });

      it(`Test division by zero operators in a row`, () => {
        cy.typeExpression('999999999*9999999=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Too big numbers'
        );
      });
    });
  });
});
