import React from 'react'

import UserAvatar from './UserAvatar'
import UserUpdate from './UserUpdate'

import { Container } from './styles'

export default function UserInfo() {
  return (
    <Container>
      <UserAvatar />
      <UserUpdate />
    </Container>
  )
}
