import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  padding: 2.2rem 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white300};
  color: ${(props) => props.theme.colors.grey50};
  font-size: 1.6rem;
  outline: 0;
`

export const Content = styled.div`
  div.text {
    cursor: pointer;
    font-weight: 600;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.grey700};
    padding: 2rem 2.6rem;

    & + div {
      border-top: 0.1rem solid ${(props) => props.theme.colors.white300};
    }

    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => shade(0.05, props.theme.colors.white)};
    }
  }
`
