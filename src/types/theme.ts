import { ReactElement } from 'react'

export interface ThemeTab {
  id: string
  label: string
  subtitle?: string
  content: ReactElement
}

/** Fase voor didactische route; iconId is serialiseerbaar (Server → Client) */
export interface DidacticPhase {
  fase: string
  beschrijving: string
  /** Naam van Lucide-icoon, bv. 'Target', 'BookOpen' */
  iconId: string
}

export interface ColorScheme {
  text: string
  bg: string
  border: string
  activeBg: string
  activeBorder: string
}
