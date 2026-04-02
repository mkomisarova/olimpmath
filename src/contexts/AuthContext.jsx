/* eslint-disable react-refresh/only-export-components -- useAuth is intentionally co-located with AuthProvider */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, getUserData, loginUser, logoutUser, registerUser } from '../firebase/auth'

const AuthContext = createContext(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (ctx === null) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      if (user) {
        const data = await getUserData(user.uid)
        setUserData(data)
      } else {
        setUserData(null)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const login = useCallback(async (email, password) => {
    const user = await loginUser(email, password)
    const data = await getUserData(user.uid)
    setUserData(data)
    return user
  }, [])

  const register = useCallback(async (username, email, password) => {
    const user = await registerUser(username, email, password)
    const data = await getUserData(user.uid)
    setUserData(data)
    return user
  }, [])

  const logout = useCallback(async () => {
    await logoutUser()
    setUserData(null)
  }, [])

  const value = useMemo(
    () => ({
      currentUser,
      userData,
      loading,
      login,
      register,
      logout,
    }),
    [currentUser, userData, loading, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
