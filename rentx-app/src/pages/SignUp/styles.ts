import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '../../global/styles/theme'

export const Container = styled.View`
  height: 100%;
  background-color: ${theme.colors.white};
  padding-top: ${getStatusBarHeight() + 20}px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: space-around;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonGoBack = styled.TouchableOpacity``

export const Information = styled.View``

export const Title = styled.Text`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.grey600};
  font-size: 40px;
  line-height: 40px;
`

export const Subtitle = styled.Text`
  margin-top: 24px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey300};
  font-size: 15px;
  line-height: 25px;
`

export const Form = styled.View``

export const FormTitle = styled.Text`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.grey600};
  font-size: 20px;
  margin-bottom: 24px;
`
