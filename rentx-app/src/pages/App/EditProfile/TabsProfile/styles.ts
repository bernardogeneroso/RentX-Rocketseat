import styled, { css } from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { QuickButton } from '../../../../components/QuickButton'

import { theme } from '../../../../global/styles/theme'

interface ContentTabProps {
  active?: boolean
}

interface TextTabProps {
  active?: boolean
}

export const Container = styled.View`
  flex: 1;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: ${getBottomSpace() + 24}px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.grey100};
  margin-bottom: 24px;
`

export const ContentTab = styled(QuickButton)<ContentTabProps>`
  margin-left: 24px;
  padding-bottom: 14px;

  ${(props) =>
    props.active &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary};
    `}
`

export const TextTab = styled.Text<TextTabProps>`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.grey200};
  font-size: 20px;

  ${(props) =>
    props.active &&
    css`
      color: ${theme.colors.grey600};
    `}
`

export const Content = styled.View``
