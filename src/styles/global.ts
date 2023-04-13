import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 24px;
    @media (max-width: 540px) {
    font-size: 20px;
    }
    @media (max-width: 320px) {
    font-size: 16px;
    }
  }
`;
