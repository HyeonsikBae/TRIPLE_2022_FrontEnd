import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
