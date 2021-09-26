import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

interface ContainerProps {
  isActive?: boolean
}

export const Container = styled(animated.div)<ContainerProps>`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  border-left-width: 0.3rem;
  border-left-style: solid;

  transition: background-color 0.2s;

  svg {
    fill: ${(props) => props.theme.colors.grey400};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.black};
  }

  ${(props) =>
    props.isActive &&
    css`
      svg {
        fill: ${(props) => props.theme.colors.white};
      }
    `}
`
