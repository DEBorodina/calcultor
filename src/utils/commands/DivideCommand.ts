export default class {
  valueToDivide: number;
  constructor(valueToDivide: number) {
    if (valueToDivide < 2 ** 53 - 1) this.valueToDivide = valueToDivide;
    else throw Error('Too big numbers');
    if (valueToDivide === 0) throw new Error('Deviding by zero');
  }

  execute(numbers: number[]): number[] {
    const previousNumber: number | undefined = numbers.pop();
    if (previousNumber) {
      numbers.push(previousNumber / this.valueToDivide);
    }
    return numbers;
  }
}
