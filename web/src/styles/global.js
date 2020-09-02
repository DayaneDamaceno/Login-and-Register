import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;

  }
  html, body, #root{
    min-height: 100%;
    overflow: hidden;
  }
  #root{
    max-width: 100%;
    height: 100vh;
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
