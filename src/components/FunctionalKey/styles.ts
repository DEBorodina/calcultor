import styled from 'styled-components';

export const Key = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid ${(props): string => props.theme.mainColor};
  background-color: ${(props): string => props.theme.buttonColor};
  border-radius: 10px;
  font-size: 26px;
  font-weight: 100;
   color:${(props) => props.theme.fontColor}
}
`;
