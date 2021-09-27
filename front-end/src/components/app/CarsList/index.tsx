import React, { useState } from 'react'
import { useTransition, config } from 'react-spring'

import Car from './Car'
import { ICar } from '../../../pages/cars'

import { Container, Header, Content } from './styles'

interface CarsListProps {
  cars: ICar[]
}

export default function CarsList(data: CarsListProps) {
  const [cars] = useState(data.cars)

  const transitionsCars = useTransition(cars, {
    keys: (item) => item.plate,
    from: { opacity: 0, translateY: 100, scale: 0.6 },
    enter: { opacity: 1, translateY: 0, scale: 1 },
    leave: { opacity: 0, translateY: -100, scale: 0 },
    config: config.gentle,
    delay: 200,
  })

  return (
    <Container>
      <Header>
        <h1>Available cars</h1>

        <span>
          Total {`${cars.length} ${cars.length === 1 ? 'car' : 'cars'}`}
        </span>
      </Header>

      <Content>
        {transitionsCars((styles, item) => (
          <Car key={item.plate} {...{ car: item, styles }} />
        ))}
      </Content>
    </Container>
  )
}
