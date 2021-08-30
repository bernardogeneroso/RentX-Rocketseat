import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// @ts-ignore
import { FlatListSlider } from 'react-native-flatlist-slider'

import { Fuel } from '../../Fuel'
import { CarsBetweenDates } from '../../../pages/App/TabMenu/Home'
import { formatCurrent } from '../../../utils/formatCurrency'

import { Dot } from '../../../pages/Auth/OnBoard/styles'
import {
  Container,
  Header,
  CarDetails,
  CarText,
  CarModel,
  CarPrice,
  Content,
  Footer,
  CarFuel,
  ContainerSlider,
} from './styles'

interface CarExtendedProps {
  car: CarsBetweenDates
}

export function CarExtended({ car }: CarExtendedProps) {
  let carImages: any[] = []

  car.carsImages.forEach((item, index) => {
    carImages.push(
      Object.assign({
        image: item.url,
        desc: index.toString(),
      })
    )
  })

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
          <CarPrice>{formatCurrent(car.pricePerDay, 'pt-PT', 'EUR')}</CarPrice>
        </CarDetails>
      </Header>
      <Content>
        {Object.assign(carImages).length !== 0 && (
          <FlatListSlider
            data={carImages}
            indicator={false}
            onChangeFlatlistSlider={handleFlatListSliderIndex}
          />
        )}
      </Content>
      <Footer>
        <CarFuel>
          <Fuel fuel={car.fuel} />
        </CarFuel>

        <ContainerSlider>
          {Object.assign(carImages).length !== 0 &&
            carImages.map((item, index) => (
              <Dot key={index} active={dotIndexFlatListSlider === index} />
            ))}
        </ContainerSlider>
      </Footer>
    </Container>
  )
}
