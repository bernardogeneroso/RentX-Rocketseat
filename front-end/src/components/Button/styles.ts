import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface ContainerProps {
  backgroundColor: string
  reverse: boolean
}

export const Container = styled.button<ContainerProps>`
  padding: 2.9rem 8rem;
  border: 0;
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  font-weight: 500;

  transition: background-color opacity 0.2s;

  &:hover {
    background-color: ${(props) =>
      shade(0.1, props.backgroundColor)} !important;
  }

  ${(props) =>
    props.reverse &&
    css`
      background-color: transparent !important;
      color: ${(props) => props.theme.colors.grey700};
      border: 0.1rem solid ${(props) => props.theme.colors.white400};

      &:hover {
        background-color: unset !important;
        opacity: 0.9;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      filter: brightness(0.9);
    `}
`
