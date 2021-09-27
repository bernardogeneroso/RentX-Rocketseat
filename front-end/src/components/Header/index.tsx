import React from 'react'
import { useRouter } from 'next/router'

import { Container } from './styles'

import Perfil from '../../pages/assets/perfil.svg'

interface HeaderProps {
  text: string
}

export default function Header({ text }: HeaderProps) {
  const router = useRouter()

  function handleRedirectToSignInPage() {
    router.push('/perfil/signin')
  }

  return (
    <Container>
      <nav>
        <h3>{text}</h3>

        <div className="content" onClick={handleRedirectToSignInPage}>
          <h3>Sign in</h3>

          <div className="perfil">
            <Perfil />
          </div>
        </div>
      </nav>
    </Container>
  )
}
