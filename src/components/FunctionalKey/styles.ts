import styled from 'styled-components';

export const Key = styled.button`
  width: 80px;
  height: 80px;
  border: 1px solid ${(props): string => props.theme.mainColor};
  background-color: ${(props): string => props.theme.buttonColor};
  border-radius: 10px;
  font-size: 36px;
  font-weight: 100;
   color:${(props) => props.theme.fontColor}
}
`;
