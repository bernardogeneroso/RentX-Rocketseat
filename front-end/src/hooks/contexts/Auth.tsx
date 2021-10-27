import { parseCookies, destroyCookie, setCookie } from 'nookies'
import React, { useState, useCallback, useEffect } from 'react'
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
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

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

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
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
        maxAge: 60 * 60 * 60 * 7, // 7 day
      }
    )

    api.defaults.headers['Authorization'] = `Bearer ${token}`

    setUser(user)
  }, [])

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

    destroyCookie(undefined, 'rentxauth.userCredentials', {
      path: '/profile',
    })

    setUser(null)
  }, [])

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
