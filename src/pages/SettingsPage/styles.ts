import styled from 'styled-components';
export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  color: ${(props) => props.theme.fontColor};
`;
