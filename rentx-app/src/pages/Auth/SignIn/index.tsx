import React, { useState, useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Alert,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { TextAnimation } from '../../../components/TextAnimation'
import Input from '../../../components/Input'
import useAuth from '../../../hooks/useAuth'
import { Button } from '../../../components/Button'
import { theme } from '../../../global/styles/theme'

import {
  Container,
  Header,
  ButtonGoBack,
  Information,
  Title,
  Subtitle,
  Form,
  ContentOptions,
  Remember,
  RememberText,
  CheckBox,
  ButtonForgetMyPassword,
  ForgetMyPasswordText,
} from './styles'

interface FormData {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail must be a valid')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is a required field'),
})

interface SignInProps {
  route: {
    params: {
      correctTitle?: boolean
    }
  }
}

export function SignIn({ route }: SignInProps) {
  const navigation = useNavigation()
  const { signIn } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const [checkboxRemember, setCheckboxRemember] = useState(false)
  const [messageLeave, setMessageLeave] = useState(false)

  useEffect(() => {
    if (route.params?.correctTitle) handleChangeMessageLeave()
  }, [route.params?.correctTitle])

  const handleChangeCheckbox = useCallback(() => {
    setCheckboxRemember((state) => !state)
  }, [])

  const handleChangeMessageLeave = useCallback(() => {
    setMessageLeave((state) => !state)
  }, [])

  const handleNavigateToOnBoard = useCallback(() => {
    // @ts-ignore
    navigation.navigate('OnBoard', {
      page: 2,
    })
  }, [])

  const handleOnSubmit = useCallback(
    async (data: FormData) => {
      console.log(data)

      try {
        await signIn({
          email: data.email,
          password: data.password,
        })
      } catch (err: any) {
        Alert.alert('Error on sign in', err.message)
      }
    },
    [signIn]
  )

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
        }}
        onLayout={handleChangeMessageLeave}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Header>
              <ButtonGoBack onPress={handleNavigateToOnBoard}>
                <Feather name="chevron-left" size={24} color="#AEAEB3" />
              </ButtonGoBack>
            </Header>

            <Information>
              <TextAnimation isVisible={messageLeave}>
                <Title>We are{'\n'}almost there.</Title>
              </TextAnimation>

              <TextAnimation>
                <Subtitle>
                  Login to get started{'\n'}an amazing experience.
                </Subtitle>
              </TextAnimation>
            </Information>

            <Form>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <Input
                    name={name}
                    placeholder="E-mail"
                    error={errors.email}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
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

              <ContentOptions>
                <Remember>
                  <CheckBox
                    onPress={handleChangeCheckbox}
                    isChecked={checkboxRemember}
                    disableBuiltInState
                    iconStyle={{
                      backgroundColor: checkboxRemember
                        ? theme.colors.background
                        : theme.colors.grey100,
                      borderRadius: 0,
                      borderColor: '#fff',
                    }}
                  />

                  <RememberText>Remember</RememberText>
                </Remember>

                <ButtonForgetMyPassword>
                  <ForgetMyPasswordText>
                    Forget my password!
                  </ForgetMyPasswordText>
                </ButtonForgetMyPassword>
              </ContentOptions>

              <Button text="Login" onPress={handleSubmit(handleOnSubmit)} />
            </Form>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  )
}
