import React from 'react'

import { FilterCarsProvider } from './contexts/FilterCars'

const AppProvider: React.FC = ({ children }) => (
  <FilterCarsProvider>{children}</FilterCarsProvider>
)

export default AppProvider
