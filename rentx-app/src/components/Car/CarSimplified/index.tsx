import React from 'react'
import { format, isBefore } from 'date-fns'

import { Cars } from '../../../utils/cars'
import { formatCurrent } from '../../../utils/formatCurrency'

import Electric from '../../../assets/electric.svg'
import Gasoline from '../../../assets/gasoline.svg'
import ArrowRightSmallIcon from '../../../assets/arrow-right-small.svg'

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
  TimeText,
  ContentTime,
  StartTimeText,
  EndTimeText,
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

      {car.start_date && car.end_date && isBefore(new Date(), car.end_date) && (
        <ContentSchedules>
          <ScheduleTimeText>
            Using until {format(new Date(car.end_date), 'LLLL d, yyyy')}
          </ScheduleTimeText>
        </ContentSchedules>
      )}
      {car.start_date && car.end_date && !isBefore(new Date(), car.end_date) && (
        <ContentSchedules timeMode>
          <TimeText>Time</TimeText>

          <ContentTime>
            <StartTimeText>
              {format(new Date(car.start_date), ' d LLLL yyyy')}
            </StartTimeText>

            <ArrowRightSmallIcon />

            <EndTimeText>
              {format(new Date(car.end_date), ' d LLLL yyyy')}
            </EndTimeText>
          </ContentTime>
        </ContentSchedules>
      )}
    </Container>
  )
}
