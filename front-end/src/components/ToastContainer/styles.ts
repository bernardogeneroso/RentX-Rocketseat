import styled from 'styled-components'

interface ContainerProps {
  isVisible: boolean
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  right: 0;
  top: 0;
  padding: 2rem;
  overflow: hidden;
  pointer-events: ${(props) => (props.isVisible ? 'auto' : 'none')};
  z-index: 9999;
`
