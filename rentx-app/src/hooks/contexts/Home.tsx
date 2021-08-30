import React, { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../../services/api'

export interface Cars {
  plate: string
  brand: string
  model: string
  colour: string
  fuel: 'electric' | 'gasoline' | 'alcohol'
  transmission: 'manual' | 'auto'
  pricePerDay: number
  created_at: Date
  updated_at: Date
  used: number
  daysUsed: number
  carsImages: {
    url: string
    carId: string
  }[]
}

interface CarsFilter {
  pricesPerDay: {
    startPricePerDay: number
    endPricePerDay: number
  }
  fuel: 'gasoline' | 'electric' | 'alcohol'
  transmission: 'auto' | 'manual'
}

type DayPriceSlider = [first: number, second: number]
export type CombustionSelected = 'gasoline' | 'electric' | 'alcohol'
export type TransmissionSelected = 'auto' | 'manual'

interface HomeContextData {
  cars: Cars[] | undefined
  carsFilter: Cars[] | undefined
  inDate: Date | null
  toDate: Date | null
  dayPriceSlider: DayPriceSlider
  combustionSelected: CombustionSelected
  transmissionSelected: TransmissionSelected
  loading: boolean
  handleSetDates(inDate: Date, toDate: Date): void
  handleToFilterCarsBetweenDates(): void
  handleSetDayPriceSlider(first: number, second: number): void
  handleSetCombustionSelected(combustion: CombustionSelected): void
  handleSetTransmissionSelected(transmission: TransmissionSelected): void
  handleCleanAllFields(): void
  handleIsThisCarAvailableToRental(plate: string): boolean
  handleToRemoveCarRented(plate: string): void
}

const HomeContext = createContext<HomeContextData>({} as HomeContextData)

const HomeProvider: React.FC = ({ children }) => {
  const [inDate, setInDate] = useState<Date | null>(null)
  const [toDate, setToDate] = useState<Date | null>(null)
  const [cars, setCars] = useState<Cars[] | undefined>(undefined)
  const [carsFilter, setCarsFilter] = useState<Cars[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [dayPriceSlider, setDayPriceSlider] = useState<DayPriceSlider>([
    160, 380,
  ])
  const [combustionSelected, setCombustionSelected] =
    useState<CombustionSelected>('gasoline')
  const [transmissionSelected, setTransmissionSelected] =
    useState<TransmissionSelected>('auto')

  useEffect(() => {
    if (inDate && toDate) {
      async function loadWithPage() {
        const response = await api.post('/cars/between-dates', {
          dates: {
            startDate: new Date(inDate || ''),
            endDate: new Date(toDate || ''),
          },
        })

        setCars(response.data)
        setLoading(false)
      }

      loadWithPage()
    }
  }, [inDate, toDate])

  const handleSetDates = useCallback((inDate: Date, toDate: Date) => {
    setInDate(inDate)
    setToDate(toDate)
  }, [])

  const handleToFilterCarsBetweenDates = useCallback(async () => {
    const dataSearch = {
      dates: {
        startDate: inDate,
        endDate: toDate,
      },
      filter: {
        pricesPerDay: {
          startPricePerDay: dayPriceSlider[0],
          endPricePerDay: dayPriceSlider[1],
        },
        fuel: combustionSelected,
        transmission: transmissionSelected,
      },
    }

    const response = await api.post('/cars/between-dates', dataSearch)

    setCarsFilter(response.data)
  }, [inDate, toDate, dayPriceSlider, combustionSelected, transmissionSelected])

  const handleCleanAllFields = useCallback(async () => {
    setDayPriceSlider([160, 380])
    setCombustionSelected('gasoline')
    setTransmissionSelected('auto')

    setCarsFilter(undefined)
  }, [])

  const handleSetTransmissionSelected = useCallback(
    (transmission: TransmissionSelected) => {
      console.log('transmission', transmission)
      setTransmissionSelected(transmission)
    },
    []
  )

  const handleSetCombustionSelected = useCallback(
    (combustion: CombustionSelected) => {
      setCombustionSelected(combustion)
    },
    []
  )

  const handleSetDayPriceSlider = useCallback(
    (first: number, second: number) => {
      setDayPriceSlider([first, second])
    },
    []
  )

  const handleIsThisCarAvailableToRental = useCallback(
    (plate: string) => {
      if (!cars) return false

      return !!cars.find((car) => car.plate === plate)
    },
    [cars]
  )

  const handleToRemoveCarRented = useCallback((plate: string) => {
    setCars((state) => {
      return state?.filter((car) => car.plate !== plate)
    })
  }, [])

  return (
    <HomeContext.Provider
      value={{
        cars,
        carsFilter,
        inDate,
        toDate,
        dayPriceSlider,
        combustionSelected,
        transmissionSelected,
        loading,
        handleSetDates,
        handleToFilterCarsBetweenDates,
        handleSetDayPriceSlider,
        handleSetCombustionSelected,
        handleSetTransmissionSelected,
        handleCleanAllFields,
        handleIsThisCarAvailableToRental,
        handleToRemoveCarRented,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export { HomeProvider, HomeContext, HomeContextData }
