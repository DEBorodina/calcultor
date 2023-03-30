/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components';

export const StyledHeader = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: hd;
  background-color: ${(props): string => props.theme.mainColor};
  width: 100%;
  height: 70px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const Title = styled.h1`
  color: ${(props): string => props.theme.backgroundColor};
  opacity: 0.9;
  font-weight: 300;
`;
