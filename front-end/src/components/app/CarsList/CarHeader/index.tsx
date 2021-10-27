import React from 'react'

import { Container } from './styles'

interface CarHeaderProps {
  carsLength: number | null
}

export default function CarHeader({ carsLength }: CarHeaderProps) {
  return (
    <Container>
      <h1>{carsLength ? 'Available cars' : 'No cars available'}</h1>

      {carsLength && (
        <span>
          Total {`${carsLength} ${carsLength === 1 ? 'car' : 'cars'}`}
        </span>
      )}
    </Container>
  )
}
