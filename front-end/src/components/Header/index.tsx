import React from 'react'
import Link from 'next/link'
import { FiPower } from 'react-icons/fi'

import useAuth from '../../hooks/useAuth'

import { Container } from './styles'

import Profile from '../../pages/assets/profile.svg'

interface HeaderProps {
  text: string
}

export default function Header({ text }: HeaderProps) {
  const { isAuthenticated, user, signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }

  return (
    <Container>
      <nav>
        <h3>{text}</h3>

        {user && isAuthenticated ? (
          <Link href="/profile" passHref>
            <div className="content">
              <h3>{user.name}</h3>

              <FiPower size={20} onClick={handleSignOut} />
            </div>
          </Link>
        ) : (
          <Link href="/profile/signin" passHref>
            <div className="content">
              <h3>Sign in</h3>

              <div className="perfil">
                <Profile />
              </div>
            </div>
          </Link>
        )}
      </nav>
    </Container>
  )
}
