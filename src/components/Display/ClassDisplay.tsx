import { Component } from 'react';

import { CurrentData, Display, PreviousData } from './styles';
import { DisplayProps } from './types';

export default class ClassDisplay extends Component<DisplayProps> {
  constructor(props: DisplayProps) {
    super(props);
  }

  render() {
    const { result, errors, equation } = this.props;
    const resultToPrint = result ? '=' + result : result;

    return (
      <Display>
        <PreviousData>{result || errors ? equation : ''}</PreviousData>
        <CurrentData data-cy="current-display">
          {errors || resultToPrint || equation || ''}
        </CurrentData>
      </Display>
    );
  }
}
