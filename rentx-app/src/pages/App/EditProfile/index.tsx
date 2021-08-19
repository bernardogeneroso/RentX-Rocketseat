import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { TabsProfile } from './TabsProfile'

import ArrowLeftIcon from '../../../assets/arrow-left.svg'
import CameraIcon from '../../../assets/camera.svg'

import { Header, ButtonIcon, ProfileImage } from '../TabMenu/Profile/styles'
import {
  Container,
  ContentActions,
  ContentEditProfile,
  EditProfileTitle,
  ContentEditProfileImage,
  SubContentEditProfileImage,
  ContentCamera,
} from './styles'

export function EditProfile() {
  const navigation = useNavigation()

  function handleRedirectBack() {
    // @ts-ignore
    navigation.navigate('TabMenu', {
      screen: 'Profile',
    })
  }

  return (
    <Container>
      <Header>
        <ContentActions>
          <ButtonIcon onPress={handleRedirectBack}>
            <ArrowLeftIcon />
          </ButtonIcon>

          <ContentEditProfile>
            <EditProfileTitle>Edit profile</EditProfileTitle>
          </ContentEditProfile>
        </ContentActions>
      </Header>

      <ContentEditProfileImage>
        <SubContentEditProfileImage>
          <ProfileImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/58465456?v=4',
            }}
          />

          <ContentCamera>
            <CameraIcon />
          </ContentCamera>
        </SubContentEditProfileImage>
      </ContentEditProfileImage>

      <TabsProfile />
    </Container>
  )
}
