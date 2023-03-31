import React from 'react';
import { Key } from './styles';

export interface FunctionalKeyProps {
  children: string;
  handleClick: () => void;
}

const FunctionalKey: React.FC<FunctionalKeyProps> = ({
  children,
  handleClick,
}) => {
  return <Key onClick={handleClick}>{children}</Key>;
};

export default FunctionalKey;
