import React, { useCallback } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { TextAnimation } from '../../../../components/TextAnimation'
import Input from '../../../../components/Input'
import useAuth from '../../../../hooks/useAuth'

import { FormDataStep1 } from '..'
import { Dot, PagesContainer, Subtitle, Title } from '../../OnBoard/styles'
import {
  ButtonGoBack,
  ButtonSubmit,
  Container,
  Form,
  FormTitle,
  Header,
  Information,
} from '../styles'

interface Step2Props {
  messageLeave: boolean
  dataStep1: FormDataStep1
  setPage(number: number): void
}

interface FormData {
  password: string
  password_confirmation: string
}

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is a required field'),
  password_confirmation: yup
    .string()
    .min(6, 'Password confirmation must be at least 6 characters')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is a required field'),
})

export function Step2({ messageLeave, dataStep1, setPage }: Step2Props) {
  const navigation = useNavigation()
  const { signUp } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const handleOnSubmit = useCallback(
    async (data: FormData) => {
      const userData = {
        ...dataStep1,
        ...data,
      }

      try {
        await signUp({
          email: userData.email,
          name: userData.name,
          password: userData.password,
        })
      } catch (err: any) {
        Alert.alert('Error on create account', err.message)
      }

      const navigateToSignIn = () => {
        // @ts-ignore
        navigation.navigate('SignIn')
      }

      // @ts-ignore
      navigation.navigate('ModalStatus', {
        option: 'signIn',
        title: 'Account has\nbeen created!',
        subtitle: 'Now just login and enjoy.',
        actionOne: navigateToSignIn(),
      })
    },
    [navigation, signUp]
  )

  function handleChangePageToFirst() {
    setPage(0)
  }

  return (
    <Container>
      <Header>
        <ButtonGoBack onPress={handleChangePageToFirst}>
          <Feather name="chevron-left" size={24} color="#AEAEB3" />
        </ButtonGoBack>

        <PagesContainer>
          <Dot />
          <Dot active />
        </PagesContainer>
      </Header>
      <Information>
        <TextAnimation isVisible={messageLeave}>
          <Title>We are{'\n'}almost there.</Title>
        </TextAnimation>

        <TextAnimation>
          <Subtitle>Login to get started{'\n'}an amazing experience.</Subtitle>
        </TextAnimation>
      </Information>
      <Form>
        <FormTitle>02. Password</FormTitle>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input
              name={name}
              placeholder="Password"
              error={errors.password}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input
              name={name}
              placeholder="Repeat password"
              error={errors.password_confirmation}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password_confirmation"
          defaultValue=""
        />

        <ButtonSubmit text="Register" onPress={handleSubmit(handleOnSubmit)} />
      </Form>
    </Container>
  )
}
