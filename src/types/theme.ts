import { ReactElement } from 'react'
import { LucideIcon } from 'lucide-react'

export interface ThemeTab {
  id: string
  label: string
  subtitle?: string
  content: ReactElement
}

export interface DidacticPhase {
  fase: string
  beschrijving: string
  icon: LucideIcon
}

export interface ColorScheme {
  text: string
  bg: string
  border: string
  activeBg: string
  activeBorder: string
}
