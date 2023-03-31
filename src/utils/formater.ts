import { isNumeric } from './validator';

export const formatToSolve = (equation: string): string => {
  for (let index = 0; index < equation.length; index++) {
    if (equation[index] == '(' && isNumeric(equation[index - 1])) {
      equation = equation.slice(0, index) + '*' + equation.slice(index);
    }

    if (equation[index] == ')' && isNumeric(equation[index + 1])) {
      equation = equation.slice(0, index + 1) + '*' + equation.slice(index + 1);
    }

    if (equation[index] == ')' && equation[index + 1] == '(') {
      equation = equation.slice(0, index + 1) + '*' + equation.slice(index + 1);
    }
  }
  return equation;
};

export const formatToPrint = (number: number): string => {
  let stringNumber = String(number.toFixed(3));
  stringNumber = stringNumber.replace(/0*$/, '');
  stringNumber = stringNumber.replace(/\.*$/, '');
  return stringNumber;
};
