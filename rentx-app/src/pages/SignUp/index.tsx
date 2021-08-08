import React, { useState, useCallback, useRef } from 'react'
import PagerView from 'react-native-pager-view'
import { useNavigation } from '@react-navigation/native'
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Input from '../../components/Input'
import { Button } from '../../components/Button'

import {
  Container,
  Header,
  ButtonGoBack,
  Information,
  Title,
  Subtitle,
  Form,
} from './styles'

import { PagesContainer, Dot } from '../OnBoard/styles'

interface FormData {
  name: string
  email: string
}

const schema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  email: yup
    .string()
    .email('E-mail must be a valid')
    .required('E-mail is a required field'),
})

export function SignUp() {
  const pagerViewRef = useRef<PagerView>(null)
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const [messageLeave, setMessageLeave] = useState(false)

  function setPage(page: number) {
    pagerViewRef.current?.setPage(page)
  }

  const handleChangeMessageLeave = useCallback(() => {
    setMessageLeave((state) => !state)
  }, [])

  const handleNavigateToOnBoard = useCallback(() => {
    // @ts-ignore
    navigation.navigate('OnBoard')
  }, [])

  const handleOnSubmit = useCallback((data: FormData) => {
    console.log(data)
    // { email: 'test@example.com', password: '123456' }
  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}
      onLayout={handleChangeMessageLeave}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <PagerView
          ref={pagerViewRef}
          style={{
            flex: 1,
          }}
          initialPage={0}
        >
          <Container>
            <Header>
              <ButtonGoBack onPress={handleNavigateToOnBoard}>
                <Feather name="chevron-left" size={24} color="#AEAEB3" />
              </ButtonGoBack>

              <PagesContainer>
                <Dot active />
                <Dot />
              </PagesContainer>
            </Header>
            <Information>
              {messageLeave && <Title>We are{'\n'}almost there.</Title>}

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
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <Input
                    name={name}
                    placeholder="Name"
                    error={errors.name}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="name"
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

              <Button
                text="Próximo"
                style={{
                  marginTop: 32,
                }}
                onPress={() => setPage(1)}
              />
            </Form>
          </Container>
          <Container>
            <Header>
              <ButtonGoBack onPress={() => setPage(0)}>
                <Feather name="chevron-left" size={24} color="#AEAEB3" />
              </ButtonGoBack>

              <PagesContainer>
                <Dot />
                <Dot active />
              </PagesContainer>
            </Header>
            <Information>
              {messageLeave && <Title>We are{'\n'}almost there.</Title>}

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
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <Input
                    name={name}
                    placeholder="Password"
                    error={errors.name}
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
                    error={errors.email}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="password"
                defaultValue=""
              />

              <Button
                text="Register"
                style={{
                  marginTop: 32,
                }}
                onPress={handleSubmit(handleOnSubmit)}
              />
            </Form>
          </Container>
        </PagerView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
