import React from 'react'

import { CarSimplified } from '../../../../components/Car/CarSimplified'
import { cars } from '../../../../utils/cars'
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
  UserNameText,
  Content,
  AppointmentsContent,
  AppointmentsCompletedText,
  AppointmentsCompletedInfoText,
  ContentFavoriteCar,
  HeaderFavoriteCar,
  FavoriteCarText,
  CarUsedTimesText,
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

      <UserNameText>Bernardo{'\n'}Generoso</UserNameText>

      <Content>
        <AppointmentsContent>
          <AppointmentsCompletedText>
            Appointments completed
          </AppointmentsCompletedText>
          <AppointmentsCompletedInfoText>05</AppointmentsCompletedInfoText>
        </AppointmentsContent>

        <ContentFavoriteCar>
          <HeaderFavoriteCar>
            <FavoriteCarText>Favorite car</FavoriteCarText>
            <CarUsedTimesText>Used 2 times</CarUsedTimesText>
          </HeaderFavoriteCar>

          <CarSimplified car={cars[cars.length - 1]} />
        </ContentFavoriteCar>
      </Content>
    </Container>
  )
}
