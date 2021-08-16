import React from 'react'

import { cars } from '../../../../utils/cars'

import Filter from '../../../../assets/filter.svg'

import { Container, Title, Details, DetailsText, ButtonFilter } from './styles'

export function CarListHeader() {
  return (
    <Container>
      <Title>Results</Title>

      <Details>
        <DetailsText>{cars.length} carros</DetailsText>

        <ButtonFilter>
          <Filter />
        </ButtonFilter>
      </Details>
    </Container>
  )
}
