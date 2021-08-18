import React from 'react'

import { cars } from '../../../../utils/cars'
import { CarSimplified } from '../../../../components/Car/CarSimplified'
import { Search } from './Search'

import {
  Container,
  Header,
  Details,
  HeaderTitle,
  CarInfo,
  ContentSearch,
  Content,
  CarList,
} from './styles'

export function CarListing() {
  return (
    <Container>
      <Header>
        <Details>
          <HeaderTitle>Listing</HeaderTitle>

          <CarInfo>{`${cars.length} ${
            cars.length === 1 ? 'car' : 'cars'
          }`}</CarInfo>
        </Details>

        <ContentSearch>
          <Search />
        </ContentSearch>
      </Header>

      <Content>
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CarSimplified key={item.id} car={item} />}
        />
      </Content>
    </Container>
  )
}
