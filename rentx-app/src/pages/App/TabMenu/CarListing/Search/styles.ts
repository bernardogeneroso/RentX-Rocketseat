import styled, { css } from 'styled-components/native'

import { theme } from '../../../../../global/styles/theme'

interface ContentInputProps {
  searchMode: boolean
}

interface InputProps {
  searchMode: boolean
}

interface ContentSearchProps {
  searchMode: boolean
}

export const Container = styled.View``

export const ContentInput = styled.View<ContentInputProps>`
  background-color: ${theme.colors.white};
  flex: 1;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.searchMode &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.grey100};
    `}
`

export const Input = styled.TextInput<InputProps>`
  flex: 1;
  height: 56px;
  margin-right: 2px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.grey100};
  background-color: ${theme.colors.white150};
  padding-left: 24px;
  padding-right: 24px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey300};

  ${(props) =>
    props.searchMode &&
    css`
      background-color: ${theme.colors.white};
      border-bottom-width: 0px;
    `}
`

export const ContentSearch = styled.View<ContentSearchProps>`
  background-color: ${theme.colors.white150};
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.grey100};

  ${(props) =>
    props.searchMode &&
    css`
      background-color: ${theme.colors.white};
      border-bottom-width: 0px;
      width: auto;
      padding-right: 16px;
    `}
`

export const ContentSearchText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey200};
`

export const ContentResultSearch = styled.View`
  background-color: ${theme.colors.white};
`

export const ContentResult = styled.View`
  flex-direction: row;
  align-items: center;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.grey100};
`

export const ContentResultText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.grey300};
  line-height: 18px;
  font-size: 15px;
`
export const ContentResultTextBold = styled.Text`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.grey700};
  line-height: 32px;
  font-size: 15px;
`
