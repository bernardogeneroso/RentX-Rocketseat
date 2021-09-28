import styled from 'styled-components'
import { animated } from 'react-spring'

interface ContainerProps {
  isActive?: boolean
}

export const Container = styled(animated.div)<ContainerProps>`
  cursor: pointer;
  flex: 1;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 1.4rem;
  font-size: 1.4rem;
  font-weight: 600;
`
