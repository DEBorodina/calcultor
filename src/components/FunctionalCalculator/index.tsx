import React, { useState } from 'react';
import { Container } from './styles';
import FunctionalDisplay from '@/components/FunctionalDisplay';
import FunctionalKeypad from '@/components/FunctionalKeypad';
import { getTheResult } from '@/utils/solver';
import { validateEquation } from '@/utils/validator';
import { useDispatch } from 'react-redux';
import { addToFunctionalHistory } from '@/store/actions/historyActionCreators';

const getErrorMessage = (e: unknown): string => {
  let message = '';
  if (e instanceof Error) message = e.message;
  else message = String(e);
  return message;
};

const FunctionalCalculator: React.FC = () => {
  const [equation, setEquation] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const dispatch = useDispatch();

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
      dispatch(addToFunctionalHistory(equation + '=' + resValue));
    } catch (e) {
      setResult(getErrorMessage(e));
    }
  };

  const handleCPress = (): void => {
    if (!result && equation.length > 0) {
      setEquation(equation.slice(0, equation.length - 1));
    } else {
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
