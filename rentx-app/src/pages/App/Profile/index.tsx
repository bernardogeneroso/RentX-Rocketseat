import React from 'react'

import EditIcon from '../../../assets/edit.svg'
import PowerIcon from '../../../assets/power.svg'

import {
  Container,
  Header,
  ContentActions,
  ButtonIcon,
  PerfilTitle,
  ContentPerfilImage,
  PerfilImage,
} from './styles'

export function Profile() {
  return (
    <Container>
      <Header>
        <ContentActions>
          <ButtonIcon>
            <EditIcon />
          </ButtonIcon>

          <PerfilTitle>Perfil</PerfilTitle>

          <ButtonIcon>
            <PowerIcon />
          </ButtonIcon>
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
