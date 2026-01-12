'use client'

import { useState, FormEvent } from 'react'
import { Lock, User, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from './AuthProvider'

export default function LoginScreen() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Small delay for better UX
    setTimeout(() => {
      const success = login(username, password)
      setIsLoading(false)
      
      if (!success) {
        setError('Ongeldige gebruikersnaam of wachtwoord. Probeer het opnieuw.')
        setPassword('')
      }
    }, 300)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-water-blue/10 via-polder-green/5 to-cyan-50 px-4">
      <Card className="w-full max-w-md border-2 border-gray-200 shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4">
            <div className="relative">
              <Lock className="h-16 w-16 text-deep-water-blue mx-auto" />
              <div className="absolute inset-0 h-16 w-16 rounded-full bg-deep-water-blue/10 blur-xl mx-auto"></div>
            </div>
          </div>
          <CardTitle className="font-serif text-3xl text-deep-water-blue mb-2">
            De West-Friese Wereld
          </CardTitle>
          <CardDescription className="text-base text-gray-600">
            Voer uw inloggegevens in om toegang te krijgen
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Gebruikersnaam
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Gebruikersnaam"
                  className="w-full pl-10"
                  disabled={isLoading}
                  autoFocus
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Wachtwoord
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Wachtwoord"
                  className="w-full pl-10"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !username.trim() || !password.trim()}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Inloggen...
                </>
              ) : (
                'Inloggen'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
