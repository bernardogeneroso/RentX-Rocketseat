import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { CarSimplified } from '../../../../components/Car/CarSimplified'
import { cars } from '../../../../utils/cars'
import useAuth from '../../../../hooks/useAuth'

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
import { api } from '../../../../services/api'

interface CarFavorite {
  totalAppointments: number
  car: {
    plate: string
    brand: string
    model: string
    colour: string
    fuel: 'electric' | 'gasoline' | 'alcohol'
    transmission: 'manual' | 'auto'
    pricePerDay: number
    created_at: Date
    updated_at: Date
    used: number
    daysUsed: number
  }
}

export function Profile() {
  const navigation = useNavigation()
  const { user } = useAuth()

  const [carFavorite, setCarFavorite] = useState<CarFavorite | undefined>(
    undefined
  )

  useEffect(() => {
    async function loadWithPage() {
      const response = await api.get('/cars/favourite')

      setCarFavorite(response.data)
    }

    loadWithPage()
  }, [])

  const splitNames = useMemo(() => {
    const userNames = user.name.split(' ')

    return `${userNames[0]}\n${userNames[1]}`
  }, [user.name])

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
              uri: user.avatar_url,
            }}
          />
        </ContentProfileImage>
      </Header>

      <UserNameText>{splitNames}</UserNameText>

      <Content>
        <AppointmentsContent>
          <AppointmentsCompletedText>
            Appointments completed
          </AppointmentsCompletedText>
          <AppointmentsCompletedInfoText>
            {carFavorite?.totalAppointments}
          </AppointmentsCompletedInfoText>
        </AppointmentsContent>

        <ContentFavoriteCar>
          <HeaderFavoriteCar>
            <FavoriteCarText>Favorite car</FavoriteCarText>
            <CarUsedTimesText>
              Used {carFavorite?.car.used} times
            </CarUsedTimesText>
          </HeaderFavoriteCar>

          <CarSimplified car={cars[cars.length - 1]} />
        </ContentFavoriteCar>
      </Content>
    </Container>
  )
}
