import styled from 'styled-components/native'

import { theme } from '../../global/styles/theme'

export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
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

export const ErrorText = styled.Text``
