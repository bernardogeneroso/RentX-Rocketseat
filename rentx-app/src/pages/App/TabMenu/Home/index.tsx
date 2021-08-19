import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { cars } from '../../../../utils/cars'

import { Filter } from './Filter'
import { CarExtended } from '../../../../components/Car/CarExtended'
import { CarListHeader } from './CarListHeader'

import ArrowDown from '../../../../assets/arrow-down.svg'
import { ContentDate, DateText, DateTitle } from '../../DatePicker/styles'
import { Container, Header, ButtonArrowDown, Content, CarList } from './styles'

export function Home() {
  const navigation = useNavigation()

  const [modal, setModal] = useState(false)
  const [inDate, setInDate] = useState<Date | null>(null)
  const [toDate, setToDate] = useState<Date | null>(null)

  useEffect(() => {
    async function loadWithPage() {
      const data = await AsyncStorage.getItem('RenteX::datePicker')

      if (!data) return

      const parseData = JSON.parse(data)

      setInDate(parseData.inDate)
      setToDate(parseData.toDate)
    }

    loadWithPage()
  }, [])

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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CarExtended key={item.id} car={item} />}
          ListHeaderComponent={() => (
            <CarListHeader {...{ handleOpenFilter }} />
          )}
        />
      </Content>

      <Filter {...{ modal, handleToggleModal }} />
    </Container>
  )
}
