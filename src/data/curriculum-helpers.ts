import { Theme, BouwContent, CurriculumData } from './curriculum'
import { themeTitles } from './theme-config'

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

// SKOWF Curriculum Data Helpers
const YEAR_A_THEMES = [
  'westfriese-omringdijk',
  'grieken-romeinen',
  'de-polder',
  'gouden-eeuw'
]

const YEAR_B_THEMES = [
  'zuiderzee-ijsselmeer',
  'kasteel-radboud',
  'burgers-stoommachines',
  'tuin-van-europa'
]

function getFocusFromDescription(description: string): string {
  const focusMap: Record<string, string> = {
    // Nederlandse termen
    'waterwolf': 'Mythische Bescherming',
    'mythe': 'Mythische Bescherming',
    'zintuiglijk': 'Mythische Bescherming',
    'zintuiglijke': 'Mythische Bescherming',
    'wielen': 'Sporenonderzoek',
    'sporen': 'Sporenonderzoek',
    'landschapssporen': 'Sporenonderzoek',
    'paalworm': 'Technische Innovatie',
    'dijkbouw': 'Technische Innovatie',
    'systeemdenken': 'Strategisch Waterbeheer',
    'waterbeheer': 'Strategisch Waterbeheer',
    'klimaatadaptatie': 'Strategisch Waterbeheer',
    'schatgraven': 'Culturele Ontmoeting',
    'vroeger versus nu': 'Culturele Ontmoeting',
    'grens': 'Grensverkenning',
    'handel': 'Grensverkenning',
    'ontmoeting': 'Grensverkenning',
    'macht': 'Wetenschappelijke Reconstructie',
    'democratie': 'Wetenschappelijke Reconstructie',
    'rechtsstaat': 'Wetenschappelijke Reconstructie',
    'friese opstand': 'Wetenschappelijke Reconstructie',
    'leeghwater': 'Ruimtelijke Ordening',
    'tovenaar': 'Ruimtelijke Ordening',
    'vormen': 'Ruimtelijke Ordening',
    'lijnen': 'Ruimtelijke Ordening',
    'meetkunde': 'Geometrische Ratio',
    'beemster': 'Geometrische Ratio',
    'drainage': 'Geometrische Ratio',
    'investering': 'Economisch Eigenaarschap',
    'economisch': 'Economisch Eigenaarschap',
    'ruimtelijke ordening': 'Planologie & Belangen',
    'conflicterende belangen': 'Planologie & Belangen',
    'datacenters': 'Planologie & Belangen',
    'specerijen': 'Zintuiglijk Wereldburgerschap',
    'geur': 'Zintuiglijk Wereldburgerschap',
    'pakhuis': 'Zintuiglijk Wereldburgerschap',
    'havenleven': 'Stedelijke Identiteit',
    'scheepsbouw': 'Stedelijke Identiteit',
    'fluitschip': 'Stedelijke Identiteit',
    'multiperspectiviteit': 'Handelskapitalisme',
    'kolonialisme': 'Handelskapitalisme',
    'slavernij': 'Handelskapitalisme',
    'wic': 'Handelskapitalisme',
    'zout': 'Cultureel Erfgoed',
    'zoet': 'Cultureel Erfgoed',
    'overgang': 'Fysische Transformatie',
    'ecologische systemen': 'Ecologische Systeemleer',
    'zuiderzeewet': 'Ecologische Systeemleer',
    'vissers': 'Ecologische Systeemleer',
    'kastelen': 'Archetypische Verbeelding',
    'torens': 'Archetypische Verbeelding',
    'ridderleven': 'Archetypische Verbeelding',
    'rollen': 'Sociale Rolverdeling',
    'middeleeuwse': 'Sociale Rolverdeling',
    'ambachten': 'Sociale Rolverdeling',
    'dwangburcht': 'Militaire Strategie',
    'stoomkracht': 'Fysische Kracht',
    'fabriekswerk': 'Fysische Kracht',
    'sociale kwestie': 'Sociale Innovatie',
    'kinderrechten': 'Sociale Innovatie',
    'van houten': 'Sociale Innovatie',
    'groei': 'Cyclisch Denken',
    'verzorging': 'Cyclisch Denken',
    'proeftuin': 'Cyclisch Denken',
    'nanne groot': 'Agrarische Historie',
    'zaadhandel': 'Agrarische Historie',
    'biotechnologie': 'Biotechnologie',
    'genetica': 'Biotechnologie',
    'mendel': 'Biotechnologie',
    'voedselzekerheid': 'Biotechnologie',
    'seed valley': 'Biotechnologie'
  }

  const lowerDesc = description.toLowerCase()
  for (const [key, focus] of Object.entries(focusMap)) {
    if (lowerDesc.includes(key.toLowerCase())) {
      return focus
    }
  }
  
  // Fallback: return first meaningful phrase
  const phrases = description.split(',').map(p => p.trim())
  return phrases[0] || 'Focuspunt'
}

interface ThemeLevel {
  group: string
  focus: string
  desc: string
}

interface TransformedTheme {
  id: number
  title: string
  subtitle: string
  levels: ThemeLevel[]
}

export function getSKOWFCurriculumData(curriculum: CurriculumData): {
  yearA: TransformedTheme[]
  yearB: TransformedTheme[]
} {
  const transformThemes = (themeIds: string[], startId: number): TransformedTheme[] => {
    return themeIds
      .map((themeId, index) => {
        const theme = curriculum.themes.find(t => t.id === themeId)
        if (!theme) return null

        const title = themeTitles[themeId] || theme.name
        const subtitle = theme.introduction 
          ? theme.introduction.split('.')[0] + '.'
          : theme.description || ''

        const onderbouw = getBouwContent(theme.bouw.onderbouw)
        const middenbouw = getBouwContent(theme.bouw.middenbouw)
        const bovenbouw = getBouwContent(theme.bouw.bovenbouw)

        // Split middenbouw if it contains multiple concepts
        let middenbouw34Desc = middenbouw?.description || ''
        let middenbouw56Desc = middenbouw?.description || ''

        if (middenbouw?.description && middenbouw.description.includes(',')) {
          const parts = middenbouw.description.split(',').map(p => p.trim())
          middenbouw34Desc = parts[0] || middenbouw.description
          middenbouw56Desc = parts.length > 1 ? parts.slice(1).join(', ') : middenbouw.description
        }

        return {
          id: startId + index,
          title: title.replace('De Wereld van ', ''),
          subtitle: subtitle.substring(0, 100),
          levels: [
            {
              group: 'Onderbouw (1-2)',
              focus: getFocusFromDescription(onderbouw?.description || ''),
              desc: onderbouw?.description || ''
            },
            {
              group: 'Middenbouw (3-4)',
              focus: getFocusFromDescription(middenbouw34Desc),
              desc: middenbouw34Desc
            },
            {
              group: 'Middenbouw (5-6)',
              focus: getFocusFromDescription(middenbouw56Desc),
              desc: middenbouw56Desc
            },
            {
              group: 'Bovenbouw (7-8)',
              focus: getFocusFromDescription(bovenbouw?.description || ''),
              desc: bovenbouw?.description || ''
            }
          ]
        }
      })
      .filter((theme): theme is TransformedTheme => theme !== null)
  }

  return {
    yearA: transformThemes(YEAR_A_THEMES, 1),
    yearB: transformThemes(YEAR_B_THEMES, 5)
  }
}
