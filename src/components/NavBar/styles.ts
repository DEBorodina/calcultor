import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  width: 35%;
  min-width: 200px;
  @media (max-width: 280px) {
    flex-direction: column;
    min-width: 100px;
  }
`;
