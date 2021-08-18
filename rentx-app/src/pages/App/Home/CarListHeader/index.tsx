import React from 'react'

import { cars } from '../../../../utils/cars'

import Filter from '../../../../assets/filter.svg'

import { Container, Title, Details, DetailsText, ButtonFilter } from './styles'

interface CarListHeaderProps {
  handleOpenFilter: () => void
}

export function CarListHeader({ handleOpenFilter }: CarListHeaderProps) {
  return (
    <Container>
      <Title>Results</Title>

      <Details>
        <DetailsText>{cars.length} carros</DetailsText>

        <ButtonFilter onPress={handleOpenFilter}>
          <Filter />
        </ButtonFilter>
      </Details>
    </Container>
  )
}
