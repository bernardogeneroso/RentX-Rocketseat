import { parseCookies, destroyCookie, setCookie } from 'nookies'
import React, { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { createContext } from 'use-context-selector'

import { api } from '../../services/api'

interface User {
  id: string
  name: string
  email: string
  avatar_url: string
}

interface SignInCredentials {
  email: string
  password: string
}

interface SignUpCredentials {
  name: string
  email: string
  password: string
}

export interface AuthContextData {
  isAuthenticated: boolean
  user: User | null
  signIn(credentials: SignInCredentials): Promise<void>
  signUp(credentials: SignUpCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  console.log(isAuthenticated)

  useEffect(() => {
    const { 'rentxauth.userCredentials': userData } = parseCookies()

    if (userData) {
      const { email, password } = JSON.parse(userData)

      api
        .post('/users/session', {
          email,
          password,
        })
        .then(({ data: { user } }) => {
          setUser(user)
        })
    } else {
      setUser(null)
    }
  }, [])

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const {
        data: { token, user },
      } = await api.post('/users/session', {
        email,
        password,
      })

      // This is not correct
      setCookie(
        undefined,
        'rentxauth.userCredentials',
        JSON.stringify({
          email,
          password,
        }),
        {
          path: '/',
          maxAge: 60 * 60 * 60 * 7, // 7 day
        }
      )

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setUser(user)

      router.push('/profile')
    },
    [router]
  )

  const signUp = useCallback(
    async ({ name, email, password }: SignUpCredentials) => {
      await api.post('/users', {
        name,
        email,
        password,
      })
    },
    []
  )

  const signOut = useCallback(() => {
    api.defaults.headers['Authorization'] = ''

    destroyCookie(undefined, 'rentxauth.userCredentials')

    setUser(null)

    router.push('/profile/signin')
  }, [router])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
