import React from 'react';
import { Container } from './styles';
import FunctionalDisplay from '@/components/FunctionalDisplay';
import FunctionalKeypad from '@/components/FunctionalKeypad';

const FunctionalCalculator: React.FC = () => {
  // const [equation, setEquation] = useState<string>('');
  // const [result, setResult] = useState<string>('');

  return (
    <Container>
      <FunctionalDisplay equation={'1'} result={'1'}></FunctionalDisplay>
      <FunctionalKeypad />
    </Container>
  );
};

export default FunctionalCalculator;
