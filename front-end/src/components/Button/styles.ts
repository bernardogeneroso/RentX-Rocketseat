import styled, { css } from 'styled-components'
import { lighten, shade } from 'polished'

export const Container = styled.button`
  padding: 2.9rem 8rem;
  border: 0;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => shade(0.2, props.theme.colors.primary)};
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background-color: ${(props) => lighten(0.2, props.theme.colors.primary)};
    `}
`
