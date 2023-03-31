import React from 'react';
import { CurrentData, Display, PreviousData } from './styles';

export interface FunctionalDisplayProps {
  result: string;
  equation: string;
}

const FunctionalDisplay: React.FC<FunctionalDisplayProps> = ({
  result,
  equation,
}) => {
  return (
    <Display>
      <PreviousData>{result ? equation : ''}</PreviousData>
      <CurrentData>{result ? result : equation ? equation : 0}</CurrentData>
    </Display>
  );
};

export default FunctionalDisplay;
