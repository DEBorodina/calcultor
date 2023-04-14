import { keys } from '@/constants/keys';

import { Calculator } from './Calculator';
import {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  SubtractCommand,
} from './commands';
import { resultFormatter } from './formatter';
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
  return resultFormatter(equationSolver(equation, 0));
};

const equationSolver = (equation: string, currentIndex: number): number => {
  const calculator = new Calculator();
  let currentNumber: number | string = '';
  let sign = '+';

  equation = equation.replace(/(?<=[\d)])\(/g, '*('); // 2(3+2) => 2*(3+2)
  equation = equation.replace(/\)(?=[\d()])/g, ')*'); // (1+2)2 => (1+2)*2

  for (let index = currentIndex; index < equation.length; index++) {
    if (isNumeric(equation[index])) {
      currentNumber += equation[index];
    }

    if (equation[index] === keys[16]) {
      currentNumber = equationSolver(equation, index + 1);
      index = findNewIndexAfterBracket(equation, index);
    }

    if (!isNumeric(equation[index]) || index == equation.length - 1) {
      const int = +currentNumber;

      switch (sign) {
        case keys[10]:
          calculator.executeCommand(new AddCommand(int));
          break;
        case keys[5]:
          calculator.executeCommand(new SubtractCommand(int));
          break;
        case keys[4]:
          calculator.executeCommand(new MultiplyCommand(int));
          break;
        case keys[9]:
          calculator.executeCommand(new DivideCommand(int));
          break;
      }

      sign = equation[index];
      currentNumber = '';
    }

    if (equation[index] === keys[18]) {
      return calculator.result();
    }
  }
  return calculator.result();
};
