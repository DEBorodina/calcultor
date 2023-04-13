import styled from 'styled-components';

export const Container = styled.div`
  grid-area: mn;
  border: 2px solid ${(props): string => props.theme.mainColor};
  border-radius: 30px;
  height: 500px;
  max-width: 480px;
  width: 90%;
  padding: 10px;
  margin-top: 20px;
  @media (max-width: 700px) {
    margin-top: 20px;
    height: 400px;
  }
`;
