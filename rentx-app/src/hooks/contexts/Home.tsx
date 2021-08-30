import React, { useCallback, useState, useEffect } from 'react'
import { createContext } from 'use-context-selector'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../../services/api'

interface Cars {
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
  dates?: {
    startDate: Date
    endDate: Date
  }
  filter?: {
    pricesPerDay: {
      startPricePerDay: number
      endPricePerDay: number
    }
    fuel: 'gasoline' | 'electric' | 'alcohol'
    transmission: 'auto' | 'manual'
  }
}

type DayPriceSlider = [first: number, second: number]
export type CombustionSelected = 'gasoline' | 'electric' | 'alcohol'
export type TransmissionSelected = 'auto' | 'manual'

interface HomeContextData {
  cars: Cars[] | undefined
  dayPriceSlider: DayPriceSlider
  combustionSelected: CombustionSelected
  transmissionSelected: TransmissionSelected
  loading: boolean
  handleGetApiCars(data: CarsFilter): void
  handleSetDayPriceSlider(first: number, second: number): void
  handleSetCombustionSelected(combustion: CombustionSelected): void
  handleSetTransmissionSelected(transmission: TransmissionSelected): void
  handleCleanAllFields(): void
  handleGetApiCarsWithFilters(): void
}

const HomeContext = createContext<HomeContextData>({} as HomeContextData)

const HomeProvider: React.FC = ({ children }) => {
  const [cars, setCars] = useState<Cars[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [dayPriceSlider, setDayPriceSlider] = useState<DayPriceSlider>([
    160, 380,
  ])
  const [combustionSelected, setCombustionSelected] =
    useState<CombustionSelected>('gasoline')
  const [transmissionSelected, setTransmissionSelected] =
    useState<TransmissionSelected>('auto')

  const handleGetApiCars = useCallback(
    async ({ dates, filter }: CarsFilter) => {
      let dataSearch = {}

      if (!dates) {
        const data = await AsyncStorage.getItem('RenteX::datePicker')

        if (!data) return

        const { inDate, toDate } = JSON.parse(data)

        dataSearch = {
          dates: {
            startDate: new Date(inDate),
            endDate: new Date(toDate),
          },
        }
      } else {
        dataSearch = {
          dates: {
            ...dates,
          },
        }
      }

      if (filter) {
        dataSearch = {
          ...dataSearch,
          filter,
        }
      }

      console.log(dataSearch)

      const response = await api.post('/cars/between-dates', dataSearch)

      setCars(response.data)
      setLoading(false)
    },
    []
  )

  const handleGetApiCarsWithFilters = useCallback(async () => {
    await handleGetApiCars({
      filter: {
        pricesPerDay: {
          startPricePerDay: dayPriceSlider[0],
          endPricePerDay: dayPriceSlider[1],
        },
        fuel: combustionSelected,
        transmission: transmissionSelected,
      },
    })
  }, [
    dayPriceSlider,
    combustionSelected,
    transmissionSelected,
    handleGetApiCars,
  ])

  const handleCleanAllFields = useCallback(async () => {
    setDayPriceSlider([160, 380])
    setCombustionSelected('gasoline')
    setTransmissionSelected('auto')

    await handleGetApiCars({})
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

  return (
    <HomeContext.Provider
      value={{
        cars,
        dayPriceSlider,
        combustionSelected,
        transmissionSelected,
        loading,
        handleGetApiCars,
        handleSetDayPriceSlider,
        handleSetCombustionSelected,
        handleSetTransmissionSelected,
        handleCleanAllFields,
        handleGetApiCarsWithFilters,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export { HomeProvider, HomeContext, HomeContextData }
