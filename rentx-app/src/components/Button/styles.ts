import styled, { css } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

import { theme } from '../../global/styles/theme'

interface ContainerProps extends TouchableOpacityProps {}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`

export const Text = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.white};
  font-size: 15px;
`
