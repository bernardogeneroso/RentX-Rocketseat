import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import { CarSimplified } from '../../../../components/Car/CarSimplified'
import useListing from '../../../../hooks/useListing'
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
  const { cars, carsFilter } = useListing()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Details>
            <HeaderTitle>Listing</HeaderTitle>

            <CarInfo>
              {carsFilter
                ? `${carsFilter.length} ${
                    carsFilter.length === 1 ? 'car' : 'cars'
                  }`
                : cars &&
                  `${cars.length} ${cars.length === 1 ? 'car' : 'cars'}`}
            </CarInfo>
          </Details>

          <ContentSearch>
            <Search />
          </ContentSearch>
        </Header>

        <Content>
          <CarList
            data={carsFilter || cars}
            keyExtractor={(item: any) => item.plate}
            renderItem={({ item }: any) => (
              <CarSimplified key={item.plate} car={item} />
            )}
          />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}
