import React, { useEffect, useState } from 'react'
// @ts-ignore
import Slider from 'react-native-sliders'

import SliderImage from '../../../../../assets/slider.png'

import { Container, Header, DayPriceText, PricesText, Content } from './styles'

interface DayPriceProps {
  cleanMode: boolean
}

export function DayPrice({ cleanMode }: DayPriceProps) {
  const [slider, setSlider] = useState([160, 380])

  useEffect(() => {
    setSlider([160, 380])
  }, [cleanMode])

  function handleChangeSliderValues(value: number[]) {
    setSlider(value)
  }

  return (
    <Container>
      <Header>
        <DayPriceText>Daily price</DayPriceText>

        <PricesText>
          {slider[0]}€ - {slider[1]}€
        </PricesText>
      </Header>

      <Content>
        <Slider
          value={slider}
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
