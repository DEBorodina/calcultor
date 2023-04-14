import { keys } from '../../src/constants/keys';
import { calculators } from '../constants';

calculators.forEach(({ name, path }) => {
  describe(`${name} test`, () => {
    beforeEach(() => {
      cy.visit(path);
    });

    describe('Test key buttons', () => {
      keys.forEach((key) => {
        if (!['CE', 'C', '='].includes(key)) {
          let expressionToType = key;
          if (['+', '-', '/', '*'].includes(key)) {
            expressionToType = '1' + key;
          }
          if (key === ')') expressionToType = '(-1' + key;
          it(`button "${key}" prints "${key}" on display`, () => {
            cy.typeExpression(expressionToType);
            cy.get('p[data-cy=current-display]').should(
              'have.text',
              expressionToType
            );
          });
        }
      });

      it(`button "C" removes the last element from the equation`, () => {
        cy.typeExpression('11C');
        cy.get('p[data-cy=current-display]').should('have.text', '1');
      });

      it(`button "C" removes all the equation when its length is 1`, () => {
        cy.typeExpression('1C');
        cy.get('p[data-cy=current-display]').should('have.text', '');
      });

      it(`button "C" removes the result and returns the equation after "=" pressed`, () => {
        cy.typeExpression('1+1=C');
        cy.get('p[data-cy=current-display]').should('have.text', '1+1');
      });

      it(`button "C" removes the error and returns the equation after "=" pressed`, () => {
        cy.typeExpression('1/0=C');
        cy.get('p[data-cy=current-display]').should('have.text', '1/0');
      });

      it(`button "C" doesn't do anything if equation's length is 0`, () => {
        cy.get(`button[data-cy=C]`).click();
        cy.get('p[data-cy=current-display]').should('have.text', '');
      });

      it(`button "CE" removes all the equation`, () => {
        cy.typeExpression('11');
        cy.get(`button[data-cy=CE]`).click();
        cy.get('p[data-cy=current-display]').should('have.text', '');
      });

      it(`button "CE" removes the result and the equation after "=" pressed`, () => {
        cy.typeExpression('1+1=');
        cy.get(`button[data-cy=CE]`).click();
        cy.get('p[data-cy=current-display]').should('have.text', '');
      });

      it(`button "CE" removes the error and the equation after "=" pressed`, () => {
        cy.typeExpression('1/0=');
        cy.get(`button[data-cy=CE]`).click();
        cy.get('p[data-cy=current-display]').should('have.text', '');
      });

      it(`button "CE" doesn't do anything if equation's length is 0`, () => {
        cy.get(`button[data-cy=CE]`).click();
        cy.get('p[data-cy=current-display]').should('have.text', '');
      });
    });

    describe('Test operations', () => {
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
      describe(`Test expression can't start with invalid operator`, () => {
        ['+', '/', '*', ')'].forEach((operator) => {
          it(`Test expression can't start with "${operator}" operator`, () => {
            cy.typeExpression(operator);
            cy.get('p[data-cy=current-display]').should('have.text', '');
          });
        });
      });

      describe(`Test expression can't end with invalid operator`, () => {
        ['+', '-', '/', '*', '(', '.'].forEach((operator) => {
          it(`Test expression can't end with "${operator}" operator`, () => {
            cy.typeExpression('3' + operator + '=');
            cy.get('p[data-cy=current-display]').should(
              'have.text',
              'Invalid input'
            );
          });
        });
      });

      describe(`Test expression can't consists only of one operator`, () => {
        ['-', '(', '.'].forEach((operator) => {
          it(`Test expression can't consists only of "${operator}" operator`, () => {
            cy.typeExpression(operator + '=');
            cy.get('p[data-cy=current-display]').should(
              'have.text',
              'Invalid input'
            );
          });
        });
      });

      it(`Test can't type number with two "."`, () => {
        const expression = '1+.3';
        cy.typeExpression(expression + '.');
        cy.get('p[data-cy=current-display]').should('have.text', expression);
      });

      it(`Test number ends with "."`, () => {
        const expression = '1+3.';
        cy.typeExpression(expression + '+');
        cy.get('p[data-cy=current-display]').should('have.text', expression);
      });

      it(`Test empty brackets`, () => {
        cy.typeExpression('()');
        cy.get('p[data-cy=current-display]').should('have.text', '(');
      });

      describe(`Test expression in brackets can't start with invalid operator`, () => {
        ['+', '/', '*', ')'].forEach((operator) => {
          it(`Test expression in brackets can't start with "${operator}" operator`, () => {
            cy.typeExpression('(' + operator);
            cy.get('p[data-cy=current-display]').should('have.text', '(');
          });
        });
      });

      describe(`Test expression in brackets can't end with invalid operator`, () => {
        ['+', '/', '*', '.', '(', '-'].forEach((operator) => {
          it(`Test expression in brackets can't start with "${operator}" operator`, () => {
            cy.typeExpression('(3' + operator + ')');
            cy.get('p[data-cy=current-display]').should(
              'have.text',
              '(3' + operator
            );
          });
        });
      });

      it(`Test brackets with only 1 symbol in`, () => {
        cy.typeExpression('(3)');
        cy.get('p[data-cy=current-display]').should('have.text', '(3');
      });

      it(`Test invalid brackets (extra close bracket)`, () => {
        const expression = '(3+3)+2';
        cy.typeExpression(expression + ')');
        cy.get('p[data-cy=current-display]').should('have.text', expression);
      });

      it(`Test invalid brackets (extra open bracket)`, () => {
        cy.typeExpression('(3+3+2=');
        cy.get('p[data-cy=current-display]').should(
          'have.text',
          'Invalid input'
        );
      });

      it(`Test 2 same operators in a row`, () => {
        cy.typeExpression('1++');
        cy.get('p[data-cy=current-display]').should('have.text', '1+');
      });

      it(`Test 2 different operators in a row`, () => {
        cy.typeExpression('1+/');
        cy.get('p[data-cy=current-display]').should('have.text', '1+');
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
