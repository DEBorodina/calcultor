import React from 'react';
import { KeyPad } from './styles';
import Key from '@/components/Key/FunctionalKey';
import { keys } from '@/constants/keys';

export interface KeypadProps {
  handleKeyPress: (key: string) => void;
  handleEqualPress: () => void;
  handleCPress: () => void;
  handleCEPress: () => void;
}

const FunctionalKeypad: React.FC<KeypadProps> = ({
  handleEqualPress,
  handleKeyPress,
  handleCPress,
  handleCEPress,
}) => {
  const handleClick =
    (key: string): (() => void) =>
    () => {
      handleKeyPress(key);
    };

  return (
    <KeyPad>
      {keys.map((key) => {
        switch (key) {
          case '=':
            return (
              <Key key={key} handleClick={handleEqualPress}>
                {key}
              </Key>
            );
          case 'C':
            return (
              <Key key={key} handleClick={handleCPress}>
                {key}
              </Key>
            );
          case 'CE':
            return (
              <Key key={key} handleClick={handleCEPress}>
                {key}
              </Key>
            );
          default:
            return (
              <Key key={key} handleClick={handleClick(key)}>
                {key}
              </Key>
            );
        }
      })}
    </KeyPad>
  );
};

export default FunctionalKeypad;