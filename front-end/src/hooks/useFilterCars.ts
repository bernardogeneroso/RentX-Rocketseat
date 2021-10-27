import { useContextSelector } from 'use-context-selector'

import { FilterCarsContext, FilterCarsContextData } from './contexts/FilterCars'

export default function useFilterCars(): FilterCarsContextData {
  const cars = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.cars
  )
  const carsFilter = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.carsFilter
  )
  const dates = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.dates
  )
  const pricePerDay = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.pricePerDay
  )
  const fuel = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.fuel
  )
  const transmission = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.transmission
  )
  const handleSetCars = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.handleSetCars
  )
  const handleSetDates = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.handleSetDates
  )
  const handleSetPricePerDay = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.handleSetPricePerDay
  )
  const handleSetFuel = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.handleSetFuel
  )
  const handleSetTransmission = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.handleSetTransmission
  )
  const handleSetCarsFilter = useContextSelector(
    FilterCarsContext,
    (filterCars) => filterCars.handleSetCarsFilter
  )

  return {
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
  }
}
