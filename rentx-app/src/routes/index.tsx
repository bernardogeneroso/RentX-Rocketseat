import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

import { AuthRoutes } from './auth.routes'
import { App } from './app.routes'
import useAuth from '../hooks/useAuth'

export function Routes() {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      <NativeBaseProvider>{user ? <App /> : <AuthRoutes />}</NativeBaseProvider>
    </NavigationContainer>
  )
}
