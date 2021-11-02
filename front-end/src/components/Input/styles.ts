import { transparentize } from 'polished'
import styled from 'styled-components'

interface ContentIconProps {
  isActive?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p.error {
    cursor: auto;
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;
    color: ${(props) => transparentize(0.2, props.theme.colors.primary)};
  }

  & + div {
    margin-top: 0.8rem;
  }
`

export const Content = styled.div`
  padding: 0rem 2rem;
  height: 64px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.white};
  border: 0.1rem solid ${(props) => props.theme.colors.white300};

  svg {
    color: ${(props) => props.theme.colors.grey400};
  }

  div.password {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      position: absolute;
      cursor: pointer;
    }
  }
`

export const ContentIcon = styled.div<ContentIconProps>`
  padding: 0 2rem 0 0;
  border-right: 0.1rem solid ${(props) => props.theme.colors.white300};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) =>
      props.isActive ? props.theme.colors.primary : props.theme.colors.grey400};
  }
`

export const ContentInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 0.6rem 0 2rem;

  label {
    position: absolute;
    z-index: 9;
    margin-top: 1rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.grey50};
  }

  input {
    margin: auto 0;
    outline: 0;
    border: 0;
    color: ${(props) => props.theme.colors.grey700};

    &::placeholder {
      color: ${(props) => props.theme.colors.grey50};
    }
  }
`
