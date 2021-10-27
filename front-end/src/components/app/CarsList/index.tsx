import React, { useMemo } from 'react'
import { useTransition, config } from 'react-spring'

import { ICar } from '../../../pages/cars'
import Car from './Car'
import CarHeader from './CarHeader'
import CarHeaderFilter from './CarHeaderFilter'
import useFilterCars from '../../../hooks/useFilterCars'

import { Container, Content } from './styles'

interface CarsListProps {
  cars?: ICar[] | null
  filterMode?: boolean
}

export default function CarsList({
  cars = null,
  filterMode = false,
}: CarsListProps) {
  const { cars: carsBetweenDates, dates, carsFilter } = useFilterCars()

  const carsLength = useMemo(() => {
    if (carsFilter) return carsFilter.length ? carsFilter.length : null
    if (cars) return cars.length ? cars.length : null

    return carsBetweenDates && carsBetweenDates.length
      ? carsBetweenDates.length
      : null
  }, [carsFilter, cars, carsBetweenDates])

  const transitionsCars = useTransition(
    carsFilter || cars || carsBetweenDates || [],
    {
      keys: (item) => item.plate,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.gentle,
      delay: 200,
    }
  )

  return (
    <Container>
      {filterMode && dates ? (
        <CarHeaderFilter {...{ carsLength, dates }} />
      ) : (
        <CarHeader {...{ carsLength }} />
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
