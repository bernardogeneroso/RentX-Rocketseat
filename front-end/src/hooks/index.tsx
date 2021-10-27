import React from 'react'

import { AuthProvider } from './contexts/Auth'
import { ToastProvider } from './contexts/Toast'
import { FilterCarsProvider } from './contexts/FilterCars'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <FilterCarsProvider>{children}</FilterCarsProvider>
    </ToastProvider>
  </AuthProvider>
)

export default AppProvider
