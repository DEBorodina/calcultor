import React from 'react';
import { Key } from './styles';

export interface FunctionalKeyProps {
  children: string;
}

const FunctionalKey: React.FC<FunctionalKeyProps> = ({ children }) => {
  return <Key>{children}</Key>;
};

export default FunctionalKey;
