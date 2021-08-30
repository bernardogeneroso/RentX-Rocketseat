import React from 'react'

import { AuthProvider } from './contexts/Auth'
import { HomeProvider } from './contexts/Home'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <HomeProvider>{children}</HomeProvider>
  </AuthProvider>
)

export default AppProvider
