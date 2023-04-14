export const isNumeric = (num: string): boolean => {
  return Number.isInteger(+num) || num === '.';
};

export const startsWithCorrectSymbol = (equation: string): boolean =>
  !'*/+'.includes(equation[0]);

export const endsWithCorrectSymbol = (equation: string): boolean => {
  return !'*/-+.'.includes(equation[equation.length - 1]);
};

export const hasTwoOperatorsInRow = (equation: string): boolean => {
  for (let i = 0; i < equation.length; i++) {
    if ('+-/*'.includes(equation[i]) && '+-/*'.includes(equation[i + 1])) {
      return true;
    }
  }
  return false;
};

export const correctBrackets = (
  equation: string,
  finished: boolean
): boolean => {
  const brackets = [];

  for (let i = 0; i < equation.length; i++) {
    if (equation[i] === '(') {
      if (!startsWithCorrectSymbol(equation.slice(i + 1))) return false;
      brackets.push('(');
    }

    if (equation[i] === ')') {
      if (!endsWithCorrectSymbol(equation.slice(0, i))) return false;
      const bracket = brackets.pop();
      if (bracket !== '(') return false;
    }

    if (
      equation[i] === '(' &&
      (equation[i + 1] === ')' || equation[i + 2] === ')')
    ) {
      return false;
    }
  }

  if (finished) {
    if (brackets.length > 0) return false;
  }

  return true;
};

export const correctDots = (equation: string): boolean => {
  let currentNumber = '';

  for (let i = 0; i < equation.length; i++) {
    if (isNumeric(equation[i])) {
      if (equation[i] === '.' && currentNumber.includes('.')) return false;
      currentNumber += equation[i];
    } else {
      if (equation[i - 1] === '.') return false;
      currentNumber = '';
    }
  }

  return true;
};

export const intermediateValidator = (equation: string): boolean => {
  if (!startsWithCorrectSymbol(equation)) return false;

  if (hasTwoOperatorsInRow(equation)) return false;

  if (!correctBrackets(equation, false)) return false;

  if (!correctDots(equation)) return false;

  return true;
};

export const finalValidator = (equation: string): boolean | never => {
  if (!endsWithCorrectSymbol(equation)) throw new Error('Invalid input');

  if (!correctBrackets(equation, true)) throw new Error('Invalid input');

  return true;
};
