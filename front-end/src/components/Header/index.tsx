import React from 'react'
import { FiPower } from 'react-icons/fi'
import { useRouter } from 'next/router'

import useAuth from '../../hooks/useAuth'

import { Container } from './styles'

import Profile from '../../pages/assets/profile.svg'

interface HeaderProps {
  text: string
}

export default function Header({ text }: HeaderProps) {
  const router = useRouter()
  const { isAuthenticated, user, signOut } = useAuth()

  function handleRedirectToSignInPage() {
    router.push('/profile/signin')
  }

  function handleRedirectToProfilePage() {
    router.push('/profile')
  }

  function handleSignOut() {
    signOut()

    console.log('aqui')
    router.push('/profile/signin')
  }

  return (
    <Container>
      <nav>
        <h3>{text}</h3>

        {user && isAuthenticated ? (
          <div className="content">
            <h3 onClick={handleRedirectToProfilePage}>{user.name}</h3>

            <FiPower size={20} onClick={handleSignOut} />
          </div>
        ) : (
          <div className="content" onClick={handleRedirectToSignInPage}>
            <h3>Sign in</h3>

            <div className="perfil">
              <Profile />
            </div>
          </div>
        )}
      </nav>
    </Container>
  )
}
