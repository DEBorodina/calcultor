import React from 'react';
import { CurrentData, Display, PreviousData } from './styles';

const FunctionalDisplay: React.FC = () => {
  return (
    <Display>
      <PreviousData>3+4=</PreviousData>
      <CurrentData>7</CurrentData>
    </Display>
  );
};

export default FunctionalDisplay;
