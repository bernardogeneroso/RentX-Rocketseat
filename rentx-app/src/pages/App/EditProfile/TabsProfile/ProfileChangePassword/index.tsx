import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { api } from '../../../../../services/api'
import Input from '../../../../../components/Input'
import { Button } from '../../../../../components/Button'

import { Form, Content } from './styles'

interface FormData {
  current_password: string
  password: string
  password_confirmation: string
}

const schema = yup.object().shape({
  current_password: yup
    .string()
    .min(6, 'Current password must be at least 6 characters')
    .required('Current password is a required field'),
  password: yup
    .string()
    .min(6, 'New password must be at least 6 characters')
    .required('New password is a required field'),
  password_confirmation: yup
    .string()
    .min(6, 'New password confirmation must be at least 6 characters')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('New password confirmation is a required field'),
})

export function ProfileChangePassword() {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  async function handleOnSubmit(data: FormData) {
    try {
      await api.put('/users/passwords/reset-authenticated', {
        actual_password: data.current_password,
        password: data.password,
        password_confirmation: data.password_confirmation,
      })

      resetForm()

      // @ts-ignore
      navigation.navigate('ModalStatus', {
        option: 'editProfile',
        title: 'Done!',
        subtitle: 'Now your info\nare update.',
      })
    } catch {
      // @ts-ignore
      navigation.navigate('ModalStatus', {
        option: 'stay',
        title: 'Error on update profile',
      })
    }
  }

  return (
    <Form>
      <Content>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              name="password"
              placeholder="Current password"
              error={errors.current_password}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="current_password"
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
              placeholder="New password"
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
              placeholder="New password confirmation"
              error={errors.password_confirmation}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password_confirmation"
          defaultValue=""
        />
      </Content>

      <Button text="Save changes" onPress={handleSubmit(handleOnSubmit)} />
    </Form>
  )
}
