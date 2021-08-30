import React from 'react'

import { AuthProvider } from './contexts/Auth'
import { HomeProvider } from './contexts/Home'
import { ListingProvider } from './contexts/Listing'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <HomeProvider>
      <ListingProvider>{children}</ListingProvider>
    </HomeProvider>
  </AuthProvider>
)

export default AppProvider
