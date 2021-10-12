import React, { useState } from 'react'
import { useTransition, config } from 'react-spring'

import Car from './Car'
import { ICar } from '../../../pages/cars'
import CarHeader from './CarHeader'
import CarHeaderFilter from './CarHeaderFilter'

import { Container, Content } from './styles'

interface CarsListProps {
  cars: ICar[] | null
  dates?: [Date, Date] | null
  filterMode?: boolean
}

export default function CarsList({
  cars: carsReceived,
  dates = null,
  filterMode = false,
}: CarsListProps) {
  const [cars] = useState(carsReceived)

  const transitionsCars = useTransition(cars || [], {
    keys: (item) => item.plate,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
    delay: 200,
  })

  return (
    <Container>
      {filterMode && dates ? (
        <CarHeaderFilter
          cars={cars && cars.length ? cars.length : null}
          dates={dates}
        />
      ) : (
        <CarHeader cars={cars && cars.length ? cars.length : null} />
      )}

      <Content>
        {transitionsCars((styles, item) => (
          <Car
            key={item.plate}
            {...{ car: item, styles, isAllowGoBack: filterMode }}
          />
        ))}
      </Content>
    </Container>
  )
}
