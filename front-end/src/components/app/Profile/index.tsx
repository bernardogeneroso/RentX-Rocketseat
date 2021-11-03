import React from 'react'

import UserInfo from './UserInfo'
import UserAppointments from './UserAppointments'

import { Container } from './styles'

export default function Profile() {
  return (
    <Container>
      <UserInfo />
      <UserAppointments />
    </Container>
  )
}
