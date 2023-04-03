import { Component } from 'react';
import { Key } from './styles';
import { KeyProps } from './FunctionalKey';

export default class ClassKey extends Component<KeyProps> {
  constructor(props: KeyProps) {
    super(props);
  }
  render() {
    return <Key onClick={this.props.handleClick}>{this.props.children}</Key>;
  }
}