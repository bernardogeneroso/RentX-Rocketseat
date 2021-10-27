import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '../../Button'
import { Input } from '../../Input'

import { Container, Form } from './styles'

export interface FormDataSignUp {
  name: string
  email: string
  password: string
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
  })
  .required()

export default function SignUp() {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<FormDataSignUp>({
    resolver: yupResolver(schema),
  })

  const handleSubmit = onSubmit((data) => console.log(data))

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
          error={errors.name}
          register={register}
        />
        <Input
          type="email"
          typeForm="email"
          placeholder="E-mail"
          error={errors.email}
          register={register}
        />
        <Input
          type="password"
          typeForm="password"
          placeholder="Password"
          error={errors.password}
          register={register}
        />

        <Button type="submit" text="Create account free" reverse />
      </Form>
    </Container>
  )
}
