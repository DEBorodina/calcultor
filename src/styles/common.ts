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
    border-right: 2px solid ${(props): string => props.theme.mainColor};
    border-bottom: 2px solid ${(props): string => props.theme.mainColor};
  }
`;

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props): string => props.theme.backgroundColor};
`;
