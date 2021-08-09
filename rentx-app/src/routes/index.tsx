import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

import { AuthRoutes } from './auth.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthRoutes />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
