import React from 'react'

import { Container, Header, DayPriceText, PricesText, Content } from './styles'

export function DayPrice() {
  return (
    <Container>
      <Header>
        <DayPriceText>Daily price</DayPriceText>

        <PricesText>160€ - 380€</PricesText>
      </Header>

      <Content></Content>
    </Container>
  )
}
