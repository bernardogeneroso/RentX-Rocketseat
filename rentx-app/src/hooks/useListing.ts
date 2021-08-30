import { useContextSelector } from 'use-context-selector'
import { ListingContext, ListingContextData } from './contexts/Listing'

export default function useAuth(): ListingContextData {
  const cars = useContextSelector(ListingContext, (listing) => listing.cars)
  const carsFilter = useContextSelector(
    ListingContext,
    (listing) => listing.carsFilter
  )
  const loading = useContextSelector(
    ListingContext,
    (listing) => listing.loading
  )
  const handleWithCarsFilter = useContextSelector(
    ListingContext,
    (listing) => listing.handleWithCarsFilter
  )

  return {
    cars,
    carsFilter,
    loading,
    handleWithCarsFilter,
  }
}
