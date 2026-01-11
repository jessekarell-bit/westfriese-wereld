'use client'

import { useEffect } from 'react'

export default function ScrollRestoration() {
  useEffect(() => {
    // Voorkom auto-scroll bij het laden van de pagina
    if (typeof window !== 'undefined') {
      // Reset scroll positie naar boven bij het laden
      window.scrollTo(0, 0)
      
      // Voorkom scroll restoration
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
    }
  }, [])

  return null
}
