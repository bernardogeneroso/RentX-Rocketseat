import React from 'react'

import ArrowLeftIcon from '../../../assets/arrow-left.svg'

import { Container } from './styles'
import {
  Header,
  ContentActions,
  ButtonIcon,
  PerfilTitle,
  ContentPerfilImage,
  PerfilImage,
} from '../TabMenu/Profile/styles'

export function EditPerfil() {
  return (
    <Container>
      <Header>
        <ContentActions>
          <ButtonIcon>
            <ArrowLeftIcon />
          </ButtonIcon>

          <PerfilTitle>Edit perfil</PerfilTitle>
        </ContentActions>

        <ContentPerfilImage>
          <PerfilImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/58465456?v=4',
            }}
          />
        </ContentPerfilImage>
      </Header>
    </Container>
  )
}
