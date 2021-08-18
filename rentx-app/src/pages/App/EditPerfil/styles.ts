import styled from 'styled-components/native'

import { theme } from '../../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
`

export const ContentActions = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ContentEditPerfil = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`

export const EditPerfilTitle = styled.Text`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.white};
  font-size: 25px;
`

export const ContentEditPerfilImage = styled.View`
  margin-bottom: 32px;
  align-items: center;
  margin-top: -95px;
`

export const SubContentEditPerfilImage = styled.View`
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
