import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ContainerAboutCar = styled(animated.div)`
  height: 320px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: row;
  }
`

export const ContainerInfo = styled.div`
  position: relative;
  margin-top: 2.8rem;
  height: 100%;
`
