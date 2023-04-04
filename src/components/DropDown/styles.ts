import styled from 'styled-components';
import SettingsButton from '../SettingsButton';
import { ArrowDown } from '@/styles/common';

export const Container = styled.div`
  margin-top: 40px;
  position: relative;
`;

export const Label = styled.p`
  color: #70707;
`;

export const Menu = styled.div`
  width: fit-content;
`;

export interface DropDownButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

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
  top: 65px;
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

export interface ItemProps {
  onClick: () => void;
}

export const Item = styled.div<ItemProps>`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top: 1px solid ${(props): string => props.theme.mainColor};
`;
