import React from 'react'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import { CenterModal, ModalCloseTarget } from 'react-spring-modal'

import { Button } from '../../../../../Button'

import { Container, Header, Content } from './styles'

import Close from '../../../../../../pages/assets/close.svg'
import ArrowLeft from '../../../../../../pages/assets/arrowLeft.svg'
import ArrowRight from '../../../../../../pages/assets/arrowRight.svg'

interface RentalModalProps {
  modal: boolean
  dates: [Date, Date]
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

        <Content>
          <Calendar
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(value: any) => {
              handleChangeDatesModal(value)
            }}
            value={dates}
            calendarType="ISO 8601"
            className="calendar"
            returnValue="range"
            minDate={new Date()}
            prevLabel={<ArrowLeft className="arrow-left" />}
            nextLabel={<ArrowRight className="arrow-right" />}
            selectRange
          />

          <div className="time">
            <div className="content">
              <div className="each">
                <div className="between">To</div>
                {dates && dates[0] && (
                  <div className="time">{format(dates[0], 'd LLL yyyy')}</div>
                )}
              </div>

              <div className="each">
                <div className="between">Until</div>
                {dates && dates[1] && (
                  <div className="time">{format(dates[1], 'd LLL yyyy')}</div>
                )}
              </div>
            </div>

            <ModalCloseTarget>
              <Button text="Confirm" />
            </ModalCloseTarget>
          </div>
        </Content>
      </Container>
    </CenterModal>
  )
}
