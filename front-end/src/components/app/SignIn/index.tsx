import React from 'react'

import { Button } from '../../Button'
import { Input } from '../../Input'

import { Container, Form } from './styles'

export default function SignIn() {
  return (
    <Container>
      <h2>We are almost there.</h2>

      <div className="moreInformation">
        Sign in to start a amazing experience.
      </div>

      <Form>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />

        <p>Forget my password</p>

        <Button text="Sign In" />
        <Button text="Create account" />
      </Form>
    </Container>
  )
}
