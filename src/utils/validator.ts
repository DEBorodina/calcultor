export const isNumeric = (num: string): boolean => {
  return Number.isInteger(+num) || num === '.';
};

export const intermediateValidator = (equation: string): boolean => {
  const brackets: string[] = [];
  let currentNumber = '';

  if ('*/+'.includes(equation[0])) {
    return false;
  }

  for (let index = 0; index < equation.length; index++) {
    if (isNumeric(equation[index])) {
      if (equation[index] === '.' && currentNumber.includes('.')) return false;
      currentNumber += equation[index];
    } else {
      if (equation[index - 1] === '.') return false;
      currentNumber = '';
    }

    if (
      '+-/*'.includes(equation[index]) &&
      '+-/*'.includes(equation[index + 1])
    ) {
      return false;
    }

    if (equation[index] === '(') {
      if ('+/*'.includes(equation[index + 1])) return false;
      brackets.push('(');
    }

    if (equation[index] === ')') {
      if ('+/*-'.includes(equation[index - 1])) return false;

      const bracket = brackets.pop();
      if (bracket !== '(') return false;
    }

    if (
      equation[index] === '(' &&
      (equation[index + 1] === ')' || equation[index + 2] === ')')
    ) {
      return false;
    }
  }

  return true;
};

export const finalValidator = (equation: string): boolean | never => {
  const brackets: string[] = [];

  if (equation.length === 1 && '*/-+.()'.includes(equation)) {
    throw new Error('Invalid input');
  }

  if ('*/-+.'.includes(equation[equation.length - 1])) {
    throw new Error('Invalid input');
  }

  for (let index = 0; index < equation.length; index++) {
    if (equation[index] === '(') {
      brackets.push('(');
    }

    if (equation[index] === ')') {
      const bracket = brackets.pop();
      if (bracket !== '(') throw new Error('Invalid input');
    }
  }

  if (brackets.length > 0) throw new Error('Invalid input');
  return true;
};
