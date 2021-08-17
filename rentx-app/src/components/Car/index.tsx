import React, { useState } from 'react'
// @ts-ignore
import { FlatListSlider } from 'react-native-flatlist-slider'

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
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native'

interface CarProps {
  car: Cars
}

export function Car({ car }: CarProps) {
  const carImages = car.images.map((item) => ({
    image: item,
  }))

  const [dotIndexFlatListSlider, setDotIndexFlatListSlider] = useState(0)

  const handleFlatListSliderIndex = (number: number) => {
    setDotIndexFlatListSlider(number)
  }

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
        <FlatListSlider
          data={carImages}
          indicator={false}
          onChangeFlatlistSlider={handleFlatListSliderIndex}
        />
      </Content>
      <Footer>
        <CarFuel>
          {car.fuel === 'electric' ? <Electric /> : <Gasoline />}
        </CarFuel>

        <ContainerSlider>
          {carImages.map((item, index) => (
            <Dot key={index} active={dotIndexFlatListSlider === index} />
          ))}
        </ContainerSlider>
      </Footer>
    </Container>
  )
}
