import styled, { css } from 'styled-components/native'

import { theme } from '../../../../../../global/styles/theme'

interface ContentTransmissionProps {
  active?: boolean
}

export const Container = styled.View`
  margin-top: 40px;
`

export const Header = styled.View`
  margin-bottom: 16px;
`

export const TransmissionText = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.grey700};
  font-size: 20px;
`

export const Content = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.white150};
`

export const ContentTransmission = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ContentTransmissionProps>`
  flex: 1;
  margin: 4px;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.active &&
    css`
      background-color: ${theme.colors.white};
    `}
`

export const TransmissionStatusText = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.grey700};
  font-size: 15px;
`
