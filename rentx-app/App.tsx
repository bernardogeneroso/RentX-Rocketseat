import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter'
import {
  Archivo_500Medium,
  Archivo_600SemiBold,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo'

import { Routes } from './src/routes'
import { OnBoard } from './src/pages/OnBoard'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold,
  })

  if (!fontsLoaded) return AppLoading

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />

      <Routes />
    </>
  )
}
