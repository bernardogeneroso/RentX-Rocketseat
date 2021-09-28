import styled, { css } from 'styled-components'
import { lighten, shade } from 'polished'

interface ContainerProps {
  backgroundColor: string
}

export const Container = styled.button<ContainerProps>`
  padding: 2.9rem 8rem;
  border: 0;
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      shade(0.2, props.backgroundColor)} !important;
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background-color: ${(props) => lighten(0.2, props.theme.colors.primary)};
    `}
`
