import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'

import Input from '../../components/Input'

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
} from './styles'

export function SignIn() {
  const navigation = useNavigation()
  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm()

  function handleNavigateToOnBoard() {
    // @ts-ignore
    navigation.navigate('OnBoard')
  }

  function handleSubmit(data: any) {
    console.log(data)
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <ButtonGoBack onPress={handleNavigateToOnBoard}>
              <Feather name="chevron-left" size={24} color="#AEAEB3" />
            </ButtonGoBack>
          </Header>

          <Information>
            <Title>We are{'\n'}almost there.</Title>
            <Subtitle>
              Login to get started{'\n'}an amazing experience.
            </Subtitle>
          </Information>

          <Form>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  iconName="email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.email}
                  placeholder="E-mail"
                  defaultValue=""
                />
              )}
              name="email"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  iconName="password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.password}
                  placeholder="Password"
                  defaultValue=""
                />
              )}
              name="password"
            />

            <ContentOptions>
              <Remember>
                <CheckBox
                  onPress={(isChecked: boolean) => {
                    console.log(isChecked)
                  }}
                />
                <RememberText>Remember</RememberText>
              </Remember>
            </ContentOptions>
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
