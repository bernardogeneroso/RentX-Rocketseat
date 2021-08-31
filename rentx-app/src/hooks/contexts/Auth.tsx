import React, { useCallback, useState, useEffect } from 'react'
import { createContext } from 'use-context-selector'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../../services/api'

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  avatar_url: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
  remember: boolean
}

interface SignUpCredentials {
  email: string
  name: string
  password: string
}

interface AuthContextData {
  user: User
  loading: boolean
  signIn(credentials: SignInCredentials): Promise<void>
  signUp(data: SignUpCredentials): Promise<void>
  signOut(): void
  updateUser(user: User): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        'RenteX:token',
        'RenteX:user',
      ])

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`

        try {
          await api.get('/users/session/validate')
        } catch {
          setLoading(false)
          return
        }

        setData({ token: token[1], user: JSON.parse(user[1]) })
      }

      setLoading(false)
    }

    loadStoragedData()
  }, [])

  const signIn = useCallback(
    async ({ email, password, remember }: SignInCredentials) => {
      const response = await api.post('/users/session', {
        email,
        password,
      })

      const { user, token } = response.data
      const rememberData = remember
        ? JSON.stringify({
            email: user.email,
            password,
          })
        : ''

      api.defaults.headers.authorization = `Bearer ${token}`

      await AsyncStorage.multiSet([
        ['RenteX:token', token],
        ['RenteX:user', JSON.stringify(user)],
        ['RenteX:rememberCredentials', rememberData],
      ])

      setData({ token, user })
    },
    []
  )

  const signUp = useCallback(async ({ email, name, password }) => {
    await api.post('/users', {
      email,
      name,
      password,
    })
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['RenteX:token', 'RenteX:user'])

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback(async (user: User) => {
    setData((state) => ({
      token: state.token,
      user,
    }))

    await AsyncStorage.setItem('RenteX:user', JSON.stringify(user))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        signIn,
        signUp,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext, AuthContextData }
