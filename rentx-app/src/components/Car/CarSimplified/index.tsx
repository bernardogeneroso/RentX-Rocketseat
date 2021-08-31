import React, { useMemo } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  format,
  isAfter,
  isBefore,
  parseISO,
  differenceInCalendarDays,
} from 'date-fns'

import { Fuel } from '../../Fuel'
import useHome from '../../../hooks/useHome'
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
  scheduled?: {
    start_in: string
    end_in: string
    rentalPrice: number
  }
  car:
    | {
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
        carsAppointments?: {
          start_in: Date
          end_in: Date
          rentalPrice: number
        }[]
      }
    | undefined
}

export function CarSimplified({ car, scheduled }: CarSimplifiedProps) {
  const navigation = useNavigation()
  const { handleIsThisCarAvailableToRental } = useHome()

  const carUntilIsBeforeAndIsAfter = useMemo(() => {
    return (
      scheduled &&
      isBefore(new Date(), parseISO(scheduled.end_in)) &&
      isAfter(new Date(), parseISO(scheduled.start_in))
    )
  }, [scheduled])

  const carUntilIsNotBeforeAndIsAfter = useMemo(() => {
    return (
      scheduled &&
      !isBefore(new Date(), parseISO(scheduled.end_in)) &&
      isAfter(new Date(), parseISO(scheduled.start_in))
    )
  }, [scheduled])

  const scheduledCountDays = useMemo(() => {
    return (
      scheduled &&
      differenceInCalendarDays(
        parseISO(scheduled.end_in),
        parseISO(scheduled.start_in)
      )
    )
  }, [])

  function handleNavigateToDetails() {
    if (!car) return

    if (!handleIsThisCarAvailableToRental(car.plate)) {
      Alert.alert('Information', 'This car is not available to rental')
      return
    }

    // @ts-ignore
    navigation.navigate('CarDetails', {
      plate: car.plate,
    })
  }

  return (
    <Container onPress={handleNavigateToDetails}>
      <ContentInfo>
        <Details>
          <CarDetails>
            <CarText>{car?.brand}</CarText>
            <CarModel>{car?.model}</CarModel>
          </CarDetails>

          <ContentPerDay>
            <CarDetails>
              <CarText>{`For ${scheduledCountDays} ${
                scheduledCountDays === 1 ? 'day' : 'days'
              }`}</CarText>
              <CarPrice>
                {scheduled && car?.pricePerDay && scheduledCountDays
                  ? formatCurrent(
                      car?.pricePerDay * scheduledCountDays,
                      'pt-PT',
                      'EUR'
                    )
                  : formatCurrent(car?.pricePerDay, 'pt-PT', 'EUR')}
              </CarPrice>
            </CarDetails>

            <CarFuel>
              <Fuel fuel={car?.fuel} />
            </CarFuel>
          </ContentPerDay>
        </Details>

        <CarImage
          source={{
            uri: car?.carsImages[0].url,
          }}
          resizeMode="contain"
        />
      </ContentInfo>

      {scheduled && carUntilIsBeforeAndIsAfter && (
        <ContentSchedules>
          <ScheduleTimeText>
            Using until {format(new Date(scheduled.end_in), 'LLLL d, yyyy')}
          </ScheduleTimeText>
        </ContentSchedules>
      )}
      {scheduled && carUntilIsNotBeforeAndIsAfter && (
        <ContentSchedules timeMode>
          <TimeText>Time</TimeText>

          <ContentTime>
            <StartTimeText>
              {format(new Date(scheduled.start_in), ' d LLLL yyyy')}
            </StartTimeText>

            <ArrowRightSmallIcon />

            <EndTimeText>
              {format(new Date(scheduled.end_in), ' d LLLL yyyy')}
            </EndTimeText>
          </ContentTime>
        </ContentSchedules>
      )}
      {scheduled &&
        !carUntilIsBeforeAndIsAfter &&
        !carUntilIsNotBeforeAndIsAfter && (
          <ContentSchedules timeMode>
            <TimeText>Time</TimeText>

            <ContentTime>
              <StartTimeText>
                {format(new Date(scheduled.start_in), ' d LLLL yyyy')}
              </StartTimeText>

              <ArrowRightSmallIcon />

              <EndTimeText>
                {format(new Date(scheduled.end_in), ' d LLLL yyyy')}
              </EndTimeText>
            </ContentTime>
          </ContentSchedules>
        )}
    </Container>
  )
}
