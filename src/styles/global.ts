import { createGlobalStyle } from "styled-components";
import { breakpoints } from '../constants/breakpoints';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Inter', sans-serif;
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
`
