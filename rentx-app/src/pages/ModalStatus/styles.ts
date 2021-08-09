import styled, { css } from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '../../global/styles/theme'

interface ContentButtonProps {
  isTwoButton: boolean
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${theme.colors.background};
`

export const Content = styled.View`
  margin-top: -200px;
  padding-top: ${getStatusBarHeight() + 20}px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.grey50};
  font-size: 30px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const Subtitle = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.grey450};
  font-size: 15px;
  text-align: center;
`

export const ContentButton = styled.View<ContentButtonProps>`
  width: 100%;
  ${(props) =>
    props.isTwoButton
      ? css`
          padding-left: 20px;
          padding-right: 20px;
          justify-content: space-between;
          flex-direction: row;
        `
      : css`
          justify-content: center;
          align-items: center;
        `}
`

export const ButtonSignIn = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  margin-right: 8px;
`

export const ButtonSignUp = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.black400};
  margin-left: 8px;
`

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 80px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.black400};
  padding: 20px;
`

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.white};
  font-size: 15px;
`
