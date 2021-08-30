import React from 'react'
import Modal from 'react-native-modal'

import useHome from '../../../../../hooks/useHome'
import { QuickButton } from '../../../../../components/QuickButton'
import { DayPrice } from './DayPrice'
import { Combustion } from './Combustion'
import { Transmission } from './Transmission'

import {
  ContainerModal,
  Container,
  Header,
  ContentLine,
  LineCloseModal,
  ContentHeader,
  TitleFilter,
  CleanFillText,
  Content,
  ButtonConfirm,
} from './styles'

interface FilterProps {
  modal: boolean
  handleToggleModal: () => void
}

export function Filter({ modal, handleToggleModal }: FilterProps) {
  const { handleCleanAllFields, handleToFilterCarsBetweenDates } = useHome()

  return (
    <ContainerModal>
      <Modal
        isVisible={modal}
        onSwipeComplete={handleToggleModal}
        swipeDirection="down"
        style={{
          margin: 0,
        }}
        coverScreen={false}
        useNativeDriver={false}
        propagateSwipe
      >
        <Container>
          <Header>
            <ContentLine>
              <LineCloseModal />
            </ContentLine>

            <ContentHeader>
              <TitleFilter>Filter</TitleFilter>

              <QuickButton onPress={handleCleanAllFields}>
                <CleanFillText>Clean all fields</CleanFillText>
              </QuickButton>
            </ContentHeader>
          </Header>

          <Content>
            <DayPrice />
            <Combustion />
            <Transmission />

            <ButtonConfirm
              text="Confirm"
              onPress={() => {
                handleToFilterCarsBetweenDates()
                handleToggleModal()
              }}
            />
          </Content>
        </Container>
      </Modal>
    </ContainerModal>
  )
}
