import styled from 'styled-components'
import { animated } from 'react-spring'
import { shade } from 'polished'

export const Container = styled.div`
  position: relative;
`

export const Input = styled.input`
  z-index: 9;
  width: 100%;
  padding: 2.2rem 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white300};
  color: ${(props) => props.theme.colors.grey700};
  font-weight: 400;
  font-size: 1.6rem;
  outline: 0;

  &::placeholder {
    color: ${(props) => props.theme.colors.grey50};
  }
`

export const ContainerSearch = styled(animated.div)`
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 4rem;
  border: 1px solid ${(props) => props.theme.colors.white300};
  border-top: unset;
  background-color: ${(props) => props.theme.colors.white};
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

    transition: color 0.2s;

    &:hover {
      color: ${(props) => shade(0.1, props.theme.colors.primary)};
    }
  }
`
