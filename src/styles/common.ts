import styled, { css } from 'styled-components';

export const ArrowDown = css`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 20px;
    top: 40%;
    transform: translateY(-50%) rotate(45deg);
    width: 6px;
    height: 6px;
    border-right: 2px solid ${(props): string => props.theme.fontColor};
    border-bottom: 2px solid ${(props): string => props.theme.fontColor};
  }
`;

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props): string => props.theme.backgroundColor};
`;

export interface StyledButtonProps {
  width: number;
  height: number;
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props): number => props.width}px;
  height: ${(props): number => props.height}px;
  border: 1px solid ${(props): string => props.theme.mainColor};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props): string => props.theme.buttonColor};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 100;
  display: flex;
  align-items: center;
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

export const SettingsButton = styled(StyledButton)`
  padding-left: 20px;
`;
