import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Dispatch } from 'redux';

import FunctionalDisplay from '@/components/Display/FunctionalDisplay';
import FunctionalKeypad from '@/components/Keypad/FunctionalKeypad';
import { addToFunctionalHistory } from '@/store/actions/historyActionCreators';
import { AddToFunctionalHistoryAction } from '@/store/actions/types';
import { intermediateFormater } from '@/utils/formater';
import { getResult } from '@/utils/solver';
import { intermediateValidator, validateEquation } from '@/utils/validator';

import { Container } from './styles';

export const MAX_LENGHT = 20;

export const getErrorMessage = (e: unknown): string => {
  let message = '';
  if (e instanceof Error) message = e.message;
  else message = String(e);
  return message;
};

const FunctionalCalculator: React.FC = () => {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');
  const [errors, setErrors] = useState('');

  const dispatch = useDispatch<Dispatch<AddToFunctionalHistoryAction>>();

  const handleKeyPress = (key: string): void => {
    let newEquation: string;

    if (errors) {
      newEquation = key;
      if (intermediateValidator(newEquation)) setErrors('');
    } else if (result) {
      newEquation = result + key;
      if (intermediateValidator(newEquation)) setResult('');
    } else {
      newEquation = equation + key;
    }

    if (newEquation.length <= MAX_LENGHT && intermediateValidator(newEquation))
      setEquation(intermediateFormater(newEquation));
  };

  const handleEqualPress = (): void => {
    if (equation != '') {
      try {
        validateEquation(equation);
        const resultValue: string = getResult(equation);
        setResult(resultValue);
        dispatch(addToFunctionalHistory(equation + '=' + resultValue));
      } catch (e) {
        setErrors(getErrorMessage(e));
      }
    }
  };

  const handleCPress = (): void => {
    setErrors('');

    if (!errors && !result && equation.length > 0) {
      setEquation(equation.slice(0, equation.length - 1));
    } else {
      setResult('');
    }
  };

  const handleCEPress = (): void => {
    setErrors('');
    setResult('');
    setEquation('');
  };

  return (
    <Container>
      <FunctionalDisplay
        equation={equation}
        result={result}
        errors={errors}
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
