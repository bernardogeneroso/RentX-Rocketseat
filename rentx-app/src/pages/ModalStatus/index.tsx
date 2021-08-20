import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar, BackHandler } from 'react-native'

import Union from '../../assets/union.svg'
import Done from '../../assets/done.svg'
import Error from '../../assets/error.svg'

import {
  Container,
  Content,
  Title,
  Subtitle,
  ContentButton,
  ButtonSignIn,
  ButtonSignUp,
  Button,
  ButtonText,
} from './styles'

interface ModalStatusProps {
  route: {
    params: {
      option: 'signIn' | 'editProfile' | 'exitApp' | 'carDetails'
      status?: 'success' | 'error'
      button?: 'one' | 'two'
      title: string
      subtitle: string
    }
  }
}

export function ModalStatus({
  route: {
    params: { option, status = 'success', button = 'one', title, subtitle },
  },
}: ModalStatusProps) {
  const navigation = useNavigation()

  let actionOne = () => {}
  let actionTwo = () => {}

  switch (option) {
    case 'signIn':
      actionOne = () => {
        // @ts-ignore
        navigation.navigate('SignIn', {
          correctTitle: true,
        })
      }
      break
    case 'editProfile':
      actionOne = () => {
        // @ts-ignore
        navigation.navigate('EditProfile')
      }
      break
    case 'exitApp':
      actionOne = () => {
        // @ts-ignore
        if (navigation.canGoBack()) {
          navigation.goBack()
        } else {
          // @ts-ignore
          navigation.navigate('DatePicker')
        }
      }

      actionTwo = () => {
        BackHandler.exitApp()
      }
      break
    case 'carDetails':
      actionOne = () => {
        // @ts-ignore
        navigation.navigate('TabMenu')
      }
      break
    default:
      actionOne = () => {
        // @ts-ignore
        navigation.navigate('SignIn', {
          correctTitle: true,
        })
      }
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Container>
        <Union fill="#242428" width="100%" height="360" />

        <Content>
          {status === 'error' ? <Error /> : <Done />}

          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Content>

        <ContentButton isTwoButton={button === 'two' ? true : false}>
          {button === 'two' ? (
            <>
              <ButtonSignIn onPress={actionOne}>
                <ButtonText>No</ButtonText>
              </ButtonSignIn>
              <ButtonSignUp onPress={actionTwo}>
                <ButtonText>Yes</ButtonText>
              </ButtonSignUp>
            </>
          ) : (
            <Button onPress={actionOne}>
              <ButtonText>OK</ButtonText>
            </Button>
          )}
        </ContentButton>
      </Container>
    </>
  )
}
