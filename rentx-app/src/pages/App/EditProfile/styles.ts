import styled from 'styled-components/native'

import { theme } from '../../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`

export const ContentActions = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ContentEditProfile = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`

export const EditProfileTitle = styled.Text`
  font-family: ${theme.fonts.title600};
  color: ${theme.colors.white};
  font-size: 25px;
`

export const ContentEditProfileImage = styled.View`
  margin-bottom: 32px;
  align-items: center;
  margin-top: -95px;
`

export const SubContentEditProfileImage = styled.View`
  position: relative;
`
