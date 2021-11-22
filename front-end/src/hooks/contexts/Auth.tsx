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
  signIn(credentials: SignInCredentials): Promise<User>
  signUp(credentials: SignUpCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'rentxauth.refreshToken': refreshToken, 'rentxauth.user': user } =
      parseCookies()

    if (refreshToken && user) {
      const refreshTokenParsed = JSON.parse(refreshToken)

      api
        .post('/users/session/refresh-token', {
          refresh_token: refreshTokenParsed.id,
        })
        .then(
          ({ data: { token: newToken, refreshToken: newRefreshToken } }) => {
            setCookie(
              null,
              'rentxauth.refreshToken',
              JSON.stringify(newRefreshToken),
              {
                path: '/',
              }
            )

            api.defaults.headers['Authorization'] = `Bearer ${newToken}`

            setUser(JSON.parse(user))
          }
        )
        .catch(() => {
          destroyCookie(null, 'rentxauth.refreshToken', {
            path: '/',
          })

          destroyCookie(null, 'rentxauth.user', {
            path: '/',
          })

          setUser(null)
        })
    } else {
      setUser(null)
    }
  }, [])

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const {
        data: { token, user, refreshToken },
      } = await api.post('/users/session', {
        email,
        password,
      })

      setCookie(null, 'rentxauth.refreshToken', JSON.stringify(refreshToken), {
        path: '/',
        maxAge: 60 * 60 * 60 * 7, // 7 day
      })

      setCookie(null, 'rentxauth.user', JSON.stringify(user), {
        path: '/',
        maxAge: 60 * 60 * 60 * 7, // 7 day
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setUser(user)

      router.push('/profile')

      return user
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

    destroyCookie(null, 'rentxauth.refreshToken', {
      path: '/',
    })

    destroyCookie(null, 'rentxauth.user', {
      path: '/',
    })

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
