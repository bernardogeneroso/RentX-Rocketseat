import React, { useState } from 'react'
import Link from 'next/link'
import { FiMail, FiLock } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '../../Button'
import { Input } from '../../Input'
import useAuth from '../../../hooks/useAuth'
import useToast from '../../../hooks/useToast'

import { Container, Form } from './styles'

export interface FormDataSignIn {
  email: string
  password: string
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('E-mail must be a valid')
      .required('E-mail is a required field'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is a required field'),
  })
  .required()

export default function SignIn() {
  const { signIn } = useAuth()
  const { addToast } = useToast()

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<FormDataSignIn>({
    resolver: yupResolver(schema),
  })

  const handleSubmit = onSubmit(async (data) => {
    const { email, password } = data

    try {
      setLoading(true)

      const user = await signIn({
        email,
        password,
      })

      setLoading(false)

      addToast({
        type: 'success',
        title: `Welcome ${user.name}!`,
      })
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
        Sign in to start a amazing experience.
      </div>

      <Form onSubmit={handleSubmit}>
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

        <Link href="/profile/forget-password" passHref>
          <p className="forgetPassword">Forget my password</p>
        </Link>

        <Button type="submit" text="Sign In" {...{ loading }} />
        <Link href="/profile/signup" passHref>
          <Button type="button" text="Create account" reverse />
        </Link>
      </Form>
    </Container>
  )
}
