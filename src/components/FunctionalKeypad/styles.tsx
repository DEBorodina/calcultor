import styled from 'styled-components';

export const KeyPad = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: grid;
  padding-top: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-items: center;
`;
