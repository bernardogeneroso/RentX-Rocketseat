import React from 'react'

import { Cars } from '../../../utils/cars'
import { formatCurrent } from '../../../utils/formatCurrency'

import Electric from '../../../assets/electric.svg'
import Gasoline from '../../../assets/gasoline.svg'

import {
  Container,
  ContentInfo,
  Details,
  CarDetails,
  ContentPerDay,
  CarText,
  CarModel,
  CarPrice,
  CarImage,
  CarFuel,
  ContentSchedules,
  ScheduleTimeText,
} from './styles'

interface CarSimplifiedProps {
  car: Cars
}

export function CarSimplified({ car }: CarSimplifiedProps) {
  const carImages = car.images.map((item) => ({
    image: item,
  }))

  return (
    <Container>
      <ContentInfo>
        <Details>
          <CarDetails>
            <CarText>{car.brand}</CarText>
            <CarModel>{car.model}</CarModel>
          </CarDetails>

          <ContentPerDay>
            <CarDetails>
              <CarText>Per day</CarText>
              <CarPrice>
                {formatCurrent(car.price.per_day, 'pt-PT', car.price.currency)}
              </CarPrice>
            </CarDetails>

            <CarFuel>
              {car.fuel === 'electric' ? <Electric /> : <Gasoline />}
            </CarFuel>
          </ContentPerDay>
        </Details>

        <CarImage
          source={{
            uri: carImages[0].image,
          }}
          resizeMode="contain"
        />
      </ContentInfo>

      <ContentSchedules>
        <ScheduleTimeText>Using until June 17, 2020</ScheduleTimeText>
      </ContentSchedules>
    </Container>
  )
}
