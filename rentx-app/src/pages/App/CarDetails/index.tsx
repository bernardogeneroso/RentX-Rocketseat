import React, { useEffect, useMemo, useState } from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { format, differenceInCalendarDays } from 'date-fns'
// @ts-ignore
import { FlatListSlider } from 'react-native-flatlist-slider'

import useHome from '../../../hooks/useHome'
import { api } from '../../../services/api'
import { Cars } from '../../../hooks/contexts/Home'
import { CarImages } from '../../../components/Car/CarExtended'
import { QuickButton } from '../../../components/QuickButton'
import { Button } from '../../../components/Button'
import { formatCurrent } from '../../../utils/formatCurrency'
import { formatStringFirstCharacter } from '../../../utils/formatStringFirstCharacter'

import ArrowIcon from '../../../assets/arrow.svg'
import ArrowLeftIcon from '../../../assets/arrow-left.svg'
import SpeedIcon from '../../../assets/speed.svg'
import TopSpeedIcon from '../../../assets/top-speed.svg'
import StrongHpIcon from '../../../assets/strong-hp.svg'
import GasolineIcon from '../../../assets/gasoline.svg'
import GearShiftIcon from '../../../assets/gear-shift.svg'
import NameIcon from '../../../assets/name.svg'

import {
  Container,
  Header,
  HeaderContent,
  ContainerFlatListSlider,
  ContentFlatListSlider,
  Content,
  ContentHeader,
  CarDetail,
  CarText,
  CarModel,
  CarPrice,
  ContainerDetails,
  ContentDetailsSeparation,
  ContentDetails,
  DetailText,
  ContentTime,
  TimeDetails,
  TimeForText,
  TimeText,
  Footer,
  ContentFooter,
  AluguerStatus,
  TotalText,
  AluguerCalcText,
  TotalCountText,
} from './styles'
import { ContainerSlider } from '../../../components/Car/CarExtended/styles'
import { Dot } from '../../Auth/OnBoard/styles'

interface CarDetailsProps {
  route: {
    params: {
      plate: string | undefined
    }
  }
}

interface CarWithDetails extends Cars {
  carDetail: {
    maxSpeed: number
    topSpeed: number
    hp: number
    people: number
  }
}

