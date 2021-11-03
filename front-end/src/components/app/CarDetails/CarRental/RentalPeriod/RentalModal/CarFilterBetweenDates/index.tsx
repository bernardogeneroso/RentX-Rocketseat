import React, { useMemo } from 'react'
import { setCookie } from 'nookies'
import Link from 'next/link'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import { ModalCloseTarget } from 'react-spring-modal'

import { Button } from '../../../../../../Button'

import { Container } from './styles'

import ArrowLeft from '../../../../../../../pages/assets/arrowLeft.svg'
import ArrowRight from '../../../../../../../pages/assets/arrowRight.svg'

interface CarFilterBetweenDatesProps {
  modal?: boolean
  dates: [Date | null, Date | null]
  handleChangeDatesModal: (newDates: [Date, Date]) => void
}

export default function CarFilterBetweenDates({
  modal = false,
  dates,
  handleChangeDatesModal,
}: CarFilterBetweenDatesProps) {
  const datesValidation = useMemo(() => {
    if (!dates[0] || !dates[1]) return new Date()

    return dates
  }, [dates])

  function handleSaveDatesOfFilter() {
    if (!dates[0] || !dates[1]) return

    const datesStringify = JSON.stringify({
      startDate: dates[0],
      endDate: dates[1],
    })

    setCookie(null, 'rentxauth.saveDatesOfFilter', datesStringify, {
      path: '/',
    })
  }

  return (
    <Container className="container-filterBetweenDates">
      <Calendar
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(value: any) => {
          handleChangeDatesModal(value)
        }}
        // @ts-ignore
        value={datesValidation}
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
            {dates && dates[0] ? (
              <div className="time">{format(dates[0], 'd LLL yyyy')}</div>
            ) : (
              <div className="line" />
            )}
          </div>

          <div className="each">
            <div className="between">Until</div>
            {dates && dates[1] ? (
              <div className="time">{format(dates[1], 'd LLL yyyy')}</div>
            ) : (
              <div className="line" />
            )}
          </div>
        </div>

        {modal ? (
          <ModalCloseTarget>
            <Button text="Continuar" />
          </ModalCloseTarget>
        ) : !dates[0] || !dates[1] ? (
          <Button text="Continuar" disabled />
        ) : (
          <Link
            href={`/cars/filter-dates/list?startDate=${dates[0].toString()}&endDate=${dates[1].toString()}`}
            passHref
          >
            <Button text="Continuar" onClick={handleSaveDatesOfFilter} />
          </Link>
        )}
      </div>
    </Container>
  )
}
