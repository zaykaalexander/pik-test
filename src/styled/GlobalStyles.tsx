import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Roboto", Arial, sans-serif;
  }
  
  #__next {
    width: 100vw;
    height: 100vh;
  }
`;
