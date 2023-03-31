import React from 'react';
import { KeyPad } from './styles';
import FunctionalKey from '@/components/FunctionalKey';
import { keys } from '@/constants/keys';

export interface FunctionalKeypadProps {
  handleKeyPress: (key: string) => void;
  handleEqualPress: () => void;
  handleCPress: () => void;
  handleCEPress: () => void;
}

const FunctionalKeypad: React.FC<FunctionalKeypadProps> = ({
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
              <FunctionalKey key={key} handleClick={handleEqualPress}>
                {key}
              </FunctionalKey>
            );
          case 'C':
            return (
              <FunctionalKey key={key} handleClick={handleCPress}>
                {key}
              </FunctionalKey>
            );
          case 'CE':
            return (
              <FunctionalKey key={key} handleClick={handleCEPress}>
                {key}
              </FunctionalKey>
            );
          default:
            return (
              <FunctionalKey key={key} handleClick={handleClick(key)}>
                {key}
              </FunctionalKey>
            );
        }
      })}
    </KeyPad>
  );
};

export default FunctionalKeypad;
