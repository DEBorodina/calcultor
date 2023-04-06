import { CurrentData, Display, PreviousData } from './styles';

export interface DisplayProps {
  result: string;
  equation: string;
}

const FunctionalDisplay: React.FC<DisplayProps> = ({ result, equation }) => {
  return (
    <Display>
      <PreviousData>{result ? equation : ''}</PreviousData>
      <CurrentData data-cy="current-display">
        {result ? result : equation ? equation : 0}
      </CurrentData>
    </Display>
  );
};

export default FunctionalDisplay;
