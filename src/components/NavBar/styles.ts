import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  width: 35%;
  min-width: 380px;

  @media (max-width: 540px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    min-width: 180px;
  }

  @media (max-width: 320px) {
    min-width: 150px;
  }
`;
