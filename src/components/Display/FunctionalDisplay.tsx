import { CurrentData, Display, PreviousData } from './styles';
import { DisplayProps } from './types';

const FunctionalDisplay: React.FC<DisplayProps> = ({
  result,
  equation,
  errors,
}) => {
  const resultToPrint = result ? '=' + result : result;

  return (
    <Display>
      <PreviousData>{result || errors ? equation : ''}</PreviousData>
      <CurrentData data-cy="current-display">
        {errors || resultToPrint || equation || ''}
      </CurrentData>
    </Display>
  );
};

export default FunctionalDisplay;
