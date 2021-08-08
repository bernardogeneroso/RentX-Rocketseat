import styled from 'styled-components/native'

import { theme } from '../../global/styles/theme'

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  margin-bottom: 12px;
`

export const Icon = styled.View`
  width: 55px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white100};
  border-right-color: ${theme.colors.white};
  border-right-width: 2px;
`

export const Content = styled.View`
  height: 56px;
  flex-direction: row;
`

export const ContentInput = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${theme.colors.white100};
`

export const TextInput = styled.TextInput`
  flex: 1;
`

export const ErrorText = styled.Text`
  margin-top: 2px;
  margin-bottom: -6px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.primary};
`
