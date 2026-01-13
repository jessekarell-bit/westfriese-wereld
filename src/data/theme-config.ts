import { 
  Waves, 
  Castle, 
  Ship, 
  LayoutGrid, 
  TrainFront, 
  ShieldAlert, 
  MessageCircle, 
  Sprout,
  LucideIcon
} from 'lucide-react'
import { ColorScheme } from '@/src/types/theme'

export interface ThemeConfig {
  title: string
  description: string
  icon: LucideIcon
  color: string
  link: string
  colorScheme: ColorScheme
}

// Color schemes per theme
export const themeColorSchemes: Record<string, ColorScheme> = {
  'westfriese-omringdijk': {
    text: 'text-cyan-700',
    bg: 'bg-cyan-100',
    border: 'border-l-cyan-600',
    activeBg: 'bg-cyan-600',
    activeBorder: 'border-cyan-600',
  },
  'grieken-romeinen': {
    text: 'text-stone-700',
    bg: 'bg-stone-100',
    border: 'border-l-stone-600',
    activeBg: 'bg-stone-600',
    activeBorder: 'border-stone-600',
  },
  'de-polder': {
    text: 'text-green-700',
    bg: 'bg-green-100',
    border: 'border-l-green-600',
    activeBg: 'bg-green-600',
    activeBorder: 'border-green-600',
  },
  'handel-en-gouden-eeuw': {
    text: 'text-amber-700',
    bg: 'bg-amber-100',
    border: 'border-l-amber-600',
    activeBg: 'bg-amber-600',
    activeBorder: 'border-amber-600',
  },
  'zuiderzee-naar-ijsselmeer': {
    text: 'text-cyan-700',
    bg: 'bg-cyan-100',
    border: 'border-l-cyan-600',
    activeBg: 'bg-cyan-600',
    activeBorder: 'border-cyan-600',
  },
  'kasteel-radboud': {
    text: 'text-rose-800',
    bg: 'bg-rose-100',
    border: 'border-l-rose-600',
    activeBg: 'bg-rose-600',
    activeBorder: 'border-rose-600',
  },
  'burgers-stoommachines': {
    text: 'text-slate-700',
    bg: 'bg-slate-100',
    border: 'border-l-slate-600',
    activeBg: 'bg-slate-600',
    activeBorder: 'border-slate-600',
  },
  'voedsel-en-groei': {
    text: 'text-lime-700',
    bg: 'bg-lime-100',
    border: 'border-l-lime-600',
    activeBg: 'bg-lime-600',
    activeBorder: 'border-lime-600',
  },
}

// Theme icons mapping
export const themeIcons: Record<string, LucideIcon> = {
  'westfriese-omringdijk': Waves,
  'grieken-romeinen': MessageCircle,
  'de-polder': LayoutGrid,
  'gouden-eeuw': Ship,
  'handel-en-gouden-eeuw': Ship,
  'zuiderzee-ijsselmeer': ShieldAlert,
  'zuiderzee-naar-ijsselmeer': ShieldAlert,
  'kasteel-radboud': Castle,
  'burgers-stoommachines': TrainFront,
  'tuin-van-europa': Sprout,
  'voedsel-en-groei': Sprout,
}

// Theme title mapping
export const themeTitles: Record<string, string> = {
  'westfriese-omringdijk': 'De Wereld van de West-Friese Omringdijk',
  'grieken-romeinen': 'De Wereld van Grieken & Romeinen',
  'de-polder': 'De Wereld van de Polder',
  'gouden-eeuw': 'De Wereld van de Gouden Eeuw',
  'handel-en-gouden-eeuw': 'De Wereld van de Gouden Eeuw',
  'zuiderzee-ijsselmeer': 'De Wereld van de Zuiderzee naar IJsselmeer',
  'zuiderzee-naar-ijsselmeer': 'De Wereld van de Zuiderzee naar IJsselmeer',
  'kasteel-radboud': 'De Wereld van Kasteel Radboud',
  'burgers-stoommachines': 'De Wereld van Burgers & Stoommachines',
  'tuin-van-europa': 'De Wereld van de Tuin van Europa',
  'voedsel-en-groei': 'De Wereld van de Tuin van Europa',
}

// Helper function to get theme config
export function getThemeConfig(themeId: string): Partial<ThemeConfig> {
  return {
    title: themeTitles[themeId] || themeId,
    icon: themeIcons[themeId] || Waves,
    color: themeColorSchemes[themeId]?.text || 'text-gray-700',
    colorScheme: themeColorSchemes[themeId] || themeColorSchemes['westfriese-omringdijk'],
  }
}

// Helper function to get active color for tabs
export function getActiveColor(themeId: string): string {
  const colorMap: Record<string, string> = {
    'westfriese-omringdijk': 'bg-cyan-600',
    'grieken-romeinen': 'bg-stone-600',
    'de-polder': 'bg-green-600',
    'handel-en-gouden-eeuw': 'bg-amber-600',
    'zuiderzee-naar-ijsselmeer': 'bg-cyan-600',
    'kasteel-radboud': 'bg-rose-600',
    'burgers-stoommachines': 'bg-slate-600',
    'voedsel-en-groei': 'bg-lime-600',
  }
  return colorMap[themeId] || 'bg-deep-water-blue'
}

// Helper function to get active border color for tabs
export function getActiveBorderColor(themeId: string): string {
  const colorMap: Record<string, string> = {
    'westfriese-omringdijk': 'border-cyan-600',
    'grieken-romeinen': 'border-stone-600',
    'de-polder': 'border-green-600',
    'handel-en-gouden-eeuw': 'border-amber-600',
    'zuiderzee-naar-ijsselmeer': 'border-cyan-600',
    'kasteel-radboud': 'border-rose-600',
    'burgers-stoommachines': 'border-slate-600',
    'voedsel-en-groei': 'border-lime-600',
  }
  return colorMap[themeId] || 'border-deep-water-blue'
}
