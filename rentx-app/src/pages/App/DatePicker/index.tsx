import React from 'react'
import { StatusBar } from 'react-native'

import Arrow from '../../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  ContentHeader,
  ContentDate,
  DateTitle,
  DateView,
  DateText,
} from './styles'

export function DatePicker() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Container>
        <Header>
          <Title>
            Choose the{'\n'}date and find{'\n'}a car.
          </Title>

          <ContentHeader>
            <ContentDate>
              <DateTitle>In</DateTitle>

              <DateText>August 9th, 2020</DateText>
            </ContentDate>

            <Arrow />

            <ContentDate>
              <DateTitle>To</DateTitle>

              <DateView />
            </ContentDate>
          </ContentHeader>
        </Header>
      </Container>
    </>
  )
}
