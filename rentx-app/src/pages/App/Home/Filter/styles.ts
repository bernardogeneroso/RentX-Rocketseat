import styled from 'styled-components/native'

import { theme } from '../../../../global/styles/theme'

export const ContainerModal = styled.View`
  flex: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  padding-top: 16px;
`

export const Header = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.grey100};
  padding-bottom: 24px;
`

export const ContentLine = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 29px;
`

export const LineCloseModal = styled.View`
  width: 48px;
  height: 4px;
  background-color: ${theme.colors.grey100};
  border-radius: 100px;
`

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TitleFilter = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey700};
  font-size: 25px;
`

export const CleanFillText = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.grey200};
  font-size: 15px;
`

export const Content = styled.View`
  flex: 1;
`
