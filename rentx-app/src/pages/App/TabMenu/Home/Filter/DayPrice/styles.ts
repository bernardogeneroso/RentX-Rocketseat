import styled from 'styled-components/native'
import { theme } from '../../../../../../global/styles/theme'

export const Container = styled.View`
  margin-top: 40px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const DayPriceText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey700};
  font-size: 20px;
`

export const PricesText = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.primary};
  font-size: 15px;
`

export const Content = styled.View`
  flex: 1;
  margin-top: 16px;
`
