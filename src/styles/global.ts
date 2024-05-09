import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  button {
    cursor: pointer;
    border: 0;
  }

  ul {
    list-style: none;
  }

  input {
    outline: 0;
  }

  a {
  text-decoration: none;
}
`;
