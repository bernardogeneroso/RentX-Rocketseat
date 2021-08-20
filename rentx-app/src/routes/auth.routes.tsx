import React, { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { OnBoard } from '../pages/Auth/OnBoard'
import { SignIn } from '../pages/Auth/SignIn'
import { SignUp } from '../pages/Auth/SignUp'
import { ModalStatus } from '../pages/ModalStatus'

const Stack = createStackNavigator()

export function AuthRoutes() {
  const navigation = useNavigation()

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleModalToExitApp)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleModalToExitApp)
    }
  }, [])

  function handleModalToExitApp() {
    // @ts-ignore
    navigation.navigate('ModalStatus', {
      option: 'exitApp',
      status: 'error',
      button: 'two',
      title: 'Exit of RENTEX!',
      subtitle: 'Are you sure\nyou want do that?',
    })

    return true
  }

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
