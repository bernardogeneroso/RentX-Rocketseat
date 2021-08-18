import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { OnBoard } from '../pages/Auth/OnBoard'
import { SignIn } from '../pages/Auth/SignIn'
import { SignUp } from '../pages/Auth/SignUp'
import { ModalStatus } from '../pages/ModalStatus'

const Stack = createStackNavigator()

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoard" component={OnBoard} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
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
