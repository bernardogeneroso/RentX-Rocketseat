import styled from 'styled-components/native'

import { theme } from '../../global/styles/theme'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 240px;
  padding: 24px;
  margin-top: 16px;
  background-color: ${theme.colors.white150};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.grey100};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 14px;
`

export const CarDetails = styled.View`
  flex-direction: column;
`

export const CarText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey200};
  text-transform: uppercase;
  font-size: 10px;
`

export const CarModel = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey700};
  font-size: 20px;
  text-align: center;
`

export const CarPrice = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.primary};
  font-size: 20px;
`

export const Content = styled.View`
  flex: 1;
`

export const CarImage = styled.Image`
  flex: 1;
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const CarFuel = styled.View``

export const ContainerSlider = styled.View`
  flex-direction: row;
`
