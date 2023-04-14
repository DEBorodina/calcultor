import { Component } from 'react';

import Key from '@/components/Key/ClassKey';
import { keys } from '@/constants/keys';

import { KeyPad } from './styles';
import { KeypadProps } from './types';

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
            case keys[14]:
              return (
                <Key key={key} handleClick={this.props.handleEqualPress}>
                  {key}
                </Key>
              );
            case keys[0]:
              return (
                <Key key={key} handleClick={this.props.handleCPress}>
                  {key}
                </Key>
              );
            case keys[19]:
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
