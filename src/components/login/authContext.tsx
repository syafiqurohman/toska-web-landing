import { createContext, useState, ReactNode } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const login = () => {
    // Logika untuk login pengguna
    setLoggedIn(true)
  }

  const logout = () => {
    // Logika untuk logout pengguna
    setLoggedIn(false)
  }

  const authContextValue: AuthContextType = {
    isLoggedIn,
    login,
    logout,
  }

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}
