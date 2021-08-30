import { useContextSelector } from 'use-context-selector'
import { HomeContext, HomeContextData } from './contexts/Home'

export default function useAuth(): HomeContextData {
  const inDate = useContextSelector(HomeContext, (home) => home.inDate)
  const toDate = useContextSelector(HomeContext, (home) => home.toDate)
  const cars = useContextSelector(HomeContext, (home) => home.cars)
  const carsFilter = useContextSelector(HomeContext, (home) => home.carsFilter)
  const dayPriceSlider = useContextSelector(
    HomeContext,
    (home) => home.dayPriceSlider
  )
  const combustionSelected = useContextSelector(
    HomeContext,
    (home) => home.combustionSelected
  )
  const transmissionSelected = useContextSelector(
    HomeContext,
    (home) => home.transmissionSelected
  )
  const loading = useContextSelector(HomeContext, (home) => home.loading)

  const handleSetDates = useContextSelector(
    HomeContext,
    (home) => home.handleSetDates
  )
  const handleToFilterCarsBetweenDates = useContextSelector(
    HomeContext,
    (home) => home.handleToFilterCarsBetweenDates
  )
  const handleSetDayPriceSlider = useContextSelector(
    HomeContext,
    (home) => home.handleSetDayPriceSlider
  )
  const handleSetCombustionSelected = useContextSelector(
    HomeContext,
    (home) => home.handleSetCombustionSelected
  )
  const handleSetTransmissionSelected = useContextSelector(
    HomeContext,
    (home) => home.handleSetTransmissionSelected
  )
  const handleCleanAllFields = useContextSelector(
    HomeContext,
    (home) => home.handleCleanAllFields
  )

  const handleIsThisCarAvailableToRental = useContextSelector(
    HomeContext,
    (home) => home.handleIsThisCarAvailableToRental
  )
  const handleToRemoveCarRented = useContextSelector(
    HomeContext,
    (home) => home.handleToRemoveCarRented
  )

  return {
    inDate,
    toDate,
    cars,
    carsFilter,
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
  }
}
