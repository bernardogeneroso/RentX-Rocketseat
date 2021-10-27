import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  overflow-y: auto;
  overflow-x: hidden;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.white400};

  h3 {
    color: ${(props) => props.theme.colors.grey700};
    font-family: Archivo;
    font-weight: 600;
    font-size: 2.5rem;
  }

  svg {
    cursor: pointer;
    fill: ${(props) => props.theme.colors.grey50};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Content = styled.div`
  padding-top: 3.2rem;

  div.actions {
    button {
      margin-top: 3.2rem;
      width: 100%;
    }

    button:first-child {
      padding: 2.2rem 0;
    }
  }
`

export const ButtonClearData = styled.button`
  outline: 0;
  border: 0;
  background-color: transparent;
  color: ${(props) => props.theme.colors.grey50};

  transition: color 0.2s;

  &:hover {
    color: ${(props) => shade(0.1, props.theme.colors.grey50)};
  }
`
