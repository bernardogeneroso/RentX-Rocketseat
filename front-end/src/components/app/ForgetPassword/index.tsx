import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '../../Button'
import { Input } from '../../Input'
import useAuth from '../../../hooks/useAuth'
import useToast from '../../../hooks/useToast'

import { Container, Form } from './styles'

export interface FormDataForgetPassword {
  email: string
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('E-mail must be a valid')
      .required('E-mail is a required field'),
  })
  .required()

export default function ForgetPassword() {
  const {} = useAuth()
  const { addToast } = useToast()

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<FormDataForgetPassword>({
    resolver: yupResolver(schema),
  })

  const handleSubmit = onSubmit(async (data) => {
    const { email } = data

    try {
      console.log(email)
    } catch (err) {
      addToast({
        type: 'error',
        title: 'E-mail not valid',
        // @ts-ignore
        description: err.response.data.message,
      })
    }
  })

  return (
    <Container>
      <h2>Recovery password</h2>

      <div className="moreInformation">
        Insert your e-mail to receive a link to change your password
      </div>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          typeForm="email"
          placeholder="E-mail"
          error={errors.email}
          register={register}
        />

        {/* // TODO: Button keep disabled until input has a valid email */}
        <Button type="submit" text="Next step" />
      </Form>
    </Container>
  )
}
