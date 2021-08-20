import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// @ts-ignore
import { FlatListSlider } from 'react-native-flatlist-slider'

import { Cars } from '../../../utils/cars'
import { formatCurrent } from '../../../utils/formatCurrency'

import Electric from '../../../assets/electric.svg'
import Gasoline from '../../../assets/gasoline.svg'

import { Dot } from '../../../pages/Auth/OnBoard/styles'
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

interface CarExtendedProps {
  car: Cars
}

export function CarExtended({ car }: CarExtendedProps) {
  const carImages = car.images.map((item) => ({
    image: item,
  }))

  const navigation = useNavigation()

  const [dotIndexFlatListSlider, setDotIndexFlatListSlider] = useState(0)

  function handleFlatListSliderIndex(number: number) {
    setDotIndexFlatListSlider(number)
  }

  function handleNavigateToDetails() {
    // @ts-ignore
    navigation.navigate('CarDetails')
  }

  return (
    <Container onPress={handleNavigateToDetails}>
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
