import React from 'react'
import Image from 'next/image'
import { FiCamera } from 'react-icons/fi'

import useAuth from '../../../../../hooks/useAuth'

import { Container, Content } from './styles'

export default function UserAvatar() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <Container>
      <Content>
        <Image
          src={user.avatar_url}
          alt={user.name}
          layout="fixed"
          width={180}
          height={180}
        />
      </Content>

      <button>
        <FiCamera color="#fff" size={24} />
      </button>
    </Container>
  )
}
