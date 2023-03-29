import React from 'react';
import { KeyPad } from './styles';
import FunctionalKey from '@/components/FunctionalKey';

const FunctionalKeypad: React.FC = () => {
  return (
    <KeyPad>
      <FunctionalKey>C</FunctionalKey>
      <FunctionalKey>7</FunctionalKey>
      <FunctionalKey>8</FunctionalKey>
      <FunctionalKey>9</FunctionalKey>
      <FunctionalKey>*</FunctionalKey>
      <FunctionalKey>-</FunctionalKey>
      <FunctionalKey>4</FunctionalKey>
      <FunctionalKey>5</FunctionalKey>
      <FunctionalKey>6</FunctionalKey>
      <FunctionalKey>\</FunctionalKey>
      <FunctionalKey>+</FunctionalKey>
      <FunctionalKey>1</FunctionalKey>
      <FunctionalKey>2</FunctionalKey>
      <FunctionalKey>3</FunctionalKey>
      <FunctionalKey>=</FunctionalKey>
      <FunctionalKey>.</FunctionalKey>
      <FunctionalKey>(</FunctionalKey>
      <FunctionalKey>0</FunctionalKey>
      <FunctionalKey>)</FunctionalKey>
      <FunctionalKey>CE</FunctionalKey>
    </KeyPad>
  );
};

export default FunctionalKeypad;