export function CarDetails(props: CarDetailsProps) {
  const { inDate, toDate, handleToRemoveCarRented } = useHome()
  let carImages: CarImages[] = []

  const [car, setCar] = useState<CarWithDetails | undefined>(undefined)

  const daysBetweenDates = useMemo(() => {
    if (!inDate || !toDate) return null

    return differenceInCalendarDays(new Date(toDate), new Date(inDate))
  }, [inDate, toDate])

  car?.carsImages.forEach((item, index) => {
    carImages.push(
      Object.assign({
        image: item.url,
        desc: index.toString(),
      })
    )
  })

  useEffect(() => {
    async function loadWithPage() {
      const response = await api.get(
        `/cars/details/${props.route.params.plate}`
      )

      setCar(response.data)
    }

    loadWithPage()
  }, [props.route.params.plate])

  const navigation = useNavigation()

  const [dotIndexFlatListSlider, setDotIndexFlatListSlider] = useState(0)

  function handleFlatListSliderIndex(number: number) {
    setDotIndexFlatListSlider(number)
  }

  function handleRedirectBack() {
    if (navigation.canGoBack()) {
      // @ts-ignore
      navigation.navigate('TabMenu')
    } else {
      navigation.goBack()
    }
  }

  async function handleRentalCar() {
    if (!car) return

    try {
      await api.post('/cars/appointments', {
        carId: car.plate,
        start_in: inDate,
        end_in: toDate,
      })

      handleToRemoveCarRented(car.plate)

      // @ts-ignore
      navigation.navigate('ModalStatus', {
        option: 'carDetails',
        title: 'Rented car!',
        subtitle:
          'Now you just need to go\nto the RENTX dealership\npick up your car.',
      })
    } catch {
      // @ts-ignore
      navigation.navigate('ModalStatus', {
        option: 'carDetails',
        status: 'error',
        title: 'Error rented car!',
      })
    }
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />

      <Container>
        <Header>
          <HeaderContent>
            <QuickButton onPress={handleRedirectBack}>
              <ArrowLeftIcon />
            </QuickButton>

            <ContainerSlider>
              {carImages &&
                carImages.map((item, index) => (
                  <Dot key={index} active={dotIndexFlatListSlider === index} />
                ))}
            </ContainerSlider>
          </HeaderContent>

          <ContainerFlatListSlider>
            <ContentFlatListSlider>
              {Object.assign(carImages).length !== 0 && (
                <FlatListSlider
                  data={carImages}
                  indicator={false}
                  onChangeFlatlistSlider={handleFlatListSliderIndex}
                />
              )}
            </ContentFlatListSlider>
          </ContainerFlatListSlider>
        </Header>

        <Content>
          <ContentHeader>
            <CarDetail>
              <CarText>{car?.brand}</CarText>
              <CarModel>{car?.model}</CarModel>
            </CarDetail>

            <CarDetail>
              <CarText>Per day</CarText>
              <CarPrice>
                {formatCurrent(car?.pricePerDay, 'pt-PT', 'EUR')}
              </CarPrice>
            </CarDetail>
          </ContentHeader>

          <ContainerDetails>
            <ContentDetailsSeparation>
              <ContentDetails>
                <SpeedIcon width={32} height={32} fill="#47474D" />
                <DetailText>{car?.carDetail.maxSpeed}km/h</DetailText>
              </ContentDetails>
              <ContentDetails leftActive rightActive>
                <TopSpeedIcon width={32} height={32} fill="#47474D" />
                <DetailText>{car?.carDetail.topSpeed}s</DetailText>
              </ContentDetails>
              <ContentDetails>
                <StrongHpIcon width={32} height={32} fill="#47474D" />
                <DetailText>{car?.carDetail.hp} HP</DetailText>
              </ContentDetails>
            </ContentDetailsSeparation>

            <ContentDetailsSeparation>
              <ContentDetails>
                <GasolineIcon width={32} height={32} fill="#47474D" />
                <DetailText>{formatStringFirstCharacter(car?.fuel)}</DetailText>
              </ContentDetails>
              <ContentDetails leftActive rightActive>
                <GearShiftIcon width={32} height={32} fill="#47474D" />
                <DetailText>
                  {formatStringFirstCharacter(
                    car?.transmission === 'auto'
                      ? 'automatic'
                      : car?.transmission
                  )}
                </DetailText>
              </ContentDetails>
              <ContentDetails>
                <NameIcon width={32} height={32} fill="#47474D" />
                <DetailText>{`${car?.carDetail.people} ${
                  car?.carDetail.people === 1 ? 'people' : 'peoples'
                }`}</DetailText>
              </ContentDetails>
            </ContentDetailsSeparation>
          </ContainerDetails>

          <ContentTime>
            <TimeDetails>
              <TimeForText>To</TimeForText>
              <TimeText>
                {inDate && format(new Date(inDate), 'd LLLL yyyy')}
              </TimeText>
            </TimeDetails>

            <ArrowIcon />

            <TimeDetails>
              <TimeForText>Until</TimeForText>
              <TimeText>
                {toDate && format(new Date(toDate), 'd LLLL yyyy')}
              </TimeText>
            </TimeDetails>
          </ContentTime>
        </Content>

        <Footer>
          <ContentFooter>
            <AluguerStatus>
              <TotalText>Total</TotalText>
              <AluguerCalcText>
                {formatCurrent(car?.pricePerDay, 'pt-PT', 'EUR')} x{' '}
                {daysBetweenDates} daily
              </AluguerCalcText>
            </AluguerStatus>

            <TotalCountText>
              {car?.pricePerDay &&
                daysBetweenDates &&
                formatCurrent(
                  car?.pricePerDay * daysBetweenDates,
                  'pt-PT',
                  'EUR'
                )}
            </TotalCountText>
          </ContentFooter>

          <Button text="Rental now" onPress={handleRentalCar} />
        </Footer>
      </Container>
    </>
  )
}
