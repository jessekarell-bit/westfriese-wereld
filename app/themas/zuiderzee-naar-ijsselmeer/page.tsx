'use client'

import Link from 'next/link'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Tabs from '@/components/Tabs'
import MemberGate from '@/components/MemberGate'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  Waves, 
  Shield, 
  BookOpen, 
  FileText, 
  Download,
  MapPin,
  Users,
  FileDown,
  ExternalLink,
  Sprout,
  Lightbulb,
  Search,
  Gavel,
  Ship,
  Fish
} from 'lucide-react'

export default function ZuiderzeePage() {
  // State voor geselecteerde tab en route
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  // Routes per bouw
  const routes = {
    onderbouw: {
      titel: 'Vissen & Boten',
      focus: 'Zout vs. Zoet, Drijven & Zinken, De Vissersboot',
      fasen: [
        {
          fase: 'Verwondering',
          beschrijving: 'Proef het verschil! (Zout water vs. Zoet water experiment).',
          icon: Shield
        },
        {
          fase: 'Historie',
          beschrijving: 'De watersnood van 1916 en het gedurfde plan van Lely.',
          icon: BookOpen
        },
        {
          fase: 'Ervaring',
          beschrijving: 'Excursie naar het Zuiderzeemuseum (Enkhuizen) of het Vlietermonument (Afsluitdijk).',
          icon: MapPin
        },
        {
          fase: 'Onderzoek',
          beschrijving: 'Hoe werkt een sluis? Zelf een sluizencomplex bouwen in de watertafel.',
          icon: Search
        },
        {
          fase: 'Presentatie',
          beschrijving: 'De Toekomst van het IJsselmeer: Leerlingen ontwerpen drijvende huizen.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'De Afsluitdijk',
      focus: 'Cornelis Lely, Constructie & Eb/Vloed',
      fasen: [
        {
          fase: 'Verwondering',
          beschrijving: 'Proef het verschil! (Zout water vs. Zoet water experiment).',
          icon: Shield
        },
        {
          fase: 'Historie',
          beschrijving: 'De watersnood van 1916 en het gedurfde plan van Lely.',
          icon: BookOpen
        },
        {
          fase: 'Ervaring',
          beschrijving: 'Excursie naar het Zuiderzeemuseum (Enkhuizen) of het Vlietermonument (Afsluitdijk).',
          icon: MapPin
        },
        {
          fase: 'Onderzoek',
          beschrijving: 'Bouw je eigen dijk: In de zandbak met verschillende materialen (klei, zand, stenen). Houdt hij het water tegen?',
          icon: Search
        },
        {
          fase: 'Presentatie',
          beschrijving: 'De Toekomst van het IJsselmeer: Leerlingen ontwerpen drijvende huizen.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'De Afsluitdijk',
      focus: 'Cornelis Lely, Constructie & Eb/Vloed',
      fasen: [
        {
          fase: 'Verwondering',
          beschrijving: 'Proef het verschil! (Zout water vs. Zoet water experiment).',
          icon: Shield
        },
        {
          fase: 'Historie',
          beschrijving: 'De watersnood van 1916 en het gedurfde plan van Lely.',
          icon: BookOpen
        },
        {
          fase: 'Ervaring',
          beschrijving: 'Excursie naar het Zuiderzeemuseum (Enkhuizen) of het Vlietermonument (Afsluitdijk).',
          icon: MapPin
        },
        {
          fase: 'Onderzoek',
          beschrijving: 'Bouw je eigen dijk: In de zandbak met verschillende materialen (klei, zand, stenen). Houdt hij het water tegen?',
          icon: Search
        },
        {
          fase: 'Presentatie',
          beschrijving: 'De Toekomst van het IJsselmeer: Leerlingen ontwerpen drijvende huizen.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Ecologie & Economie',
      focus: 'Voedselketens, Watermanagement & Visserij-transitie',
      fasen: [
        {
          fase: 'Verwondering',
          beschrijving: 'Proef het verschil! (Zout water vs. Zoet water experiment).',
          icon: Shield
        },
        {
          fase: 'Historie',
          beschrijving: 'De watersnood van 1916 en het gedurfde plan van Lely.',
          icon: BookOpen
        },
        {
          fase: 'Ervaring',
          beschrijving: 'Excursie naar het Zuiderzeemuseum (Enkhuizen) of het Vlietermonument (Afsluitdijk).',
          icon: MapPin
        },
        {
          fase: 'Onderzoek',
          beschrijving: 'Het Grote Visse-Spel: Wat gebeurt er als de haring verdwijnt en de aal verschijnt? En hoe werkt de Vismigratierivier?',
          icon: Fish
        },
        {
          fase: 'Presentatie',
          beschrijving: 'De Toekomst van het IJsselmeer: Leerlingen ontwerpen drijvende huizen.',
          icon: Users
        }
      ]
    }
  }

  // Tabs data voor de vier bouwen
  const tabs = [
    {
      id: 'onderbouw',
      label: 'Onderbouw',
      subtitle: 'Groep 1-2',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-3">
              Vissen & Boten
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Zout vs. Zoet, Drijven & Zinken, De Vissersboot</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              De Huiskamer van de Visser: Klederdracht passen en 'Botter' bootjes vouwen die echt blijven drijven.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Ship className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>De Huiskamer van de Visser:</strong> Klederdracht passen en 'Botter' bootjes vouwen die echt blijven drijven.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'middenbouw34',
      label: 'Middenbouw',
      subtitle: 'Groep 3-4',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-3">
              De Afsluitdijk
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Cornelis Lely, Constructie & Eb/Vloed</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bouw je eigen dijk: In de zandbak met verschillende materialen (klei, zand, stenen). Houdt hij het water tegen?
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bouw je eigen dijk:</strong> In de zandbak met verschillende materialen (klei, zand, stenen). Houdt hij het water tegen?</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'middenbouw56',
      label: 'Middenbouw',
      subtitle: 'Groep 5-6',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-3">
              De Afsluitdijk
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Cornelis Lely, Constructie & Eb/Vloed</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bouw je eigen dijk: In de zandbak met verschillende materialen (klei, zand, stenen). Houdt hij het water tegen?
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bouw je eigen dijk:</strong> In de zandbak met verschillende materialen (klei, zand, stenen). Houdt hij het water tegen?</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'bovenbouw',
      label: 'Bovenbouw',
      subtitle: 'Groep 7-8',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-3">
              Ecologie & Economie
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Voedselketens, Watermanagement & Visserij-transitie</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Het Grote Visse-Spel: Wat gebeurt er als de haring verdwijnt en de aal verschijnt? En hoe werkt de Vismigratierivier?
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Fish className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Het Grote Visse-Spel:</strong> Wat gebeurt er als de haring verdwijnt en de aal verschijnt? En hoe werkt de Vismigratierivier?</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  // Handler voor tab wijziging
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    // Update selectedBouw op basis van de geselecteerde tab
    if (tabId === 'onderbouw') {
      setSelectedBouw('onderbouw')
    } else if (tabId === 'middenbouw34') {
      setSelectedBouw('middenbouw34')
    } else if (tabId === 'middenbouw56') {
      setSelectedBouw('middenbouw56')
    } else if (tabId === 'bovenbouw') {
      setSelectedBouw('bovenbouw')
    }
  }

  // Functie om de actieve route te bepalen op basis van de geselecteerde bouw
  const getActiveRoute = () => {
    return routes[selectedBouw]
  }

  const activeRoute = getActiveRoute()

  // Custom Tabs component die ook de route update
  const CustomTabs = ({ tabs, defaultTab }: { tabs: any[], defaultTab?: string }) => {
    const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content

    return (
      <div>
        <div className="border-b border-gray-200 mb-6 overflow-x-auto -mx-4 sm:mx-0">
          <nav className="flex space-x-1 px-4 sm:px-0 min-w-max sm:min-w-0" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-t-lg transition-colors flex flex-col items-center whitespace-nowrap flex-shrink-0
                  ${
                    activeTab === tab.id
                      ? 'bg-cyan-700 text-white border-b-2 border-cyan-700'
                      : 'text-gray-700 hover:text-cyan-700 hover:bg-gray-50'
                  }
                `}
              >
                <span>{tab.label}</span>
                {tab.subtitle && (
                  <span className={`text-[10px] sm:text-xs mt-0.5 ${
                    activeTab === tab.id ? 'text-white/90' : 'text-gray-500'
                  }`}>
                    {tab.subtitle}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
        <div className="min-h-[300px] sm:min-h-[400px]">
          {activeTabContent}
        </div>
      </div>
    )
  }

  // Rijke Teksten
  const boeken = {
    informatief: [
      'De Afsluitdijk',
      'Cornelis Lely: De man die de zee temde',
      'Van Zuiderzee naar IJsselmeer'
    ],
    leesboeken: [
      'De zee kwam door de brievenbus (Selma Noort)',
      'Storm (Schmitz)',
      'Het geheim van de dijk'
    ]
  }

  // Downloads
  const downloads = [
    { title: 'Bouwplan_Sluis.pdf', type: 'PDF' },
    { title: 'Lesbrief_Cornelis_Lely.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Abstract water background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-blue-400/10 blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-700 mb-3 sm:mb-4 leading-tight">
              De Wereld van Zuiderzee naar IJsselmeer
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-800 mb-4 sm:mb-6 font-medium px-2">
              Van zout naar zoet: Het grootste waterbouwkundige project ter wereld
            </p>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ooit voeren hier piraten en VOC-schepen op een woeste zoute zee. Nu is het de grootste zoetwatervoorraad van Nederland. Hoe tem je een zee? En wat gebeurt er met de vissen als het water verandert? Een thema over Cornelis Lely, de Afsluitdijk en nieuwe natuur.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Back button */}
          <Link 
            href="/themas"
            className="inline-flex items-center text-cyan-700 hover:text-cyan-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar thema overzicht
          </Link>

          {/* Main Content with Sidebar - 70/30 split */}
          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            {/* Main Content - 70% */}
            <div className="lg:col-span-7">
              {/* Tabs System */}
              <CustomTabs tabs={tabs} defaultTab="onderbouw" />

              {/* 5-Fasen Verticale Lijst */}
              <div className="mt-12">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-2">
                    De didactische route
                  </h3>
                  <p className="text-lg font-medium text-cyan-800 mb-1">
                    {activeRoute.titel}
                  </p>
                  <p className="text-sm text-gray-600">
                    Focus: {activeRoute.focus}
                  </p>
                </div>
                <div className="space-y-4">
                  {activeRoute.fasen.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Card 
                        key={index} 
                        className="border-l-4 border-l-cyan-600"
                      >
                        <CardContent className="p-6 sm:p-8">
                          <div className="flex items-start gap-4">
                            {/* Phase number badge */}
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center">
                                  <Icon className="h-5 w-5" />
                                </div>
                                <h4 className="font-semibold text-cyan-700 text-lg">
                                  {item.fase}
                                </h4>
                              </div>
                              <p className="text-gray-700 leading-relaxed">
                                {item.beschrijving}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar - 30% */}
            <div className="lg:col-span-3 space-y-6">
              {/* Boekenplank */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <BookOpen className="h-5 w-5 text-cyan-600 mr-2" />
                    Boekenplank (rijke teksten)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MemberGate>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Informatief:</p>
                        <ul className="space-y-1">
                          {boeken.informatief.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-cyan-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-cyan-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-xs text-gray-500 italic mt-3">
                        Beschikbaar via West-Friese Bibliotheken
                      </p>
                    </div>
                  </MemberGate>
                </CardContent>
              </Card>

              {/* Partner Uitgelicht */}
              <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 text-cyan-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-cyan-700 mb-2">
                    Zuiderzeemuseum
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Waar de verdwenen zee weer tot leven komt. Ontdek het leven voor de Afsluitdijk.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Bekijk educatief aanbod
                  </Button>
                </CardContent>
              </Card>

              {/* Leerkracht Toolkit */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <FileText className="h-5 w-5 text-cyan-600 mr-2" />
                    Leerkracht toolkit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MemberGate>
                    <div className="space-y-3">
                      {downloads.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-cyan-600 hover:bg-cyan-50 transition-colors group"
                        >
                          <FileText className="h-5 w-5 text-cyan-600 group-hover:text-cyan-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-cyan-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-cyan-600 flex-shrink-0" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </MemberGate>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
