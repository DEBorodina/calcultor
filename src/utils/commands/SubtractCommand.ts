export default class {
  valueToSubtract: number;
  constructor(valueToSubtract: number) {
    if (valueToSubtract < 2 ** 53 - 1) this.valueToSubtract = valueToSubtract;
    else throw Error('Too big numbers');
  }
  execute(numbers: number[]): number[] {
    numbers.push(-this.valueToSubtract);
    return numbers;
  }
}
