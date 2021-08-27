import React from 'react'

import { AuthProvider } from './contexts/Auth'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
)

export default AppProvider
