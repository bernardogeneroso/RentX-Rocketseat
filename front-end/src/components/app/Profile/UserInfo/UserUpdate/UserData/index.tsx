import React, { useEffect, useState } from 'react'
import { FiMail, FiUser } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Input } from '../../../../../Input'
import { Button } from '../../../../../Button'
import useAuth from '../../../../../../hooks/useAuth'

import { Container, Form } from './styles'

interface UserDataProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles: any
}

interface FormDataUserData {
  name: string
  email: string
}

const schema = yup
  .object({
    name: yup.string().required('Name is a required field'),
    email: yup
      .string()
      .email('E-mail must be a valid')
      .required('E-mail is a required field'),
  })
  .required()

export default function UserData({ styles }: UserDataProps) {
  const { user } = useAuth()

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormDataUserData>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (!user) return

    setValue('name', user.name)
    setValue('email', user.email)
  }, [setValue, user])

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
          type="text"
          typeForm="name"
          placeholder="Name"
          icon={FiUser}
          error={errors.name}
          register={register}
        />
        <Input
          type="email"
          typeForm="email"
          placeholder="E-mail"
          icon={FiMail}
          error={errors.email}
          register={register}
        />

        <Button type="submit" text="Save changed" {...{ loading }} />
      </Form>
    </Container>
  )
}
