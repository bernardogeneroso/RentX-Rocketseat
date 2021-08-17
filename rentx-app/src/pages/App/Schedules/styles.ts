import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { Cars } from '../../../utils/cars'
import { theme } from '../../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  height: 113px;
  background-color: ${theme.colors.background};
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.white};
  font-size: 25px;
`

export const PeriodsText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey300};
  font-size: 13px;
`

export const Content = styled.View`
  flex: 1;
`

export const CarList = styled(FlatList as new () => FlatList<Cars>)`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`
