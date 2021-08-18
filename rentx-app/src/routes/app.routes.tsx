import React from 'react'
import { StatusBar } from 'react-native'
import { View, Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { DatePicker } from '../pages/App/DatePicker'
import { EditPerfil } from '../pages/App/EditPerfil'
import { ModalStatus } from '../pages/ModalStatus'

import { Home } from '../pages/App/TabMenu/Home'
import { CarListing } from '../pages/App/TabMenu/CarListing'
import { Schedules } from '../pages/App/TabMenu/Schedules'
import { Profile } from '../pages/App/TabMenu/Profile'

import HomeIcon from '../assets/homeicon.svg'
import CarIcon from '../assets/caricon.svg'
import ScheduleIcon from '../assets/scheduleicon.svg'
import ProfileIcon from '../assets/profileicon.svg'

const StackApp = createStackNavigator()
const Tab = createBottomTabNavigator()

interface IconProps {
  name: string
  focused: boolean
}

function Icon({ name, focused }: IconProps) {
  switch (name) {
    case 'Home':
      return <HomeIcon fill={focused ? '#DC1637' : '#AEAEB3'} />
    case 'CarListing':
      return <CarIcon fill={focused ? '#DC1637' : '#AEAEB3'} />
    case 'Schedules':
      return <ScheduleIcon fill={focused ? '#DC1637' : '#AEAEB3'} />
    case 'Profile':
      return <ProfileIcon fill={focused ? '#DC1637' : '#AEAEB3'} />
    default:
      return <HomeIcon fill={focused ? '#DC1637' : '#AEAEB3'} />
  }
}

export function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <StackApp.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="DatePicker"
      >
        <StackApp.Screen name="TabMenu" component={TabMenu} />
        <StackApp.Screen name="DatePicker" component={DatePicker} />
        <StackApp.Screen name="EditPerfil" component={EditPerfil} />
        <StackApp.Screen
          name="ModalStatus"
          component={ModalStatus}
          options={{
            presentation: 'modal',
          }}
        />
      </StackApp.Navigator>
    </>
  )
}

function TabMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Icon {...{ name: route.name, focused }} />

              <View
                style={{
                  marginTop: 11,
                  width: 4,
                  height: 2,
                  backgroundColor: focused ? '#DC1637' : '#FFFF',
                }}
              />
            </View>
          )
        },
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? getBottomSpace() + 66 : 66,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CarListing" component={CarListing} />
      <Tab.Screen name="Schedules" component={Schedules} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
