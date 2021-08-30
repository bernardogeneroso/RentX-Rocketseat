import React, { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../../services/api'
import useAuth from '../useAuth'

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

interface ListingContextData {
  cars: Cars[] | undefined
  carsFilter: Cars[] | undefined
  loading: boolean
  handleWithCarsFilter(search: string): Promise<Cars[]> | void
}

const ListingContext = createContext<ListingContextData>(
  {} as ListingContextData
)

const ListingProvider: React.FC = ({ children }) => {
  const { user } = useAuth()

  const [cars, setCars] = useState<Cars[] | undefined>(undefined)
  const [carsFilter, setCarsFilter] = useState<Cars[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      async function loadWithPage() {
        const response = await api.get('/cars')

        setCars(response.data)
        setLoading(false)
      }

      loadWithPage()
    }
  }, [user])

  const handleWithCarsFilter = useCallback(async (search: string) => {
    if (!search) {
      setCarsFilter(undefined)
      return
    }

    const response = await api.get(`/cars?search=${search}`)

    setCarsFilter(response.data)

    return response.data
  }, [])

  return (
    <ListingContext.Provider
      value={{
        cars,
        carsFilter,
        loading,
        handleWithCarsFilter,
      }}
    >
      {children}
    </ListingContext.Provider>
  )
}

export { ListingProvider, ListingContext, ListingContextData }
