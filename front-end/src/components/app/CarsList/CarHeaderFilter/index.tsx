import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { FaChevronRight } from 'react-icons/fa'

import Calendar from '../../../../pages/assets/calendar.svg'
import Menu from '../../../../pages/assets/menu.svg'
import ModalFilter from './ModalFilter'

import { Container, Content } from './styles'

interface CarHeaderFilterProps {
  carsLength: number | null
  dates: [Date, Date]
}

export default function CarHeaderFilter({
  carsLength,
  dates,
}: CarHeaderFilterProps) {
  const [modalFilter, setModalFilter] = useState(false)

  const handleToggleModalFilter = useCallback(() => {
    setModalFilter((state) => !state)
  }, [])

  return (
    <Container>
      <h1>
        {carsLength
          ? carsLength > 1
            ? `${carsLength} cars found`
            : `${carsLength} car found`
          : 'No cars available'}
      </h1>

      <Content>
        <div className="dates">
          <div className="each">
            <div className="between">To</div>
            {dates && dates[0] ? (
              <div className="time">{format(dates[0], 'd LLL yyyy')}</div>
            ) : (
              <div>--</div>
            )}
          </div>

          <FaChevronRight size={12} />

          <div className="each">
            <div className="between">Until</div>
            {dates && dates[1] ? (
              <div className="time">{format(dates[1], 'd LLL yyyy')}</div>
            ) : (
              <div>--</div>
            )}
          </div>
        </div>

        <div className="optionFilter">
          <Link href="/cars/filter-dates/" passHref>
            <button>
              <Calendar />
            </button>
          </Link>

          <div className="line">
            <span />
          </div>

          <button onClick={handleToggleModalFilter}>
            <Menu />
          </button>
        </div>
      </Content>

      <ModalFilter {...{ modalFilter, handleToggleModalFilter }} />
    </Container>
  )
}
