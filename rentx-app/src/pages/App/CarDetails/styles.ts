import styled, { css } from 'styled-components/native'
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper'

import { theme } from '../../../global/styles/theme'

interface ContentDetailsProps {
  leftActive?: boolean
  rightActive?: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 24}px;
  padding-left: 24px;
  padding-right: 24px;
`

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ContainerFlatListSlider = styled.View`
  margin-top: -30px;
  justify-content: center;
  align-items: center;
`

export const ContentFlatListSlider = styled.View`
  height: 220px;
  width: 320px;
  margin-top: 24px;
`

export const Content = styled.View`
  padding-left: 24px;
  padding-right: 24px;
`

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CarDetail = styled.View``

export const CarText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey200};
  font-size: 10px;
  text-transform: uppercase;
`

export const CarModel = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey700};
  font-size: 25px;
`

export const CarPrice = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.primary};
  font-size: 25px;
`

export const ContainerDetails = styled.View`
  margin-top: 24px;
`

export const ContentDetailsSeparation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 7px;
`

export const ContentDetails = styled.View<ContentDetailsProps>`
  flex: 1;
  height: 92px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white150};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.grey100};

  ${(props) =>
    props.leftActive &&
    css`
      margin-left: 8px;
    `}

  ${(props) =>
    props.rightActive &&
    css`
      margin-right: 8px;
    `}
`

export const DetailText = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.grey300};
  font-size: 13px;
  margin-top: 14px;
`

export const ContentTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const TimeDetails = styled.View``

export const TimeForText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey200};
  text-transform: uppercase;
  font-size: 10px;
`

export const TimeText = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.primary};
  font-size: 15px;
`

export const Footer = styled.View`
  background-color: ${theme.colors.white150};
  margin-top: auto;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: ${getBottomSpace() + 18}px;
`

export const ContentFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const AluguerStatus = styled.View``

export const TotalText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey350};
  text-transform: uppercase;
  font-size: 10px;
  margin-bottom: 8px;
`

export const AluguerCalcText = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.grey700};
  font-size: 15px;
`

export const TotalCountText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey600};
  font-size: 24px;
`
