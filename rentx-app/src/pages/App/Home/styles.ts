import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '../../../global/styles/theme'

export const Container = styled.View``

export const Header = styled.View`
  background-color: ${theme.colors.background};
  height: 120px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 25px;
  padding-top: ${getStatusBarHeight() + 25}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

export const ButtonArrowDown = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``
