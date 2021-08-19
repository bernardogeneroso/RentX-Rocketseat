import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { TextAnimation } from '../../../../components/TextAnimation'
import Input from '../../../../components/Input'

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

interface Step1Props {
  messageLeave: boolean
  setPage(number: number): void
  handleSaveDataStep1(data: FormDataStep1): void
}

const schema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  email: yup
    .string()
    .email('E-mail must be a valid')
    .required('E-mail is a required field'),
})

export function Step1({
  messageLeave,
  setPage,
  handleSaveDataStep1,
}: Step1Props) {
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataStep1>({
    resolver: yupResolver(schema),
  })

  function handleNavigateToOnBoard() {
    // @ts-ignore
    navigation.navigate('OnBoard', {
      page: 2,
    })
  }

  function handleOnSubmit(data: FormDataStep1) {
    handleSaveDataStep1(data)
    setPage(1)
  }

  return (
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
        <TextAnimation isVisible={messageLeave}>
          <Title>We are{'\n'}almost there.</Title>
        </TextAnimation>

        <TextAnimation>
          <Subtitle>Login to get started{'\n'}an amazing experience.</Subtitle>
        </TextAnimation>
      </Information>
      <Form>
        <FormTitle>01. Data</FormTitle>

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

        <ButtonSubmit text="Next" onPress={handleSubmit(handleOnSubmit)} />
      </Form>
    </Container>
  )
}
