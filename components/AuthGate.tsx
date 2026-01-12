'use client'

import { useAuth } from './AuthProvider'
import LoginScreen from './LoginScreen'

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  
  if (!isAuthenticated) {
    return <LoginScreen />
  }
  
  return <>{children}</>
}
