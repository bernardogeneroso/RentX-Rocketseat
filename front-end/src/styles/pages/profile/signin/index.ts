import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

import { ContainerCarMostRented as CarMostRented } from '../../../../styles/pages'

interface ContentProps {
  reverseCars?: boolean
}

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
    grid-template-rows: 80px 80px 1fr;

    grid-template-areas:
      'header header header header'
      'menu menu menu menu'
      'content content content content'
      'content content content content';
  }
`

export const Content = styled.div<ContentProps>`
  grid-area: content;
  display: grid;
  gap: 6rem;
  grid-template-columns: 1fr 500px;
  grid-template-rows: 1fr;
  padding: 1.8rem 11.6rem;
  background-color: ${(props) => props.theme.colors.grey25};

  ${(props) =>
    props.reverseCars
      ? css`
          grid-template-columns: 500px 1fr;
          grid-template-areas: 'signin carMostRented';
        `
      : css`
          grid-template-columns: 1fr 500px;
          grid-template-areas: 'carMostRented signin';
        `}

  @media screen and (max-width: 1310px) {
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

  @media screen and (max-width: 1310px) {
    display: none;
  }
`

export const CarBows = styled(animated.div)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
