import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

import { api } from '../../../../services/api'
import { Cars } from '../../../../hooks/contexts/Home'
import { CarSimplified } from '../../../../components/Car/CarSimplified'

import {
  Container,
  Header,
  HeaderTitle,
  PeriodsText,
  Content,
  CarList,
} from './styles'

interface CarsSchedules {
  start_in: string
  end_in: string
  rentalPrice: number
  car: Cars
}

export function Schedules() {
  const isFocused = useIsFocused()

  const [carsSchedules, setCarsSchedules] = useState<
    CarsSchedules[] | undefined
  >(undefined)

  useEffect(() => {
    if (isFocused) {
      async function loadWithPage() {
        const response = await api.get('/cars/schedules')

        setCarsSchedules(response.data)
      }

      loadWithPage()
    }
  }, [isFocused])

  return (
    <Container>
      <Header>
        <HeaderTitle>Schedules</HeaderTitle>

        <PeriodsText>
          {carsSchedules &&
            `${carsSchedules.length} ${
              carsSchedules.length === 1 ? 'period' : 'periods'
            }`}
        </PeriodsText>
      </Header>

      <Content>
        <CarList
          data={carsSchedules}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <CarSimplified
              key={item.car.created_at}
              car={item.car}
              scheduled={{
                start_in: item.start_in,
                end_in: item.end_in,
                rentalPrice: item.rentalPrice,
              }}
            />
          )}
          bounces={true}
          scrollEventThrottle={16}
        />
      </Content>
    </Container>
  )
}
