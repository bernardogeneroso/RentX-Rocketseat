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

  div.modalFilterBetweenDatesContent {
    padding: 4rem;
  }

  @media screen and (max-width: 751px) {
    div.modalFilterBetweenDatesContent {
      padding: 2rem;
    }
  }

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${(props) => props.theme.colors.primary};

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 4px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${(props) => props.theme.colors.primary}, 0 0 5px ${(
  props
) => props.theme.colors.primary};
    opacity: 1;

    transform: rotate(3deg) translate(0px, -4px);
  }

  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${(props) => props.theme.colors.primary};
    border-left-color: ${(props) => props.theme.colors.primary};
    border-radius: 50%;

    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
