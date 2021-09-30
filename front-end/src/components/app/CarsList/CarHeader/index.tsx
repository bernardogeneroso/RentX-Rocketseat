import React from 'react'

import { Container } from './styles'

interface CarHeaderProps {
  cars: number | null
}

export default function CarHeader({ cars }: CarHeaderProps) {
  return (
    <Container>
      <h1>{cars ? 'Available cars' : 'No cars available'}</h1>

      {cars && <span>Total {`${cars} ${cars === 1 ? 'car' : 'cars'}`}</span>}
    </Container>
  )
}
