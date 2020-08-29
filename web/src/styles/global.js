import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;

  }
  html, body, #root{
    min-height: 100%;
  }
  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  body {
    background: #242E42;
    -webkit-font-smoothing: antialiased !important;
  }
  *, input, button {
    font-size: 14px;
    border:none;
    font-family: 'DM Sans', sans-serif;
  }
  button {
    cursor: pointer;
    font-weight: 500;
  }
  a{
    text-decoration: none;
    color: white;
  }
`;
