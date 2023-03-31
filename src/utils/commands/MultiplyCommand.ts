export default class {
  valueToMultiply: number;
  constructor(valueToMultiply: number) {
    if (valueToMultiply < 2 ** 53 - 1) this.valueToMultiply = valueToMultiply;
    else throw Error('Too big numbers');
  }

  execute(numbers: number[]): number[] {
    const previousNumber: number | undefined = numbers.pop();
    if (previousNumber) {
      numbers.push(this.valueToMultiply * previousNumber);
    }
    return numbers;
  }
}
