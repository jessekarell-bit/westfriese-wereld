import { Theme, BouwContent } from './curriculum'

export function getBouwContent(bouw: string | BouwContent | undefined): BouwContent | null {
  if (!bouw) return null
  
  if (typeof bouw === 'string') {
    return {
      description: bouw,
      learningGoals: [],
      activities: []
    }
  }
  
  return bouw
}

export function getThemeById(id: string, themes: Theme[]): Theme | undefined {
  return themes.find(theme => theme.id === id)
}
