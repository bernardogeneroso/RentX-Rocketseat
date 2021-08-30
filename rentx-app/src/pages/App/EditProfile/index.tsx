import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { TabsProfile } from './TabsProfile'

import ArrowLeftIcon from '../../../assets/arrow-left.svg'

import { Header, ButtonIcon } from '../TabMenu/Profile/styles'
import {
  Container,
  ContentActions,
  ContentEditProfile,
  EditProfileTitle,
  ContentEditProfileImage,
} from './styles'
import { Avatar } from './Avatar'

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
        <Avatar />
      </ContentEditProfileImage>

      <TabsProfile />
    </Container>
  )
}
