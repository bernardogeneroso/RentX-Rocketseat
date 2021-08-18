import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '../../../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  height: 227px;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: ${theme.colors.background};
  position: relative;
`

export const ContentActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ButtonIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``

export const PerfilTitle = styled.Text`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.white};
  font-size: 25px;
`

export const ContentPerfilImage = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 36px;
`

export const PerfilImage = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`

export const UserNameText = styled.Text`
  margin-top: 114px;
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.grey600};
  font-size: 30px;
  text-align: center;
`

export const Content = styled.View`
  margin-top: 64px;
  padding-left: 24px;
  padding-right: 24px;
`

export const AppointmentsContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 19px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.grey150};
`

export const AppointmentsCompletedText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey300};
  font-size: 15px;
`

export const AppointmentsCompletedInfoText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey700};
  font-size: 15px;
`

export const ContentFavoriteCar = styled.View`
  margin-top: 27px;
`

export const HeaderFavoriteCar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const FavoriteCarText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey300};
  font-size: 15px;
`

export const CarUsedTimesText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey700};
  font-size: 15px;
`
