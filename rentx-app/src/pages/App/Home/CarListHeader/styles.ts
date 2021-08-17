import styled from 'styled-components/native'

import { theme } from '../../../../global/styles/theme'

export const Container = styled.View`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.grey700};
  font-size: 25px;
`

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`

export const DetailsText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey200};
  font-size: 13px;
`

export const ButtonFilter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-left: 26px;
`
