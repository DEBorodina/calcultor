import React from 'react';
import { Container } from './styles';
import FunctionalDisplay from '@/components/FunctionalDisplay';
import FunctionalKeypad from '@/components/FunctionalKeypad';

const FunctionalCalculator: React.FC = () => {
  return (
    <Container>
      <FunctionalDisplay></FunctionalDisplay>
      <FunctionalKeypad />
    </Container>
  );
};

export default FunctionalCalculator;
