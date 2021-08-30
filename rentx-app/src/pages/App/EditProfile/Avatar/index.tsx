import React, { useEffect } from 'react'
import { Platform, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import { api } from '../../../../services/api'
import useAuth from '../../../../hooks/useAuth'

import CameraIcon from '../../../../assets/camera.svg'

import { ProfileImage } from '../../TabMenu/Profile/styles'
import { Container, ContentCamera } from './styles'

export function Avatar() {
  const { user, updateUser } = useAuth()

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      const localUri = result.uri
      const filename = result.uri.split('/').pop() || ''
      const match = /\.(\w+)$/.exec(filename)
      const type = match ? `image/${match[1]}` : `image`

      const form = new FormData()
      // @ts-ignore
      form.append('avatar', { uri: localUri, name: filename, type })

      try {
        const response = await api('/users/avatar', {
          method: 'patch',
          data: form,
          headers: {
            'content-type': 'multipart/form-data',
          },
        })

        await updateUser(response.data)
      } catch (err) {
        Alert.alert(
          'Error on updating avatar',
          'Error has occurred when updating avatar'
        )
      }
    }
  }

  return (
    <Container>
      <ProfileImage
        source={{
          uri: user.avatar_url,
        }}
      />

      <ContentCamera onPress={pickImage}>
        <CameraIcon />
      </ContentCamera>
    </Container>
  )
}
