import React from 'react';
import { Key } from './styles';

export interface KeyProps {
  children: string;
  handleClick: () => void;
}

const FunctionalKey: React.FC<KeyProps> = ({ children, handleClick }) => {
  return (
    <Key onClick={handleClick} data-cy={children}>
      {children}
    </Key>
  );
};

export default FunctionalKey;
