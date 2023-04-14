import styled, { css } from 'styled-components';

export const ArrowDown = css`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 20px;
    top: 40%;
    transform: translateY(-50%) rotate(45deg);
    width: 6px;
    height: 6px;
    border-right: 2px solid ${(props): string => props.theme.fontColor};
    border-bottom: 2px solid ${(props): string => props.theme.fontColor};
  }
`;

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props): string => props.theme.backgroundColor};
`;

export const CalculatorPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'hd hd hd hd'
    '. mn mn sd';
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 70px 1fr;
  justify-items: center;

  @media (max-width: 700px) {
    grid-template-areas:
      'hd'
      'mn'
      '.'
      'sd';
    grid-template-columns: 1fr;
    grid-template-rows: 70px 400px 40px 1fr;
  }
`;

export const StyledButton = styled.button`
  border: 1px solid ${(props): string => props.theme.mainColor};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props): string => props.theme.buttonColor};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  align-items: center;

  &:hover {
    transition: 0.2s;
    filter: brightness(88%);
    cursor: pointer;
  }

  &:active {
    transition: 0.2s;
    filter: brightness(95%);
    cursor: pointer;
  }
`;

export const SettingsButton = styled(StyledButton)`
  padding-left: 20px;
  width: 200px;
  height: 40px;
`;

export const SettingsPageContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  color: ${(props) => props.theme.fontColor};
`;
