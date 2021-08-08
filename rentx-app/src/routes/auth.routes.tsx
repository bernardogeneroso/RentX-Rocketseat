import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { OnBoard } from '../pages/OnBoard'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

const Stack = createStackNavigator()

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OnBoard" component={OnBoard} />
    </Stack.Navigator>
  )
}
