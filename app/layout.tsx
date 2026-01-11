import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'De West-Friese Wereld | Ontdek de wereld in je eigen regio',
  description: 'Een ontdekkingsreis voor leerlingen, dwars door de geschiedenis, natuur en toekomst van West-Friesland. De West-Friese Wereld verbindt landelijke leerdoelen met regionale identiteit.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
