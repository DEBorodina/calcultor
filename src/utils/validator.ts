export const isNumeric = (num: string): boolean => {
  return Number.isInteger(+num) || num === '.';
};

export const validateEquation = (equation: string): string | never => {
  const brackets: string[] = [];
  let currentNumber = '';

  if (equation.length === 1 && '*/-+.()'.includes(equation)) {
    throw new Error('Invalid input');
  }

  if ('*/'.includes(equation[0])) {
    throw new Error('Invalid input');
  }

  if ('*/-+.'.includes(equation[equation.length - 1])) {
    throw new Error('Invalid input');
  }

  for (let index = 0; index < equation.length; index++) {
    if (isNumeric(equation[index])) {
      if (equation[index] === '.' && currentNumber.includes('.'))
        throw new Error('Invalid input');
      currentNumber += equation[index];
    } else {
      if (equation[index - 1] === '.') throw new Error('Invalid input');
      currentNumber = '';
    }

    if (
      '+-/*'.includes(equation[index]) &&
      '+-/*'.includes(equation[index + 1])
    ) {
      throw new Error('Invalid input');
    }

    if (equation[index] === '(') {
      if ('+/*'.includes(equation[index + 1])) throw new Error('Invalid input');
      brackets.push('(');
    }

    if (equation[index] === ')') {
      if ('+/*-'.includes(equation[index - 1]))
        throw new Error('Invalid input');

      const bracket = brackets.pop();
      if (bracket !== '(') throw new Error('Invalid input');
    }

    if (equation[index] === '(' && equation[index + 1] === ')') {
      throw new Error('Invalid input');
    }
  }

  if (brackets.length > 0) throw new Error('Invalid input');
  return equation;
};
