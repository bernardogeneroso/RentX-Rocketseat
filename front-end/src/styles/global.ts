import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  #__next {
    height: 100vh;
  }

  body {
    background: #f1f1f1;
    color: #47474D;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 500 1.6rem 'Inter', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  span {
    font: 400 1.6rem 'Archivo', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
