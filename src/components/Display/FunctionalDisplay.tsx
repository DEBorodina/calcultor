import { CurrentData, Display, PreviousData } from './styles';
import { DisplayProps } from './types';

const FunctionalDisplay: React.FC<DisplayProps> = ({ result, equation }) => {
  return (
    <Display>
      <PreviousData>{result ? equation : ''}</PreviousData>
      <CurrentData data-cy="current-display">
        {result || equation || 0}
      </CurrentData>
    </Display>
  );
};

export default FunctionalDisplay;
