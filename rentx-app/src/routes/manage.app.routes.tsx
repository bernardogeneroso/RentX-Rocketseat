import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { DatePicker } from '../pages/App/DatePicker'
import { ModalStatus } from '../pages/Auth/ModalStatus'
import App from './app.routes'

const Stack = createStackNavigator()

export function ManageAppRoutes() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="DatePicker"
      >
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="DatePicker" component={DatePicker} />
        <Stack.Screen
          name="ModalStatus"
          component={ModalStatus}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </>
  )
}
