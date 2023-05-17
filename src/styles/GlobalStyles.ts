import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -ms-overflow-style: none;
  }


  *::-webkit-scrollbar{
    display: none;
  }


  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    outline: none;
    cursor: pointer;
  }


  a:hover, a:visited, a:link, a:active, a:focus
  {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }




`;

export default GlobalStyles;
