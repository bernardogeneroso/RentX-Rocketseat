import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useTheme } from 'styled-components'
import { format, differenceInDays } from 'date-fns'
import { FaChevronRight } from 'react-icons/fa'

import { Button } from '../../../../Button'
import ModalStatus from '../../../ModalStatus'
import { priceFormatter } from '../../../../../utils/priceFormatter'
import { api } from '../../../../../services/api'

import { Container, Header, Content, ContentTotal } from './styles'

import Calendar from '../../../../../pages/assets/calendar.svg'
import RentalModal from './RentalModal'

interface RentalPeriodProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles: any
  isActive: boolean
  carInfo: {
    plate: string
    pricePerDay: number
  }
}

interface ModalStatusContent {
  title: string
  subtitle: string
  done: boolean
}

export default function RentalPeriod({
  styles,
  isActive,
  carInfo: { plate, pricePerDay },
}: RentalPeriodProps) {
  const theme = useTheme()

  const [modal, setModal] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  const [modalStatusContent, setModalStatusContent] =
    useState<ModalStatusContent>({} as ModalStatusContent)
  const [dates, setDates] = useState<[Date, Date]>([new Date(), new Date()])

  const daysBetweenDates = useMemo(() => {
    const days = differenceInDays(dates[1], dates[0])

    return days === 0 ? 1 : days + 1
  }, [dates])

  const totalPrice = useMemo(() => {
    return daysBetweenDates * pricePerDay
  }, [daysBetweenDates, pricePerDay])

  const handleToggleModal = useCallback(() => {
    setModal((state) => !state)
  }, [])

  const handleToggleModalStatus = useCallback(() => {
    setModalStatus((state) => !state)
  }, [])

  const handleChangeDatesModal = useCallback((newDates: [Date, Date]) => {
    setDates(newDates)
  }, [])

  async function handleRental() {
    // Todo: must be logged in to access, verification

    try {
      await api.post('/cars/appointments', {
        carId: plate,
        start_in: dates[0],
        end_in: dates[1],
      })

      setModalStatusContent({
        done: true,
        title: 'Rented car!',
        subtitle:
          'Now you just need to go to the dealership from RentX pick up your car.',
      })
    } catch {
      setModalStatusContent({
        done: true,
        title: 'Car not available to rent!',
        subtitle: `Try another dates, because you chose it is busy. Unavailable dates between ${format(
          dates[0],
          'd LLL yyyy'
        )} and ${format(dates[1], 'd LLL yyyy')}`,
      })
    }

    handleToggleModalStatus()
  }

  useEffect(() => {
    if (isActive) {
      handleToggleModal()
    }
  }, [isActive, handleToggleModal])

  return (
    <Container
      style={{
        position: 'absolute',
        ...styles,
      }}
    >
      <Content>
        <Header>
          <div className="content">
            <div className="each">
              <div className="between">To</div>
              {dates && dates[0] && (
                <div className="time">{format(dates[0], 'd LLL yyyy')}</div>
              )}
            </div>

            <FaChevronRight size={12} />

            <div className="each">
              <div className="between">Until</div>
              {dates && dates[1] && (
                <div className="time">{format(dates[1], 'd LLL yyyy')}</div>
              )}
            </div>
          </div>

          <button onClick={handleToggleModal}>
            <Calendar />
          </button>
        </Header>

        <ContentTotal>
          <div className="each">
            <div className="total">Total</div>
            <div className="rental-counts">{`${priceFormatter(
              pricePerDay
            )} x ${daysBetweenDates} per day`}</div>
          </div>

          <div className="rentalTotal">{priceFormatter(totalPrice)}</div>
        </ContentTotal>
      </Content>

      <Button
        text="Rental now"
        onClick={handleRental}
        backgroundColor={theme.colors.green}
      />

      <RentalModal
        {...{ modal, handleToggleModal, dates, handleChangeDatesModal }}
      />

      <ModalStatus
        modal={modalStatus}
        {...{
          handleToggleModalStatus,
          content: modalStatusContent,
        }}
      />
    </Container>
  )
}
