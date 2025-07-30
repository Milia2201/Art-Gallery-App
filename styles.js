import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: system-ui;
    width: 100vw;

    padding-bottom: 50px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
