import React from 'react'

import UserInfo from './UserInfo'
import UserAppointments from './UserAppointments'

import { Container, Separator } from './styles'

export default function Profile() {
  return (
    <Container>
      <UserInfo />
      <Separator />
      <UserAppointments />
    </Container>
  )
}
