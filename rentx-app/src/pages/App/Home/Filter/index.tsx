import React from 'react'
import Modal from 'react-native-modal'

import { QuickButton } from '../../../../components/QuickButton'
import { DayPrice } from './DayPrice'

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
} from './styles'

interface FilterProps {
  modal: boolean
  handleToggleModal: () => void
}

export function Filter({ modal, handleToggleModal }: FilterProps) {
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

              <QuickButton>
                <CleanFillText>Clean all fields</CleanFillText>
              </QuickButton>
            </ContentHeader>
          </Header>

          <Content>
            <DayPrice />
          </Content>
        </Container>
      </Modal>
    </ContainerModal>
  )
}
