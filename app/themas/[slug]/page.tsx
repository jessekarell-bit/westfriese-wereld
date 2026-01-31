import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PhaseIndicator from '@/components/PhaseIndicator'
import Tabs from '@/components/Tabs'
import ResourcesSidebar from '@/components/ResourcesSidebar'
import MemberGate from '@/components/MemberGate'
import { themes } from '@/src/data/curriculum'
import { getBouwContent } from '@/src/data/curriculum-helpers'
import { ArrowLeft, Target, Lightbulb, FileText, Download, Construction, Handshake, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Mapping van slugs naar "De Wereld van..." titels (zoals op homepage)
const slugToTitleMap: Record<string, string> = {
  'westfriese-omringdijk': 'de West-Friese Omringdijk',
  'grieken-romeinen': 'Grieken & Romeinen',
  'de-polder': 'de Polder',
  'handel-en-gouden-eeuw': 'de Gouden Eeuw',
  'zuiderzee-ijsselmeer': 'de Zuiderzee naar IJsselmeer',
  'zuiderzee-naar-ijsselmeer': 'de Zuiderzee naar IJsselmeer',
  'kasteel-radboud': 'Kasteel Radboud',
  'burgers-stoommachines': 'de burgers & stoommachines',
  'voedsel-en-groei': 'de Tuin van Europa',
}

// Helper function to convert slug to readable title with "De Wereld van..." prefix
function slugToTitle(slug: string): string {
  if (!slug) return 'Wereld'
  
  // Check if we have a mapping for this slug
  if (slugToTitleMap[slug]) {
    return slugToTitleMap[slug]
  }
  
  // Fallback: convert slug to readable format
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default async function ThemeDetailPage({ params }: PageProps) {
  const { slug } = await params
  const theme = themes.themes.find(t => t.id === slug)

  // If theme doesn't exist, show "In Development" page
  if (!theme) {
    const title = slugToTitle(slug)
    
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section with abstract pattern */}
          <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Abstract pattern background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-96 h-96 bg-deep-water-blue rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-polder-green rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brick-red rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
                <Construction className="h-5 w-5 text-amber-600" />
                <Badge variant="outline" className="bg-amber-50 border-amber-200 text-amber-700 px-3 py-1">
                  In Ontwikkeling
                </Badge>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-deep-water-blue mb-6 leading-tight">
                De Wereld van {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Achter de schermen werken we hard aan de leerlijnen voor deze wereld. We zoeken nog specifieke partners voor gastlessen en excursies.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Back button */}
            <Link 
              href="/themas"
              className="inline-flex items-center text-deep-water-blue hover:text-polder-green mb-8 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Terug naar wereldoverzicht
            </Link>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Status Card */}
              <Card className="border-2 border-amber-200 bg-amber-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <Construction className="h-6 w-6 text-amber-700" />
                    </div>
                    <CardTitle className="font-serif text-xl text-deep-water-blue">
                      Wat komt eraan?
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-600 mr-3 mt-2"></span>
                      <span>Leerlijnen voor onderbouw, middenbouw en bovenbouw</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-600 mr-3 mt-2"></span>
                      <span>Rijke teksten en leesboeken</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-600 mr-3 mt-2"></span>
                      <span>Praktische activiteiten en excursies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-600 mr-3 mt-2"></span>
                      <span>Lesmaterialen voor leerkrachten</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Call to Action Card */}
              <Card className="border-2 border-polder-green/30 bg-polder-green/5">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-polder-green/20 rounded-lg">
                      <Handshake className="h-6 w-6 text-polder-green" />
                    </div>
                    <CardTitle className="font-serif text-xl text-deep-water-blue">
                      Word Kwartiermaker
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 mb-6">
                    Heb jij expertise over <strong>{title}</strong>? Wij zoeken partners die kunnen bijdragen aan deze wereld met gastlessen, excursies of praktijkervaringen.
                  </CardDescription>
                  <Link
                    href="/partners"
                    className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm rounded-lg font-medium transition-colors bg-deep-water-blue text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-water-blue w-full group"
                  >
                    <span>Meer informatie</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Info Section */}
            <Card className="bg-gradient-to-br from-gray-50 to-white border-gray-200">
              <CardContent className="p-8">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="font-serif text-2xl font-bold text-deep-water-blue mb-4">
                    Binnenkort beschikbaar
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We werken gestaag aan de ontwikkeling van alle werelden. Elke wereld wordt zorgvuldig uitgewerkt met aandacht voor de drie doeldomeinen van Biesta (Kwalificatie, Socialisatie en Persoonsvorming) en de 5-fasen methodiek.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-polder-green" />
                      <span>SLO-kerndoelen verankerd</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-brick-red" />
                      <span>Praktische activiteiten</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-deep-water-blue" />
                      <span>Lesmaterialen voor leerkrachten</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  // Build tabs for available bouw levels
  const tabs: Array<{ id: string; label: string; content: React.ReactNode }> = []
  
  if (theme.bouw.onderbouw) {
    const content = getBouwContent(theme.bouw.onderbouw)
    if (content) {
      tabs.push({
        id: 'onderbouw',
        label: 'Onderbouw',
        content: (
          <BouwContent 
            content={content}
            level="Onderbouw"
          />
        )
      })
    }
  }

  if (theme.bouw.middenbouw) {
    const content = getBouwContent(theme.bouw.middenbouw)
    if (content) {
      tabs.push({
        id: 'middenbouw',
        label: 'Middenbouw',
        content: (
          <BouwContent 
            content={content}
            level="Middenbouw"
          />
        )
      })
    }
  }

  if (theme.bouw.bovenbouw) {
    const content = getBouwContent(theme.bouw.bovenbouw)
    if (content) {
      tabs.push({
        id: 'bovenbouw',
        label: 'Bovenbouw',
        content: (
          <BouwContent 
            content={content}
            level="Bovenbouw"
          />
        )
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back button */}
          <Link 
            href="/themas"
            className="inline-flex items-center text-deep-water-blue hover:text-polder-green mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar wereldoverzicht
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-deep-water-blue mb-4">
              {theme.name}
            </h1>
            {theme.introduction && (
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                {theme.introduction}
              </p>
            )}
            {!theme.introduction && theme.description && (
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                {theme.description}
              </p>
            )}
          </div>

          {/* Main Content with Sidebar - 70/30 split */}
          <div className="grid lg:grid-cols-10 gap-8">
            {/* Main Content - 70% */}
            <div className="lg:col-span-7">
              {/* Tabs System */}
              {tabs.length > 0 ? (
                <Tabs tabs={tabs} defaultTab={tabs[0]?.id} />
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
                  <p className="text-gray-600 italic">
                    Nog in ontwikkeling - De inhoud voor deze wereld wordt binnenkort toegevoegd.
                  </p>
                </div>
              )}

              {/* 5-Phase Indicator - Below tabs */}
              <div className="mt-8">
                <PhaseIndicator />
              </div>

              {/* Leerkracht Toolkit - Below Phase Indicator */}
              <div className="mt-8">
                <TeacherToolkit />
              </div>
            </div>

            {/* Sidebar - 30% */}
            <div className="lg:col-span-3">
              <ResourcesSidebar 
                resources={theme.resources} 
                themeName={theme.name}
                themeId={theme.id}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

interface BouwContentProps {
  content: {
    description: string
    learningGoals: string[]
    activities: string[]
  }
  level: string
}

function BouwContent({ content, level }: BouwContentProps) {
  return (
    <div className="space-y-8">
      {/* Description */}
      <div>
        <h3 className="font-serif text-2xl font-bold text-deep-water-blue mb-3">
          Over {level}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {content.description}
        </p>
      </div>

      {/* Learning Goals */}
      {content.learningGoals.length > 0 && (
        <div>
          <div className="flex items-center mb-4">
            <Target className="h-6 w-6 text-polder-green mr-2" />
            <h3 className="font-serif text-xl font-bold text-deep-water-blue">
              Leerdoelen
            </h3>
          </div>
          <ul className="space-y-3">
            {content.learningGoals.map((goal, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-polder-green text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Activities */}
      {content.activities.length > 0 && (
        <div>
          <div className="flex items-center mb-4">
            <Lightbulb className="h-6 w-6 text-brick-red mr-2" />
            <h3 className="font-serif text-xl font-bold text-deep-water-blue">
              Activiteiten
            </h3>
          </div>
          <ul className="space-y-3">
            {content.activities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brick-red text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Empty State if no structured content */}
      {content.learningGoals.length === 0 && content.activities.length === 0 && (
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
          <p className="text-gray-600 italic mb-2">
            Nog in ontwikkeling
          </p>
          <p className="text-sm text-gray-500">
            Gedetailleerde leerdoelen en activiteiten voor {level} worden binnenkort toegevoegd.
          </p>
        </div>
      )}
    </div>
  )
}

// Teacher Toolkit Component
function TeacherToolkit() {
  const downloads = [
    {
      title: 'Thematisch Lesplan (Framework 2.0)',
      type: 'PDF',
      icon: FileText,
      href: '#',
    },
    {
      title: 'Beoordelingsrubric (Biesta Kwalificatie)',
      type: 'PDF',
      icon: FileText,
      href: '#',
    },
    {
      title: 'Werkblad Onderzoeksfase',
      type: 'Word',
      icon: FileText,
      href: '#',
    },
    {
      title: 'Brief voor Ouders',
      type: 'Word',
      icon: FileText,
      href: '#',
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-2xl">Leerkracht toolkit</CardTitle>
      </CardHeader>
      <CardContent>
        <MemberGate>
          <div className="space-y-4">
            <h3 className="font-semibold text-deep-water-blue mb-4">Materialen & downloads</h3>
            <ul className="space-y-3">
              {downloads.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-polder-green hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center space-x-3 flex-grow">
                        <div className="flex-shrink-0">
                          <Icon className="h-5 w-5 text-deep-water-blue group-hover:text-polder-green transition-colors" />
                        </div>
                        <span className="text-gray-900 font-medium group-hover:text-deep-water-blue transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                        <Download className="h-4 w-4 text-gray-400 group-hover:text-polder-green transition-colors" />
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </MemberGate>
      </CardContent>
    </Card>
  )
}
