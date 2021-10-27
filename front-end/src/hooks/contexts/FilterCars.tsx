import React, { useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../../services/api'
import { ICar } from '../../pages/cars'

export type IFuel = 'Gasoline' | 'Electric' | 'Alcohol'
export type ITransmission = 'Automatic' | 'Manual'

export interface FilterCarsContextData {
  cars: ICar[] | null
  carsFilter: ICar[] | null
  dates: [Date, Date] | null
  pricePerDay: number[]
  fuel: IFuel
  transmission: ITransmission
  handleSetCars: (cars: ICar[] | null) => void
  handleSetDates: (datesReceived: [Date, Date]) => void
  handleSetPricePerDay: (pricesBetween: number[]) => void
  handleSetFuel: (fuelOption: IFuel) => void
  handleSetTransmission: (transmissionReceived: ITransmission) => void
  handleSetCarsFilter: (cleanFilter?: boolean) => void
}

const FilterCarsContext = createContext<FilterCarsContextData>(
  {} as FilterCarsContextData
)

const FilterCarsProvider: React.FC = ({ children }) => {
  const [cars, setCars] = useState<ICar[] | null>(null)
  const [carsFilter, setCarsFilter] = useState<ICar[] | null>(null)
  const [dates, setDates] = useState<[Date, Date] | null>(null)
  const [pricePerDay, setPricePerDay] = useState([160, 600])
  const [fuel, setFuel] = useState<IFuel>('Gasoline')
  const [transmission, setTransmission] = useState<ITransmission>('Automatic')

  const handleSetCars = useCallback((cars: ICar[] | null) => {
    setCars(cars)
  }, [])

  const handleSetDates = useCallback((datesReceived: [Date, Date]) => {
    setDates(datesReceived)
  }, [])

  const handleSetPricePerDay = useCallback((pricesBetween: number[]) => {
    setPricePerDay(pricesBetween)
  }, [])

  const handleSetFuel = useCallback((fuelOption: IFuel) => {
    setFuel(fuelOption)
  }, [])

  const handleSetCarsFilter = useCallback(
    async (cleanFilter?: boolean) => {
      if (cleanFilter) {
        setCarsFilter(null)
        return
      }

      if (!dates) return

      try {
        const { data } = await api.post(`/cars/between-dates`, {
          dates: {
            startDate: dates[0],
            endDate: dates[1],
          },
          filter: {
            pricesPerDay: {
              startPricePerDay: pricePerDay[0],
              endPricePerDay: pricePerDay[1],
            },
            fuel: fuel.toLowerCase(),
            transmission: transmission === 'Automatic' ? 'auto' : 'manual',
          },
        })

        setCarsFilter(data)
      } catch {}
    },
    [dates, fuel, pricePerDay, transmission]
  )

  const handleSetTransmission = useCallback(
    (transmissionReceived: ITransmission) => {
      setTransmission(transmissionReceived)
    },
    []
  )

  return (
    <FilterCarsContext.Provider
      value={{
        cars,
        carsFilter,
        dates,
        pricePerDay,
        fuel,
        transmission,
        handleSetCars,
        handleSetDates,
        handleSetPricePerDay,
        handleSetFuel,
        handleSetTransmission,
        handleSetCarsFilter,
      }}
    >
      {children}
    </FilterCarsContext.Provider>
  )
}

export { FilterCarsProvider, FilterCarsContext }
