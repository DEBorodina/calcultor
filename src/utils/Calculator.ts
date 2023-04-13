import {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  SubtractCommand,
} from './commands';

export class Calculator {
  numbers: number[];

  constructor() {
    this.numbers = [];
  }

  executeCommand(
    command: AddCommand | SubtractCommand | DivideCommand | MultiplyCommand
  ) {
    this.numbers = command.execute(this.numbers);
  }

  result() {
    return this.numbers.reduce((sum, num) => {
      sum = sum + num;
      if (sum > 2 ** 53 - 1) {
        throw Error('Too big numbers');
      }
      return sum;
    }, 0);
  }
}
