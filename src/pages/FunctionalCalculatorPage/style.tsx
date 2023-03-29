import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'hd hd hd hd'
    '. mn mn sd';
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 70px 1fr;
  justify-items: center;
  align-items: center;
`;
