import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { FiMail, FiUser, FiLock } from 'react-icons/fi'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '../../Button'
import { Input } from '../../Input'
import useAuth from '../../../hooks/useAuth'
import useToast from '../../../hooks/useToast'

import { Container, Form } from './styles'

export interface FormDataSignUp {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const schema = yup
  .object({
    name: yup.string().required('Name is a required field'),
    email: yup
      .string()
      .email('E-mail must be a valid')
      .required('E-mail is a required field'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is a required field'),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required()

export default function SignUp() {
  const router = useRouter()
  const { addToast } = useToast()
  const { signUp } = useAuth()

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<FormDataSignUp>({
    resolver: yupResolver(schema),
  })

  const handleSubmit = onSubmit(async (data) => {
    const { name, email, password } = data

    try {
      setLoading(true)

      await signUp({
        name,
        email,
        password,
      })

      setLoading(false)

      addToast({
        type: 'success',
        title: 'Account is been created',
      })

      router.push('/profile/signin')
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Authentication error',
        // @ts-ignore
        description: err.response?.data.message,
      })

      setLoading(false)
    }
  })

  return (
    <Container>
      <h2>We are almost there.</h2>

      <div className="moreInformation">
        Sign up to start a amazing experience.
      </div>

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
        <Input
          type="password"
          typeForm="password"
          placeholder="Password"
          icon={FiLock}
          error={errors.password}
          register={register}
        />
        <Input
          type="password"
          typeForm="password_confirmation"
          placeholder="Password confirmation"
          icon={FiLock}
          error={errors.password_confirmation}
          register={register}
        />

        <Button
          type="submit"
          text="Create account free"
          {...{ loading, reverse: true }}
        />
      </Form>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['rentxauth.userCredentials']: userData } = parseCookies(ctx)

  if (userData) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
