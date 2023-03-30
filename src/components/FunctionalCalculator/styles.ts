import styled from 'styled-components';

export const Container = styled.div`
  grid-area: mn;
  border: 2px solid ${(props): string => props.theme.mainColor};
  border-radius: 30px;
  height: 500px;
  max-width: 600px;
  width: 100%;
`;
