import styled from 'styled-components/native'

import { theme } from '../../../../global/styles/theme'

export const Container = styled.View`
  position: relative;
`

export const ContentCamera = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`
