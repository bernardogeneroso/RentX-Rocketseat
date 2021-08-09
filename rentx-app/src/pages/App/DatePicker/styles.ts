import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '../../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`

export const Header = styled.View`
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${getStatusBarHeight() + 20}px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  height: 292px;
  background-color: ${theme.colors.background};
`

export const Title = styled.Text`
  font-family: ${theme.fonts.title600};
  font-size: 30px;
  color: ${theme.colors.white};
`

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ContentDate = styled.View`
  flex-direction: column;
`

export const DateView = styled.View`
  width: 120px;
  margin-top: 27px;
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.grey300};
`

export const DateTitle = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey300};
  font-size: 10px;
  text-transform: uppercase;
`

export const DateText = styled.Text`
  margin-top: 9px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.white};
  font-size: 15px;
`
