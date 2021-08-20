import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
// @ts-ignore
import { FlatListSlider } from 'react-native-flatlist-slider'

import { QuickButton } from '../../../components/QuickButton'
import { Button } from '../../../components/Button'
import { formatCurrent } from '../../../utils/formatCurrency'
import { cars } from '../../../utils/cars'

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

export function CarDetails() {
  const carImages = cars[0].images.map((item) => ({
    image: item,
  }))

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

  function handleRentalCar() {
    // @ts-ignore
    navigation.navigate('ModalStatus', {
      option: 'carDetails',
      title: 'Rented car!',
      subtitle:
        'Now you just need to go\nto the RENTX dealership\npick up your car.',
    })
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
              {carImages.map((item, index) => (
                <Dot key={index} active={dotIndexFlatListSlider === index} />
              ))}
            </ContainerSlider>
          </HeaderContent>

          <ContainerFlatListSlider>
            <ContentFlatListSlider>
              <FlatListSlider
                data={carImages}
                indicator={false}
                onChangeFlatlistSlider={handleFlatListSliderIndex}
              />
            </ContentFlatListSlider>
          </ContainerFlatListSlider>
        </Header>

        <Content>
          <ContentHeader>
            <CarDetail>
              <CarText>Lamborghini</CarText>
              <CarModel>Huracan</CarModel>
            </CarDetail>

            <CarDetail>
              <CarText>Per day</CarText>
              <CarPrice>{formatCurrent(580, 'pt-PT', 'EUR')}</CarPrice>
            </CarDetail>
          </ContentHeader>

          <ContainerDetails>
            <ContentDetailsSeparation>
              <ContentDetails>
                <SpeedIcon width={32} height={32} fill="#47474D" />
                <DetailText>380km/h</DetailText>
              </ContentDetails>
              <ContentDetails leftActive rightActive>
                <TopSpeedIcon width={32} height={32} fill="#47474D" />
                <DetailText>3.2s</DetailText>
              </ContentDetails>
              <ContentDetails>
                <StrongHpIcon width={32} height={32} fill="#47474D" />
                <DetailText>800 HP</DetailText>
              </ContentDetails>
            </ContentDetailsSeparation>

            <ContentDetailsSeparation>
              <ContentDetails>
                <GasolineIcon width={32} height={32} fill="#47474D" />
                <DetailText>Gasoline</DetailText>
              </ContentDetails>
              <ContentDetails leftActive rightActive>
                <GearShiftIcon width={32} height={32} fill="#47474D" />
                <DetailText>Auto</DetailText>
              </ContentDetails>
              <ContentDetails>
                <NameIcon width={32} height={32} fill="#47474D" />
                <DetailText>2 people</DetailText>
              </ContentDetails>
            </ContentDetailsSeparation>
          </ContainerDetails>

          <ContentTime>
            <TimeDetails>
              <TimeForText>To</TimeForText>
              <TimeText>18 Julho 2020</TimeText>
            </TimeDetails>

            <ArrowIcon />

            <TimeDetails>
              <TimeForText>Until</TimeForText>
              <TimeText>20 Julho 2020</TimeText>
            </TimeDetails>
          </ContentTime>
        </Content>

        <Footer>
          <ContentFooter>
            <AluguerStatus>
              <TotalText>Total</TotalText>
              <AluguerCalcText>580€ x 3 daily</AluguerCalcText>
            </AluguerStatus>

            <TotalCountText>2,900€</TotalCountText>
          </ContentFooter>

          <Button text="Rental now" onPress={handleRentalCar} />
        </Footer>
      </Container>
    </>
  )
}
