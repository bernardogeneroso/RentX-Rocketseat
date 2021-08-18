import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '../../../../global/styles/theme'
import { Cars } from '../../../../utils/cars'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  height: 142px;
  background-color: ${theme.colors.background};
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 25px;
  padding-right: 25px;
  position: relative;
`

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.white};
  font-size: 25px;
`

export const CarInfo = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey300};
  font-size: 13px;
`

export const ContentSearch = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 83px;
  padding-top: 25px;
  padding-left: 16px;
  padding-right: 16px;
`

export const Content = styled.View`
  flex: 1;
`

export const CarList = styled(FlatList as new () => FlatList<Cars>)`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
`
