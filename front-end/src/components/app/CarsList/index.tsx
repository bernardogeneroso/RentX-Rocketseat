import React, { useEffect, useMemo, useState } from 'react'
import { useTransition, config } from 'react-spring'

import { ICar } from '../../../pages/cars'
import Car from './Car'
import CarHeader from './CarHeader'
import CarHeaderFilter from './CarHeaderFilter'
import useFilterCars from '../../../hooks/useFilterCars'
import { api } from '../../../services/api'
import Loading from '../../Loading'

import { Container, Content } from './styles'

interface CarsListProps {
  filterMode?: boolean
}

export default function CarsList({ filterMode = false }: CarsListProps) {
  const [cars, setCars] = useState<ICar[] | null>(null)
  const [loading, setLoading] = useState(true)
  const { cars: carsBetweenDates, dates, carsFilter } = useFilterCars()

  useEffect(() => {
    setLoading(true)

    if (!carsBetweenDates && !carsFilter) {
      api
        .get('/cars')
        .then((response) => {
          setCars(response.data)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    } else if (carsFilter) {
      setCars(carsFilter)
      setLoading(false)
    } else if (carsBetweenDates) {
      setCars(carsBetweenDates)
      setLoading(false)
    }
  }, [carsBetweenDates, carsFilter])

  const carsLength = useMemo(() => {
    if (carsFilter) return carsFilter.length ? carsFilter.length : null
    if (cars) return cars.length ? cars.length : null

    return carsBetweenDates && carsBetweenDates.length
      ? carsBetweenDates.length
      : null
  }, [carsFilter, cars, carsBetweenDates])

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
        <CarHeaderFilter {...{ carsLength, dates }} />
      ) : (
        <CarHeader {...{ carsLength }} />
      )}

      {loading ? (
        <Loading />
      ) : (
        <Content>
          {transitionsCars((styles, item) => (
            <Car
              key={item.plate}
              {...{ car: item, styles, isAllowGoBack: filterMode }}
            />
          ))}
        </Content>
      )}
    </Container>
  )
}
