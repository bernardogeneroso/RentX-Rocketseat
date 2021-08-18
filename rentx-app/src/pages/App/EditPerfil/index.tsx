import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { TabsPerfil } from './TabsPerfil'

import ArrowLeftIcon from '../../../assets/arrow-left.svg'
import CameraIcon from '../../../assets/camera.svg'

import { Header, ButtonIcon, PerfilImage } from '../TabMenu/Profile/styles'
import {
  Container,
  ContentActions,
  ContentEditPerfil,
  EditPerfilTitle,
  ContentEditPerfilImage,
  SubContentEditPerfilImage,
  ContentCamera,
} from './styles'

export function EditPerfil() {
  const navigation = useNavigation()

  function handleRedirectBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <ContentActions>
          <ButtonIcon onPress={handleRedirectBack}>
            <ArrowLeftIcon />
          </ButtonIcon>

          <ContentEditPerfil>
            <EditPerfilTitle>Edit perfil</EditPerfilTitle>
          </ContentEditPerfil>
        </ContentActions>
      </Header>

      <ContentEditPerfilImage>
        <SubContentEditPerfilImage>
          <PerfilImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/58465456?v=4',
            }}
          />

          <ContentCamera>
            <CameraIcon />
          </ContentCamera>
        </SubContentEditPerfilImage>
      </ContentEditPerfilImage>

      <TabsPerfil />
    </Container>
  )
}
