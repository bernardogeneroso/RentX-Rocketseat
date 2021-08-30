import React from 'react'
import { format, isBefore } from 'date-fns'

import { Cars } from '../../../utils/cars'
import { Fuel } from '../../Fuel'
import { formatCurrent } from '../../../utils/formatCurrency'

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
  car: {
    plate: string
    brand: string
    model: string
    colour: string
    fuel: 'electric' | 'gasoline' | 'alcohol'
    transmission: 'manual' | 'auto'
    pricePerDay: number
    created_at: Date
    updated_at: Date
    used: number
    daysUsed: number
    carsImages: {
      url: string
      carId: string
    }[]
  }
}

export function CarSimplified({ car }: CarSimplifiedProps) {
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
                {/*formatCurrent(car.pricePerDay, 'pt-PT', 'EUR')*/}
              </CarPrice>
            </CarDetails>

            <CarFuel>
              <Fuel fuel={car.fuel} />
            </CarFuel>
          </ContentPerDay>
        </Details>

        {/*<CarImage
            source={{
              uri: car.carsImages[0].url,
            }}
            resizeMode="contain"
          />*/}
      </ContentInfo>

      {/*car.start_date && car.end_date && isBefore(new Date(), car.end_date) && (
        <ContentSchedules>
          <ScheduleTimeText>
            Using until {format(new Date(car.end_date), 'LLLL d, yyyy')}
          </ScheduleTimeText>
        </ContentSchedules>
      )*/}
      {/*car.start_date && car.end_date && !isBefore(new Date(), car.end_date) && (
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
      )*/}
    </Container>
  )
}
