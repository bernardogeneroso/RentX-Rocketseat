import React from 'react'
import { StatusBar } from 'react-native'
import { View, Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/App/Home'
import { CarListing } from '../pages/App/CarListing'
import { Schedules } from '../pages/App/Schedules'
import { Profile } from '../pages/App/Profile'

import HomeIcon from '../assets/homeicon.svg'
import CarIcon from '../assets/caricon.svg'
import ScheduleIcon from '../assets/scheduleicon.svg'
import ProfileIcon from '../assets/profileicon.svg'

const Tab = createBottomTabNavigator()

interface IconProps {
  name: string
  focused: boolean
}

function Icon({ name, focused }: IconProps) {
  if (name === 'Home') {
    return focused ? <HomeIcon fill="#DC1637" /> : <HomeIcon fill="#AEAEB3" />
  } else if (name === 'CarListing') {
    return focused ? <CarIcon fill="#DC1637" /> : <CarIcon fill="#AEAEB3" />
  } else if (name === 'Schedules') {
    return focused ? (
      <ScheduleIcon fill="#DC1637" />
    ) : (
      <ScheduleIcon fill="#AEAEB3" />
    )
  } else if (name === 'Profile') {
    return focused ? (
      <ProfileIcon fill="#DC1637" />
    ) : (
      <ProfileIcon fill="#AEAEB3" />
    )
  } else {
    return focused ? <HomeIcon fill="#DC1637" /> : <HomeIcon fill="#AEAEB3" />
  }
}

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

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
    </>
  )
}
