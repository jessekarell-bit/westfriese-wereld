import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import ScrollRestoration from '@/components/ScrollRestoration'
import MaintenancePage from '@/components/MaintenancePage'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'De West-Friese Wereld | Ontdek de wereld in je eigen regio',
  description: 'Een ontdekkingsreis voor leerlingen, dwars door de geschiedenis, natuur en toekomst van West-Friesland. De West-Friese Wereld verbindt landelijke leerdoelen met regionale identiteit.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

// Onderhoud: zet NEXT_PUBLIC_MAINTENANCE=true in .env.local om de onderhoudspagina te tonen
const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE === 'true'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={ubuntu.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {MAINTENANCE_MODE ? (
          <MaintenancePage />
        ) : (
          <>
            <ScrollRestoration />
            {children}
          </>
        )}
      </body>
    </html>
  )
}
