import React, { useState } from 'react'
import { format, isSameDay } from 'date-fns'
import { Octicons } from '@expo/vector-icons'
import Calendar from 'react-native-calendar-picker'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../../../components/Button'
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
  Content,
} from './styles'

export function DatePicker() {
  const navigation = useNavigation()

  const [inDate, setInDate] = useState<Date | null>(null)
  const [toDate, setToDate] = useState<Date | null>(null)

  function handleWithDateChange(date: Date, type: 'START_DATE' | 'END_DATE') {
    if (type === 'START_DATE') setInDate(date)
    if (type === 'END_DATE') {
      const dateReceived = new Date(date)
      const inDateModified = inDate && new Date(inDate)

      if (inDateModified && !isSameDay(dateReceived, inDateModified))
        setToDate(date)
    }
  }

  function handleRedirectToApp() {
    // @ts-ignore
    navigation.navigate('AppTabMenu', {
      screen: 'Home',
      params: { inDate, toDate },
    })
  }

  return (
    <Container>
      <Header>
        <Title>
          Choose the{'\n'}date and find{'\n'}a car.
        </Title>

        <ContentHeader>
          <ContentDate>
            <DateTitle>In</DateTitle>

            {inDate ? (
              <DateText>{format(new Date(inDate), 'd LLLL yyyy')}</DateText>
            ) : (
              <DateView />
            )}
          </ContentDate>

          <Arrow />

          <ContentDate>
            <DateTitle>To</DateTitle>

            {toDate ? (
              <DateText>{format(new Date(toDate), 'd LLLL yyyy')}</DateText>
            ) : (
              <DateView />
            )}
          </ContentDate>
        </ContentHeader>
      </Header>

      <Content>
        <Calendar
          // @ts-ignore
          onDateChange={handleWithDateChange}
          minDate={new Date()}
          showDayStragglers
          allowRangeSelection
          headingLevel={24}
          dayLabelsWrapper={{
            borderBottomColor: '#EBEBF0',
            borderBottomWidth: 1,
            borderTopWidth: 0,
            paddingBottom: 17,
          }}
          todayTextStyle={{
            fontSize: 20,
            color: '#fff',
          }}
          todayBackgroundColor="#fff"
          disabledDatesTextStyle={{
            color: '#AEAEB3',
            fontSize: 15,
          }}
          selectedRangeStartTextStyle={{
            color: '#fff',
          }}
          selectedRangeEndStyle={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: '#DC1637',
          }}
          selectedDayTextStyle={{
            color: '#DC1637',
          }}
          selectedRangeStartStyle={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            backgroundColor: '#DC1637',
          }}
          selectedRangeStyle={{
            backgroundColor: '#FDEDEF',
          }}
          selectedRangeEndTextStyle={{
            color: '#fff',
          }}
          monthTitleStyle={{
            fontFamily: 'Archivo_600SemiBold',
            fontSize: 20,
            color: '#47474D',
          }}
          yearTitleStyle={{
            fontFamily: 'Archivo_600SemiBold',
            fontSize: 20,
            color: '#47474D',
          }}
          textStyle={{
            fontFamily: 'Inter_500Medium',
            color: '#47474D',
          }}
          nextComponent={
            <Octicons name="chevron-right" size={24} color="#7A7A80" />
          }
          previousComponent={
            <Octicons name="chevron-left" size={24} color="#7A7A80" />
          }
        />

        <Button
          text="Confirm"
          onPress={handleRedirectToApp}
          disabled={!inDate || !toDate}
        />
      </Content>
    </Container>
  )
}
