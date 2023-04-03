import { Component } from 'react';

import { KeyPad } from './styles';
import Key from '@/components/Key/ClassKey';
import { keys } from '@/constants/keys';
import { KeypadProps } from './FunctionalKeypad';

export default class ClassKeypad extends Component<KeypadProps> {
  constructor(props: KeypadProps) {
    super(props);
  }

  handleClick =
    (key: string): (() => void) =>
    () => {
      this.props.handleKeyPress(key);
    };

  render() {
    return (
      <KeyPad>
        {keys.map((key) => {
          switch (key) {
            case '=':
              return (
                <Key key={key} handleClick={this.props.handleEqualPress}>
                  {key}
                </Key>
              );
            case 'C':
              return (
                <Key key={key} handleClick={this.props.handleCPress}>
                  {key}
                </Key>
              );
            case 'CE':
              return (
                <Key key={key} handleClick={this.props.handleCEPress}>
                  {key}
                </Key>
              );
            default:
              return (
                <Key key={key} handleClick={this.handleClick(key)}>
                  {key}
                </Key>
              );
          }
        })}
      </KeyPad>
    );
  }
}
