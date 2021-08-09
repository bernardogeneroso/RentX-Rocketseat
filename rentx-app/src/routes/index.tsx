import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

// import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppRoutes />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
