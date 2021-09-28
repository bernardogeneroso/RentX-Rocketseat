import React, { useState } from 'react'
import { useTransition, config } from 'react-spring'

import AboutCar from './AboutCar'
import RentalPeriod from './RentalPeriod'
import ContentAboutCar from './ContentAboutCar'

import { Container, ContainerAboutCar, ContainerInfo } from './styles'

type InfoProps = 'AboutCar' | 'RentalPeriod'

export default function CarRental() {
  const [info, setInfo] = useState<InfoProps>('AboutCar')

  const transitions = useTransition(info, {
    from: { opacity: 0, translateY: -50 },
    enter: { opacity: 1, translateY: 0 },
    leave: { opacity: 0, translateY: 100 },
    delay: 200,
    config: config.gentle,
  })

  function handleSetInfo(newInfo: InfoProps) {
    setInfo(newInfo)
  }

  return (
    <Container>
      <ContainerAboutCar>
        <header>
          <ContentAboutCar
            isActive={info === 'AboutCar'}
            onClick={() => handleSetInfo('AboutCar')}
          >
            About the car
          </ContentAboutCar>
          <ContentAboutCar
            isActive={info === 'RentalPeriod'}
            onClick={() => handleSetInfo('RentalPeriod')}
          >
            Rental period
          </ContentAboutCar>
        </header>

        <ContainerInfo>
          {transitions((styles, item) =>
            item === 'AboutCar' ? (
              <AboutCar styles={styles} />
            ) : (
              <RentalPeriod styles={styles} />
            )
          )}
        </ContainerInfo>
      </ContainerAboutCar>
    </Container>
  )
}
