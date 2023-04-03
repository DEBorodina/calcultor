import { Calculator } from './Calculator';
import {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  SubtractCommand,
} from './commands';
import { formatToPrint, formatToSolve } from './formater';
import { isNumeric } from './validator';

const findNewIndexAfterBracket = (equation: string, index: number): number => {
  let leftBrackets = 1;
  let rightBrackets = 0;
  for (let j = index + 1; j < equation.length; j++) {
    if (equation[j] === ')') {
      rightBrackets++;
      if (rightBrackets === leftBrackets) {
        index = j + 1;
        break;
      }
    } else if (equation[j] === '(') leftBrackets++;
  }
  return index;
};

export const getResult = (equation: string): string => {
  return formatToPrint(equationSolver(formatToSolve(equation), 0));
};

const equationSolver = (equation: string, currentIndex: number): number => {
  const calculator = new Calculator();
  let currentNumber: number | string = '';
  let sign = '+';

  for (let index = currentIndex; index < equation.length; index++) {
    if (isNumeric(equation[index])) {
      currentNumber += equation[index];
    }

    if (equation[index] === '(') {
      currentNumber = equationSolver(equation, index + 1);
      index = findNewIndexAfterBracket(equation, index);
    }

    if (!isNumeric(equation[index]) || index == equation.length - 1) {
      const int = +currentNumber;

      switch (sign) {
        case '+':
          calculator.executeCommand(new AddCommand(int));
          break;
        case '-':
          calculator.executeCommand(new SubtractCommand(int));
          break;
        case '*':
          calculator.executeCommand(new MultiplyCommand(int));
          break;
        case '/':
          calculator.executeCommand(new DivideCommand(int));
          break;
      }

      sign = equation[index];
      currentNumber = '';
    }

    if (equation[index] === ')') {
      return calculator.result();
    }
  }
  return calculator.result();
};
