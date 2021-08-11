import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

// import { AuthRoutes } from './auth.routes'
import { ManageAppRoutes } from './manage.app.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <ManageAppRoutes />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
