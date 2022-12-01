import { useState, createContext } from 'react'

export const AuthContext = createContext({
  user: undefined
})

export function AuthProvider (props) {
  const { children } = props

  const [auth, setAuth] = useState(undefined)

  const valueContext = {
    auth
  }

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  )
}
