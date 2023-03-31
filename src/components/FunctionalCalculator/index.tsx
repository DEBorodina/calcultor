import React, { useState } from 'react';
import { Container } from './styles';
import FunctionalDisplay from '@/components/FunctionalDisplay';
import FunctionalKeypad from '@/components/FunctionalKeypad';
import { getTheResult } from '@/utils/solver';
import { validateEquation } from '@/utils/validator';

const getErrorMessage = (e: unknown): string => {
  let message = '';
  if (e instanceof Error) message = e.message;
  else message = String(e);
  return message;
};

const FunctionalCalculator: React.FC = () => {
  const [equation, setEquation] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleKeyPress = (key: string): void => {
    if (result) {
      setEquation('');
      setResult('');
    }
    if ((equation + key).length <= 20)
      setEquation((equation) => equation + key);
  };

  const handleEqualPress = (): void => {
    try {
      validateEquation(equation);
      const resValue: string = getTheResult(equation);
      setResult('=' + resValue);
    } catch (e) {
      setResult(getErrorMessage(e));
    }
  };

  const handleCPress = (): void => {
    if (equation.length > 0) {
      setEquation(equation.slice(0, equation.length - 1));
      setResult('');
    }
  };

  const handleCEPress = (): void => {
    setResult('');
    setEquation('');
  };

  return (
    <Container>
      <FunctionalDisplay
        equation={equation}
        result={result}
      ></FunctionalDisplay>
      <FunctionalKeypad
        handleCEPress={handleCEPress}
        handleKeyPress={handleKeyPress}
        handleEqualPress={handleEqualPress}
        handleCPress={handleCPress}
      />
    </Container>
  );
};

export default FunctionalCalculator;
