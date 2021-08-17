import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '../../../global/styles/theme'

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
