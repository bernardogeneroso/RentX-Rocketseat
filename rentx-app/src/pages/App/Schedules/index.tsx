import React from 'react'

import { cars } from '../../../utils/cars'
import { CarSimplified } from '../../../components/Car/CarSimplified'

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
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CarSimplified key={item.id} car={item} />}
        />
      </Content>
    </Container>
  )
}
