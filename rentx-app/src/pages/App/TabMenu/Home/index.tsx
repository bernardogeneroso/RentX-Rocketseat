import React, { useCallback, useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import AsyncStorage from '@react-native-async-storage/async-storage'

import useHome from '../../../../hooks/useHome'
import { Filter } from './Filter'
import { CarExtended } from '../../../../components/Car/CarExtended'
import { CarListHeader } from './CarListHeader'

import ArrowDown from '../../../../assets/arrow-down.svg'
import { ContentDate, DateText, DateTitle } from '../../DatePicker/styles'
import { Container, Header, ButtonArrowDown, Content, CarList } from './styles'

export function Home() {
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const { cars, handleGetApiCars } = useHome()

  const [modal, setModal] = useState(false)
  const [inDate, setInDate] = useState<Date | null>(null)
  const [toDate, setToDate] = useState<Date | null>(null)

  useEffect(() => {
    async function loadWithPage() {
      if (isFocused) {
        const data = await AsyncStorage.getItem('RenteX::datePicker')

        if (!data) return

        const { inDate, toDate } = JSON.parse(data)

        setInDate(inDate)
        setToDate(toDate)

        await handleGetApiCars({
          dates: {
            startDate: inDate,
            endDate: toDate,
          },
        })
      }
    }

    loadWithPage()
  }, [isFocused])

  const handleToggleModal = useCallback(() => {
    setModal((value) => !value)
  }, [])

  function handleToRedirectDatePicker() {
    // @ts-ignore
    navigation.navigate('DatePicker')
  }

  function handleOpenFilter() {
    handleToggleModal()
  }

  return (
    <Container>
      <Header>
        <ContentDate>
          <DateTitle>In</DateTitle>

          <DateText>
            {inDate && format(new Date(inDate), 'd LLLL yyyy')}
          </DateText>
        </ContentDate>

        <ButtonArrowDown onPress={handleToRedirectDatePicker}>
          <ArrowDown fill="#7A7A80" />
        </ButtonArrowDown>

        <ContentDate>
          <DateTitle>To</DateTitle>

          <DateText>
            {toDate && format(new Date(toDate), 'd LLLL yyyy')}
          </DateText>
        </ContentDate>
      </Header>

      <Content>
        <CarList
          data={cars}
          keyExtractor={(item) => item.plate}
          renderItem={({ item }) => <CarExtended key={item.plate} car={item} />}
          ListHeaderComponent={() => (
            <CarListHeader
              {...{
                handleOpenFilter,
                carsLength: cars?.length || 0,
              }}
            />
          )}
        />
      </Content>

      <Filter {...{ modal, handleToggleModal }} />
    </Container>
  )
}
