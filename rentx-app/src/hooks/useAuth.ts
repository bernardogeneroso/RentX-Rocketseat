import { useContextSelector } from 'use-context-selector'
import { AuthContext, AuthContextData } from './contexts/Auth'

export default function useAuth(): AuthContextData {
  const user = useContextSelector(AuthContext, (auth) => auth.user)
  const loading = useContextSelector(AuthContext, (auth) => auth.loading)
  const signIn = useContextSelector(AuthContext, (auth) => auth.signIn)
  const signUp = useContextSelector(AuthContext, (auth) => auth.signUp)
  const signOut = useContextSelector(AuthContext, (auth) => auth.signOut)
  const updateUser = useContextSelector(AuthContext, (auth) => auth.updateUser)

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    updateUser,
  }
}
