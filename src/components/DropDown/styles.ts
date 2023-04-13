import styled from 'styled-components';

import { ArrowDown, SettingsButton } from '@/styles/common';

import { DropDownButtonProps } from './types';

export const Container = styled.div`
  margin-top: 40px;
  height: 120px;
`;

export const Label = styled.p`
  font-size: 16px;
`;

export const Menu = styled.div`
  position: relative;
`;

export const DropDownButton = styled(SettingsButton)<DropDownButtonProps>`
  position: relative;
  margin-top: 10px;
  margin-bottom: 40px;
  z-index: 2;
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? 0 : 5)};
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? 0 : 5)};
  ${ArrowDown}
`;

export const Options = styled.div`
  transition: 0.1s;
  background-color: ${(props): string => props.theme.buttonColor};
  position: absolute;
  z-index: 1;
  top: 38px;
  left: 0;
  width: 200px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid ${(props): string => props.theme.mainColor};
  overflow: hidden;

  &:hover {
    transition: 0.2s;
    filter: brightness(88%);
    cursor: pointer;
  }

  &:active {
    transition: 0.2s;
    filter: brightness(95%);
    cursor: pointer;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  border-top: 1px solid ${(props): string => props.theme.mainColor};
`;
