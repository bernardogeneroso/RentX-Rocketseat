import React from 'react'

import { carsSchedules } from '../../../../utils/cars'
import { CarSimplified } from '../../../../components/Car/CarSimplified'

import {
  Container,
  Header,
  HeaderTitle,
  PeriodsText,
  Content,
  CarList,
} from './styles'

export function Schedules() {
  return (
    <Container>
      <Header>
        <HeaderTitle>Schedules</HeaderTitle>

        <PeriodsText>5 periods</PeriodsText>
      </Header>

      <Content>
        <CarList
          data={carsSchedules}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CarSimplified key={item.id} car={item} />}
          bounces={true}
          scrollEventThrottle={16}
        />
      </Content>
    </Container>
  )
}
