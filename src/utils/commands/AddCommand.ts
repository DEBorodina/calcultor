export default class {
  valueToAdd: number;
  constructor(valueToAdd: number) {
    if (valueToAdd < 2 ** 53 - 1) this.valueToAdd = valueToAdd;
    else throw Error('Too big numbers');
  }

  execute(numbers: number[]): number[] {
    numbers.push(this.valueToAdd);
    return numbers;
  }
}
