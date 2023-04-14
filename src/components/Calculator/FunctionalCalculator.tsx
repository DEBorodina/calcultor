import { useState } from 'react';

import FunctionalDisplay from '@/components/Display/FunctionalDisplay';
import FunctionalKeypad from '@/components/Keypad/FunctionalKeypad';
import { useTypedDispatch } from '@/hooks/';
import { addToFunctionalHistory } from '@/store/actions/historyActionCreators';
import { getErrorMessage } from '@/utils/errorsHelper';
import { intermediateFormatter } from '@/utils/formatter';
import { getResult } from '@/utils/solver';
import { finalValidator, intermediateValidator } from '@/utils/validator';

import { Container } from './styles';

export const MAX_LENGTH = 20;

const FunctionalCalculator: React.FC = () => {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');
  const [errors, setErrors] = useState('');

  const dispatch = useTypedDispatch();

  const handleKeyPress = (key: string): void => {
    let newEquation: string;

    if (errors) {
      newEquation = equation + key;
      if (intermediateValidator(newEquation)) setErrors('');
    } else if (result) {
      newEquation = result + key;
      if (intermediateValidator(newEquation)) setResult('');
    } else {
      newEquation = equation + key;
    }

    if (newEquation.length <= MAX_LENGTH && intermediateValidator(newEquation))
      setEquation(intermediateFormatter(newEquation));
  };

  const handleEqualPress = (): void => {
    if (equation != '') {
      try {
        finalValidator(equation);

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
