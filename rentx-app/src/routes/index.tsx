import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

// import { AuthRoutes } from './auth.routes'
import { App } from './app.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
