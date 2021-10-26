import styled from 'styled-components'
import { animated } from 'react-spring'

import { ContainerCarMostRented as CarMostRented } from '../../../../styles/pages'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'menu header header header'
    'menu content content content'
    'menu content content content'
    'menu content content content';

  @media screen and (max-width: 535px) {
    grid-template-columns: 1fr;

    grid-template-areas:
      'header header header header'
      'menu menu menu menu'
      'content content content content'
      'content content content content';
  }
`

export const Content = styled.div`
  grid-area: content;

  display: grid;
  gap: 6rem;
  grid-template-columns: 1fr 460px;
  grid-template-rows: 1fr;
  grid-template-areas: 'carMostRented signin';

  @media screen and (max-width: 1038px) {
    display: flex;
    justify-content: center;
    align-items: center;

    grid-template-columns: 1fr;
    grid-template-areas: 'signin';
  }
`

export const ContainerCarMostRented = styled(CarMostRented)`
  grid-area: carMostRented;
  margin: 2rem;

  @media screen and (max-width: 1038px) {
    display: none;
  }
`

export const CarBows = styled(animated.div)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
