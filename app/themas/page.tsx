import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { themes } from '@/src/data/curriculum'
import { themeColorSchemes } from '@/src/data/theme-config'
import {
  Waves,
  MessageCircle,
  LayoutGrid,
  Ship,
  ShieldAlert,
  Castle,
  TrainFront,
  Sprout,
  BookOpen as BookOpenIcon,
} from 'lucide-react'

// Map curriculum theme id naar theme-config slug voor kleuren
const themeColorIdMap: Record<string, string> = {
  'westfriese-omringdijk': 'westfriese-omringdijk',
  'grieken-romeinen': 'grieken-romeinen',
  'de-polder': 'de-polder',
  'gouden-eeuw': 'handel-en-gouden-eeuw',
  'handel-en-gouden-eeuw': 'handel-en-gouden-eeuw',
  'zuiderzee-ijsselmeer': 'zuiderzee-naar-ijsselmeer',
  'zuiderzee-naar-ijsselmeer': 'zuiderzee-naar-ijsselmeer',
  'kasteel-radboud': 'kasteel-radboud',
  'burgers-stoommachines': 'burgers-stoommachines',
  'tuin-van-europa': 'voedsel-en-groei',
  'voedsel-en-groei': 'voedsel-en-groei',
}

// Map themes to icons (gebruik dezelfde icons als op homepage)
const themeIcons: Record<string, any> = {
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

// Mapping van theme.id naar nieuwe "De Wereld van..." titels
const themeTitleMap: Record<string, string> = {
  'westfriese-omringdijk': 'De Wereld van de West-Friese Omringdijk',
  'grieken-romeinen': 'De Wereld van Grieken & Romeinen',
  'de-polder': 'De Wereld van de Polder',
  'gouden-eeuw': 'De Wereld van de Gouden Eeuw',
  'handel-en-gouden-eeuw': 'De Wereld van de Gouden Eeuw',
  'zuiderzee-ijsselmeer': 'De Wereld van de Zuiderzee naar IJsselmeer',
  'zuiderzee-naar-ijsselmeer': 'De Wereld van de Zuiderzee naar IJsselmeer',
  'kasteel-radboud': 'De Wereld van Kasteel Radboud',
  'burgers-stoommachines': 'De Wereld van de burgers & stoommachines',
  'tuin-van-europa': 'De Wereld van de Tuin van Europa',
  'voedsel-en-groei': 'De Wereld van de Tuin van Europa',
}

// Helper function to get summary
function getThemeSummary(theme: typeof themes.themes[0]): string {
  if (theme.introduction) {
    // Use first sentence of introduction as summary
    const firstSentence = theme.introduction.split('.')[0]
    return firstSentence.length > 120 
      ? firstSentence.substring(0, 120) + '...'
      : firstSentence + '.'
  }
  if (theme.description) {
    return theme.description
  }
  // Fallback summary based on theme name
  return `Ontdek ${theme.name} en leer over de geschiedenis en cultuur van West-Friesland.`
}

export default function ThemesOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-deep-water-blue mb-6">
              Ontdek onze 8 Werelden
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Een doorlopende leerlijn van groep 1 tot en met 8.
            </p>
          </div>

          {/* Werelden Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sorteer werelden in de juiste volgorde zoals op homepage */}
            {(() => {
              // Definieer de volgorde zoals op homepage (1-8)
              // Gebruik de IDs uit curriculum.ts
              const themeOrder = [
                'westfriese-omringdijk',      // 1
                'grieken-romeinen',           // 2
                'de-polder',                  // 3
                'gouden-eeuw',                // 4 (mapt naar /themas/handel-en-gouden-eeuw)
                'zuiderzee-ijsselmeer',       // 5 (mapt naar /themas/zuiderzee-naar-ijsselmeer)
                'kasteel-radboud',            // 6
                'burgers-stoommachines',      // 7
                'tuin-van-europa',            // 8 (mapt naar /themas/voedsel-en-groei)
              ]
              
              // Sorteer werelden volgens de volgorde
              const sortedThemes = [...themes.themes].sort((a, b) => {
                const indexA = themeOrder.indexOf(a.id)
                const indexB = themeOrder.indexOf(b.id)
                // Als niet gevonden, zet achteraan
                if (indexA === -1) return 1
                if (indexB === -1) return -1
                return indexA - indexB
              })
              
              return sortedThemes.map((theme) => {
                const Icon = themeIcons[theme.id] || BookOpenIcon
                const summary = getThemeSummary(theme)
                // Gebruik nieuwe titel als die bestaat, anders de oude naam
                const displayTitle = themeTitleMap[theme.id] || theme.name
                // Wereldkleur voor icoon (zoals op wereldpagina's)
                const colorScheme = themeColorSchemes[themeColorIdMap[theme.id]] || themeColorSchemes['westfriese-omringdijk']
              
              // Map theme IDs naar de juiste pagina links
              const themeLinkMap: Record<string, string> = {
                'gouden-eeuw': '/themas/handel-en-gouden-eeuw',
                'tuin-van-europa': '/themas/voedsel-en-groei',
                'de-polder': '/themas/de-polder',
                'zuiderzee-ijsselmeer': '/themas/zuiderzee-naar-ijsselmeer',
              }
              const themeLink = themeLinkMap[theme.id] || `/themas/${theme.id}`
              
              return (
                <Link
                  key={theme.id}
                  href={themeLink}
                  className="group block h-full"
                >
                  <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-polder-green cursor-pointer">
                    <CardContent className="p-6 pt-6 flex flex-col flex-grow">
                      <div className="flex flex-col items-center text-center flex-grow">
                        {/* Icon met wereldkleur (zoals op wereldpagina's) */}
                        <div className={`${colorScheme.bg} rounded-full p-4 mb-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
                          <Icon className={`h-10 w-10 ${colorScheme.text}`} />
                        </div>
                        
                        {/* Title - gebruik nieuwe "De Wereld van..." titel */}
                        <h3 className="font-serif text-xl font-bold text-deep-water-blue mb-3 group-hover:text-polder-green transition-colors flex-shrink-0">
                          {displayTitle}
                        </h3>
                        
                        {/* Summary - behoud de huidige ondertitels */}
                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                          {summary}
                        </p>
                        
                        {/* Grade Level Badges */}
                        <div className="flex flex-wrap gap-1 justify-center mt-auto flex-shrink-0">
                          {theme.bouw.onderbouw && (
                            <span className="text-xs bg-blue-100 text-deep-water-blue px-2 py-1 rounded font-medium">
                              OB
                            </span>
                          )}
                          {theme.bouw.middenbouw && (
                            <span className="text-xs bg-green-100 text-polder-green px-2 py-1 rounded font-medium">
                              MB
                            </span>
                          )}
                          {theme.bouw.bovenbouw && (
                            <span className="text-xs bg-brick-red/10 text-brick-red px-2 py-1 rounded font-medium">
                              BB
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })
            })()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
