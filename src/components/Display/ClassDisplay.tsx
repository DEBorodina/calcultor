import { Component } from 'react';

import { CurrentData, Display, PreviousData } from './styles';
import { DisplayProps } from './types';

export default class ClassDisplay extends Component<DisplayProps> {
  constructor(props: DisplayProps) {
    super(props);
  }

  render() {
    const resultToPrint = this.props.result
      ? '=' + this.props.result
      : this.props.result;

    return (
      <Display>
        <PreviousData>
          {this.props.result || this.props.errors ? this.props.equation : ''}
        </PreviousData>
        <CurrentData data-cy="current-display">
          {this.props.errors || resultToPrint || this.props.equation || 0}
        </CurrentData>
      </Display>
    );
  }
}
