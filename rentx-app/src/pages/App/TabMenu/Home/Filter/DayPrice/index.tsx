import React, { useEffect, useState } from 'react'
// @ts-ignore
import Slider from 'react-native-sliders'

import useHome from '../../../../../../hooks/useHome'

import SliderImage from '../../../../../../assets/slider.png'

import { Container, Header, DayPriceText, PricesText, Content } from './styles'

export function DayPrice() {
  const { handleSetDayPriceSlider, dayPriceSlider } = useHome()

  function handleChangeSliderValues(value: number[]) {
    handleSetDayPriceSlider(value[0], value[1])
  }

  return (
    <Container>
      <Header>
        <DayPriceText>Daily price</DayPriceText>

        <PricesText>
          {dayPriceSlider[0]}€ - {dayPriceSlider[1]}€
        </PricesText>
      </Header>

      <Content>
        <Slider
          value={dayPriceSlider}
          minimumValue={1}
          maximumValue={800}
          minimumTrackTintColor="#DC1637"
          maximumTrackTintColor="#F4F5F6"
          thumbTintColor="#fff"
          thumbTouchSize={{ width: 32, height: 24 }}
          thumbStyle={{
            borderRadius: 0,
            width: 32,
            height: 24,
            elevation: 3,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 3,
            shadowOpacity: 1.0,
          }}
          thumbImage={SliderImage}
          step={1}
          onValueChange={handleChangeSliderValues}
        />
      </Content>
    </Container>
  )
}
