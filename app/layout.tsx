import type { Metadata } from 'next'
import { Inter, Merriweather, Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import ScrollRestoration from '@/components/ScrollRestoration'

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

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'De Zaanse Wereld | Ontdek de wereld in je eigen regio',
  description: 'Een ontdekkingsreis voor leerlingen, dwars door de geschiedenis, natuur en toekomst van de Zaanstreek. De Zaanse Wereld verbindt landelijke leerdoelen met regionale identiteit.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${merriweather.variable} ${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ScrollRestoration />
        {children}
      </body>
    </html>
  )
}
