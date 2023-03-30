import styled from 'styled-components';

export const Display = styled.div`
  width: 95%;
  border-bottom: 2px solid ${(props): string => props.theme.mainColor};
  margin: 0 auto;
  padding: 10px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-around;
`;

export const PreviousData = styled.p`
  font-size: 16px;
`;

export const CurrentData = styled.p`
  font-size: 32px;
`;
