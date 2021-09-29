import React from 'react'

import { InfoCarProps } from '..'
import { Button } from '../../../../Button'

import { Container } from './styles'

interface AboutCarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles: any
  handleSetInfoCar: (newInfo: InfoCarProps) => void
}

export default function AboutCar({ styles, handleSetInfoCar }: AboutCarProps) {
  return (
    <Container
      style={{
        position: 'absolute',
        ...styles,
      }}
    >
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Collatio igitur
        ista te nihil iuvat. Quae quidem sapientes sequuntur duce natura tamquam
        videntes.
      </div>

      <Button
        text="Choose rental period"
        onClick={() => handleSetInfoCar('RentalPeriod')}
      />
    </Container>
  )
}
