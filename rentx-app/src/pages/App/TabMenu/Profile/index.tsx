import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { CarSimplified } from '../../../../components/Car/CarSimplified'
import { cars } from '../../../../utils/cars'

import EditIcon from '../../../../assets/edit.svg'
import PowerIcon from '../../../../assets/power.svg'

import {
  Container,
  Header,
  ContentActions,
  ButtonIcon,
  ProfileTitle,
  ContentProfileImage,
  ProfileImage,
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
  const navigation = useNavigation()

  function handleRedirectToEditProfile() {
    // @ts-ignore
    navigation.navigate('EditProfile')
  }

  function handleModalToExitApp() {
    // @ts-ignore
    navigation.navigate('ModalStatus', {
      option: 'exitApp',
      status: 'error',
      button: 'two',
      title: 'Exit of RENTEX!',
      subtitle: 'Are you sure\nyou want do that?',
    })
  }

  return (
    <Container>
      <Header>
        <ContentActions>
          <ButtonIcon onPress={handleRedirectToEditProfile}>
            <EditIcon />
          </ButtonIcon>

          <ProfileTitle>Profile</ProfileTitle>

          <ButtonIcon onPress={handleModalToExitApp}>
            <PowerIcon />
          </ButtonIcon>
        </ContentActions>

        <ContentProfileImage>
          <ProfileImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/58465456?v=4',
            }}
          />
        </ContentProfileImage>
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
