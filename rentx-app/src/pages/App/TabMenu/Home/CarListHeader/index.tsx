import React from 'react'

import Filter from '../../../../../assets/filter.svg'

import { Container, Title, Details, DetailsText, ButtonFilter } from './styles'

interface CarListHeaderProps {
  carsLength: number
  handleOpenFilter: () => void
}

export function CarListHeader({
  carsLength,
  handleOpenFilter,
}: CarListHeaderProps) {
  return (
    <Container>
      <Title>Results</Title>

      <Details>
        <DetailsText>{`${carsLength} ${
          carsLength === 1 ? 'car' : 'cars'
        }`}</DetailsText>

        <ButtonFilter onPress={handleOpenFilter}>
          <Filter />
        </ButtonFilter>
      </Details>
    </Container>
  )
}
