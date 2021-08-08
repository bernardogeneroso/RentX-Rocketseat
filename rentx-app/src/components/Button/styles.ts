import styled from 'styled-components/native'

import { theme } from '../../global/styles/theme'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.white};
  font-size: 15px;
`
