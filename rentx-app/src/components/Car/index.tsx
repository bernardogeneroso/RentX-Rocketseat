import React from 'react'

import { Cars } from '../../utils/cars'
import { formatCurrent } from '../../utils/formatCurrency'

import Electric from '../../assets/electric.svg'
import Gasoline from '../../assets/gasoline.svg'

import { Dot } from '../../pages/Auth/OnBoard/styles'
import {
  Container,
  Header,
  CarDetails,
  CarText,
  CarModel,
  CarPrice,
  Content,
  CarImage,
  Footer,
  CarFuel,
  ContainerSlider,
} from './styles'

interface CarProps {
  car: Cars
}

export function Car({ car }: CarProps) {
  const carImages = car.images

  return (
    <Container>
      <Header>
        <CarDetails>
          <CarText>{car.brand}</CarText>
          <CarModel>{car.model}</CarModel>
        </CarDetails>

        <CarDetails>
          <CarText>Per day</CarText>
          <CarPrice>
            {formatCurrent(car.price.per_day, 'pt-PT', car.price.currency)}
          </CarPrice>
        </CarDetails>
      </Header>
      <Content>
        <CarImage source={{ uri: carImages[0] }} resizeMode="contain" />
      </Content>
      <Footer>
        <CarFuel>
          {car.fuel === 'electric' ? <Electric /> : <Gasoline />}
        </CarFuel>

        <ContainerSlider>
          <Dot active />
          <Dot />
          <Dot />
          <Dot />
        </ContainerSlider>
      </Footer>
    </Container>
  )
}
