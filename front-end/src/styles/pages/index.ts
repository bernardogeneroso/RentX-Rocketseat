import { animated } from 'react-spring'
import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  flex: 1;
  background: ${(props) => props.theme.colors.black100};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ContainerResumeRentX = styled(animated.div)`
  max-width: 420px;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;

  div.content {
    h1 {
      margin-bottom: 3.2rem;
      font-weight: 600;
      font-size: 5.4rem;
      line-height: 5.4rem;
    }

    span {
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
    }
  }

  @media only screen and (max-width: 570px) {
    align-items: center;
    text-align: center;
  }
`

export const ContainerCarMostRented = styled.div`
  padding: 2rem;
  position: relative;

  @media only screen and (max-width: 570px) {
    display: none;
  }
`

export const ContentCar = styled(animated.div)`
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;

  svg.car-most-popular {
    width: 100%;
  }
`
