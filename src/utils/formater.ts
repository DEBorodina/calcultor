export const formatToPrint = (number: number): string => {
  let stringNumber = String(number.toFixed(3));
  stringNumber = stringNumber.replace(/0*$/, '');
  stringNumber = stringNumber.replace(/\.*$/, '');
  return stringNumber;
};
