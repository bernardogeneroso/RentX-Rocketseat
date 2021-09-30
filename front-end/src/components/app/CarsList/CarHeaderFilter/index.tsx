import React from 'react'
import { format } from 'date-fns'
import { FaChevronRight } from 'react-icons/fa'

import { Container, Content } from './styles'

import Calendar from '../../../../pages/assets/calendar.svg'
import Menu from '../../../../pages/assets/menu.svg'

interface CarHeaderFilterProps {
  cars: number | null
  dates: [Date, Date]
}

export default function CarHeaderFilter({ cars, dates }: CarHeaderFilterProps) {
  return (
    <Container>
      <h1>
        {cars
          ? cars > 1
            ? `${cars} cars found`
            : `${cars} car found`
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
          <button>
            <Calendar />
          </button>

          <div className="line">
            <span />
          </div>

          <button>
            <Menu />
          </button>
        </div>
      </Content>
    </Container>
  )
}
