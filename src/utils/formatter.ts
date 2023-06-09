export const intermediateFormatter = (equation: string): string => {
  equation = equation.replace(/(?<=[+*\/-])0(?=\d)|^0(?=\d)/, '');
  return equation;
};

export const resultFormatter = (number: number): string => {
  let stringNumber = String(number.toFixed(3));
  stringNumber = stringNumber.replace(/0*$/, '');
  stringNumber = stringNumber.replace(/\.*$/, '');
  return stringNumber;
};
