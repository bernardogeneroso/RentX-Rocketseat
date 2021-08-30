import { useContextSelector } from 'use-context-selector'
import { HomeContext, HomeContextData } from './contexts/Home'

export default function useAuth(): HomeContextData {
  const cars = useContextSelector(HomeContext, (home) => home.cars)
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

  const handleGetApiCars = useContextSelector(
    HomeContext,
    (home) => home.handleGetApiCars
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
  const handleGetApiCarsWithFilters = useContextSelector(
    HomeContext,
    (home) => home.handleGetApiCarsWithFilters
  )

  return {
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
  }
}
