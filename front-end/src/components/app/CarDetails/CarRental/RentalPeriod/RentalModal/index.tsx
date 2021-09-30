import React from 'react'
import { CenterModal, ModalCloseTarget } from 'react-spring-modal'

import CarFilterBetweenDates from './CarFilterBetweenDates'

import { Container, Header } from './styles'

import Close from '../../../../../../pages/assets/close.svg'

interface RentalModalProps {
  modal: boolean
  dates: [Date | null, Date | null]
  handleToggleModal: () => void
  handleChangeDatesModal: (newDates: [Date, Date]) => void
}

export default function RentalModal({
  modal,
  dates,
  handleToggleModal,
  handleChangeDatesModal,
}: RentalModalProps) {
  return (
    <CenterModal
      isOpen={modal}
      onDismiss={handleToggleModal}
      contentTransition={{
        from: { opacity: 0, transform: 'translateY(-100%) scale(0)' },
        enter: { opacity: 1, transform: 'translateY(0) scale(1)' },
        leave: { opacity: 0, transform: 'translateY(-100%) scale(0)' },
      }}
      overlayProps={{
        className: 'modalFilterBetweenDatesContent',
      }}
      contentProps={{
        style: {
          width: '100%',
          maxWidth: 744,
          padding: 0,
        },
      }}
    >
      <Container>
        <Header>
          <div className="title">Choose a rental start and end date</div>

          <ModalCloseTarget>
            <Close />
          </ModalCloseTarget>
        </Header>

        <CarFilterBetweenDates
          {...{ modal: true, dates, handleChangeDatesModal }}
        />
      </Container>
    </CenterModal>
  )
}
