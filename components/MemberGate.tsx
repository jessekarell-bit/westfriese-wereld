'use client'

import { useState, useEffect } from 'react'
import { Lock, Unlock, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

interface MemberGateProps {
  children: React.ReactNode
}

export default function MemberGate({ children }: MemberGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessCode, setAccessCode] = useState('')
  const [error, setError] = useState('')
  const [isUnlocking, setIsUnlocking] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (accessCode.toLowerCase() === 'westfriesland') {
      setIsUnlocking(true)
      // Simulate unlock animation
      setTimeout(() => {
        setIsAuthenticated(true)
        setIsUnlocking(false)
        // Trigger fade-in animation after mount
        setTimeout(() => setFadeIn(true), 50)
      }, 600)
    } else {
      setError('Ongeldige toegangscode. Probeer het opnieuw.')
      setAccessCode('')
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      setFadeIn(true)
    }
  }, [isAuthenticated])

  if (isAuthenticated) {
    return (
      <div className={`space-y-4 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center justify-center mb-4">
          <Badge variant="outline" className="px-4 py-2 text-sm bg-green-50 border-green-200 text-green-700">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Geverifieerd Partner
          </Badge>
        </div>
        {children}
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className={`border-2 transition-all duration-500 ${isUnlocking ? 'border-green-500 shadow-lg scale-105' : 'border-gray-200'}`}>
        <CardHeader className="text-center pb-4">
          <div className={`mx-auto mb-4 transition-all duration-500 ${isUnlocking ? 'scale-125 rotate-12' : ''}`}>
            {isUnlocking ? (
              <div className="relative">
                <Unlock className="h-16 w-16 text-green-600 animate-pulse" />
                <div className="absolute inset-0 h-16 w-16 rounded-full bg-green-200 animate-ping opacity-75"></div>
              </div>
            ) : (
              <div className="relative">
                <Lock className="h-16 w-16 text-deep-water-blue" />
                <div className="absolute inset-0 h-16 w-16 rounded-full bg-deep-water-blue/10 blur-xl"></div>
              </div>
            )}
          </div>
          <CardTitle className="font-serif text-2xl text-deep-water-blue mb-2">
            Leerkracht Omgeving
          </CardTitle>
          <CardDescription className="text-base text-gray-600">
            Deze materialen zijn exclusief toegankelijk voor aangesloten scholen en partners.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="access-code" className="block text-sm font-medium text-gray-700 mb-2">
                Toegangscode
              </label>
              <Input
                id="access-code"
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Voer toegangscode in"
                className="w-full"
                disabled={isUnlocking}
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 transition-opacity duration-200 opacity-100">
                  {error}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isUnlocking || !accessCode.trim()}
            >
              {isUnlocking ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Bezig met ontgrendelen...
                </>
              ) : (
                'Toegang Vragen'
              )}
            </Button>
          </form>
          <p className="mt-4 text-xs text-gray-500 text-center">
            Neem contact op met uw schooladministrateur voor toegang tot deze materialen.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
