import { Component } from 'react';
import { Key } from './styles';
import { KeyProps } from './FunctionalKey';

export default class ClassKey extends Component<KeyProps> {
  constructor(props: KeyProps) {
    super(props);
  }
  render() {
    return (
      <Key
        width={80}
        height={80}
        onClick={this.props.handleClick}
        data-cy={this.props.children}
      >
        {this.props.children}
      </Key>
    );
  }
}
