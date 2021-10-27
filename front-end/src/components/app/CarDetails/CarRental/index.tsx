import React, { useCallback, useState } from 'react'
import { useTransition, config } from 'react-spring'

import AboutCar from './AboutCar'
import RentalPeriod from './RentalPeriod'
import ContentAboutCar from './ContentAboutCar'

import { Container, ContainerAboutCar, ContainerInfo } from './styles'

export type InfoCarProps = 'AboutCar' | 'RentalPeriod'

interface RentalProps {
  carInfo: {
    plate: string
    PerDay: number
  }
}

export default function CarRental({ carInfo }: RentalProps) {
  const [info, setInfo] = useState<InfoCarProps>('AboutCar')

  const transitions = useTransition(info, {
    from: { opacity: 0, translateY: -50 },
    enter: { opacity: 1, translateY: 0 },
    leave: { opacity: 0, translateY: 0 },
    delay: 200,
    config: config.gentle,
  })

  const handleSetInfoCar = useCallback((newInfo: InfoCarProps) => {
    setInfo(newInfo)
  }, [])

  return (
    <Container>
      <ContainerAboutCar>
        <header>
          <ContentAboutCar
            isActive={info === 'AboutCar'}
            onClick={() => handleSetInfoCar('AboutCar')}
          >
            About the car
          </ContentAboutCar>
          <ContentAboutCar
            isActive={info === 'RentalPeriod'}
            onClick={() => handleSetInfoCar('RentalPeriod')}
          >
            Rental period
          </ContentAboutCar>
        </header>

        <ContainerInfo>
          {transitions((styles, item) =>
            item === 'AboutCar' ? (
              <AboutCar {...{ styles, handleSetInfoCar }} />
            ) : (
              <RentalPeriod
                isActive={item === 'RentalPeriod'}
                {...{ styles, carInfo }}
              />
            )
          )}
        </ContainerInfo>
      </ContainerAboutCar>
    </Container>
  )
}
