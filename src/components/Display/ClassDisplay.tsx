import { Component } from 'react';

import { CurrentData, Display, PreviousData } from './styles';
import { DisplayProps } from './FunctionalDisplay';

export default class ClassDisplay extends Component<DisplayProps> {
  constructor(props: DisplayProps) {
    super(props);
  }
  render() {
    return (
      <Display>
        <PreviousData>
          {this.props.result ? this.props.equation : ''}
        </PreviousData>
        <CurrentData data-cy="current-display">
          {this.props.result
            ? this.props.result
            : this.props.equation
            ? this.props.equation
            : 0}
        </CurrentData>
      </Display>
    );
  }
}
