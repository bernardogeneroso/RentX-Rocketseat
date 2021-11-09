import React, { useState } from 'react'
import { FiLock } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Input } from '../../../../../Input'
import { Button } from '../../../../../Button'
import useAuth from '../../../../../../hooks/useAuth'

import { Container, Form } from './styles'

interface UserChangePasswordProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles: any
}

interface FormDataUserChangePassword {
  password_active: string
  password: string
  password_confirmation: string
}

const schema = yup
  .object({
    password_active: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is a required field'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is a required field'),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required()

export default function UserChangePassword({
  styles,
}: UserChangePasswordProps) {
  const {} = useAuth()

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<FormDataUserChangePassword>({
    resolver: yupResolver(schema),
  })

  const handleSubmit = onSubmit(async (data) => {
    console.log(data)
  })

  return (
    <Container
      style={{
        position: 'absolute',
        ...styles,
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Input
          type="password"
          typeForm="password_active"
          placeholder="Actual password"
          icon={FiLock}
          error={errors.password_active}
          register={register}
        />
        <Input
          type="password"
          typeForm="password"
          placeholder="New password"
          icon={FiLock}
          error={errors.password}
          register={register}
        />
        <Input
          type="password"
          typeForm="password_confirmation"
          placeholder="Repeat the new password"
          icon={FiLock}
          error={errors.password_confirmation}
          register={register}
        />

        <Button type="submit" text="Save changed" {...{ loading }} />
      </Form>
    </Container>
  )
}
