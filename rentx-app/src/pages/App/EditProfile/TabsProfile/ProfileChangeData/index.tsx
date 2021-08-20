import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Input from '../../../../../components/Input'
import { Button } from '../../../../../components/Button'

import { Form, Content } from './styles'

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

export function ProfileChangeData() {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  function handleOnSubmit(data: FormData) {
    console.log(data)

    // @ts-ignore
    navigation.navigate('ModalStatus', {
      option: 'editProfile',
      title: 'Done!',
      subtitle: 'Now your info\nare update.',
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Form>
          <Content>
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
          </Content>

          <Button text="Save changes" onPress={handleSubmit(handleOnSubmit)} />
        </Form>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
