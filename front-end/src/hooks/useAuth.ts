import { useContextSelector } from 'use-context-selector'

import { AuthContext, AuthContextData } from './contexts/Auth'

export default function useAuth(): AuthContextData {
  const user = useContextSelector(AuthContext, (auth) => auth.user)
  const isAuthenticated = useContextSelector(
    AuthContext,
    (auth) => auth.isAuthenticated
  )
  const signIn = useContextSelector(AuthContext, (auth) => auth.signIn)
  const signUp = useContextSelector(AuthContext, (auth) => auth.signUp)
  const signOut = useContextSelector(AuthContext, (auth) => auth.signOut)

  return {
    user,
    isAuthenticated,
    signIn,
    signUp,
    signOut,
  }
}
