import styled from 'styled-components/native'
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  padding-top: ${getStatusBarHeight() - 10}px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: space-around;
`

export const Header = styled.View``

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

export const ContentOptions = styled.View`
  margin-top: 34px;
  margin-bottom: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Remember = styled.View`
  flex-direction: row;
  align-items: center;
`

export const RememberText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey500};
  margin-left: 12px;
`

export const CheckBox = styled(BouncyCheckbox).attrs<IBouncyCheckboxProps>({
  size: 25,
  fillColor: 'red',
  unfillColor: '#FFFFFF',
  disableText: true,
  iconImageStyle: {
    width: 8,
    height: 8,
    backgroundColor: '#fff',
  },
})``

export const ButtonForgetMyPassword = styled.TouchableOpacity``

export const ForgetMyPasswordText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey500};
  font-size: 13px;
`
