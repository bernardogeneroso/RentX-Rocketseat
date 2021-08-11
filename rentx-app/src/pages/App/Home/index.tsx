import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'

import { ContentDate, DateText, DateTitle } from '../DatePicker/styles'
import { Container, Header, ButtonArrowDown } from './styles'

import ArrowDown from '../../../assets/arrow-down.svg'

interface HomeProps {
  route: {
    params: {
      inDate: Date
      toDate: Date
    }
  }
}

export function Home({ route }: HomeProps) {
  const navigation = useNavigation()

  const [inDate] = useState<Date>(route.params.inDate)
  const [toDate] = useState<Date>(route.params.toDate)

  function handleToRedirectDatePicker() {
    // @ts-ignore
    navigation.navigate('DatePicker')
  }

  return (
    <Container>
      <Header>
        <ContentDate>
          <DateTitle>In</DateTitle>

          <DateText>{format(new Date(inDate), 'd LLLL yyyy')}</DateText>
        </ContentDate>

        <ButtonArrowDown onPress={handleToRedirectDatePicker}>
          <ArrowDown fill="#7A7A80" />
        </ButtonArrowDown>

        <ContentDate>
          <DateTitle>To</DateTitle>

          <DateText>{format(new Date(toDate), 'd LLLL yyyy')}</DateText>
        </ContentDate>
      </Header>
    </Container>
  )
}
