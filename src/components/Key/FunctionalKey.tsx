import React from 'react';

import { Key } from './styles';
import { KeyProps } from './types';

const FunctionalKey: React.FC<KeyProps> = ({ children, handleClick }) => {
  return (
    <Key onClick={handleClick} data-cy={children}>
      {children}
    </Key>
  );
};

export default FunctionalKey;
