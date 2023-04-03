import styled from 'styled-components';

export interface StyledSettingsButtonProps {
  onClick: () => void;
}

export const StyledSettingsButton = styled.button`
  width: 200px;
  height: 40px;
  border: 1px solid ${(props): string => props.theme.mainColor};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props): string => props.theme.buttonColor};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 100;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
