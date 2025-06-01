import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
    color: #2c3e50;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: #3498db;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;