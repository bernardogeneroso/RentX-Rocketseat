import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { DatePicker } from '../pages/App/DatePicker'
import { ModalStatus } from '../pages/Auth/ModalStatus'

const Stack = createStackNavigator()

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DatePicker" component={DatePicker} />
      <Stack.Screen
        name="ModalStatus"
        component={ModalStatus}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  )
}
