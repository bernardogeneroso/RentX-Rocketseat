import React, { useState, useCallback } from 'react'

import CarFilterBetweenDates from '../CarDetails/CarRental/RentalPeriod/RentalModal/CarFilterBetweenDates'

import { Container } from './styles'

export default function CarFilterDates() {
  const [dates, setDates] = useState<[Date | null, Date | null]>([null, null])

  const handleChangeDatesModal = useCallback((newDates: [Date, Date]) => {
    setDates(newDates)
  }, [])

  return (
    <Container>
      <CarFilterBetweenDates {...{ dates, handleChangeDatesModal }} />
    </Container>
  )
}
