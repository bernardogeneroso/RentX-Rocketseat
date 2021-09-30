import React from 'react'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import { ModalCloseTarget } from 'react-spring-modal'

import { Button } from '../../../../../../Button'

import { Container } from './styles'

import ArrowLeft from '../../../../../../../pages/assets/arrowLeft.svg'
import ArrowRight from '../../../../../../../pages/assets/arrowRight.svg'

interface CarFilterBetweenDatesProps {
  dates: [Date, Date]
  handleChangeDatesModal: (newDates: [Date, Date]) => void
}

export default function CarFilterBetweenDates({
  dates,
  handleChangeDatesModal,
}: CarFilterBetweenDatesProps) {
  return (
    <Container>
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
    </Container>
  )
}
