import React from 'react';
import { Key } from './styles';

export interface KeyProps {
  children: string;
  handleClick: () => void;
}

const FunctionalKey: React.FC<KeyProps> = ({ children, handleClick }) => {
  return (
    <Key width={80} height={80} onClick={handleClick} data-cy={children}>
      {children}
    </Key>
  );
};

export default FunctionalKey;
