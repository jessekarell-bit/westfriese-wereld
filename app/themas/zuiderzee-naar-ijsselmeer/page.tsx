'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Tabs from '@/components/Tabs'
import MemberGate from '@/components/MemberGate'
import { ThemeTabs } from '@/components/ThemeTabs'
import { DidacticRoute } from '@/components/DidacticRoute'
import { getThemeConfig, getActiveColor, getActiveBorderColor } from '@/src/data/theme-config'
import { ThemeTab } from '@/src/types/theme'
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
  const didacticRouteRef = useRef<HTMLDivElement>(null)

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
      titel: 'De Muur in de Zee',
      focus: 'Observatie, het verschil tussen zout/zoet en de sociale verandering',
      fasen: [
        {
          fase: 'Doelbepaling',
          beschrijving: 'De leerlingen ontdekken het fysieke verschil tussen zout (zee) en zoet (meer) water en begrijpen dat de afsluiting in 1932 grote gevolgen had voor de mensen die er woonden (vissers vs. boeren). Ze leren navigeren op een kaart van "Toen" en "Nu".',
          icon: Shield
        },
        {
          fase: 'Narratieve Inbedding',
          beschrijving: '"De Muur in de Zee": Het verhaal wordt verteld vanuit twee kinderen in 1932: een visserszoon uit Enkhuizen (die bang is dat de vis verdwijnt) en een boerendochter uit de Wieringermeer (die blij is met het nieuwe land). De leerlingen beleven de verwarring: de zee wordt ineens een meer.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Het Waterlab: In de klas staan twee bakken water (zout en zoet). De leerlingen doen een drijfproef met een ei (in zout water drijft het, in zoet zinkt het). Excursie: Bezoek aan het Zuiderzeemuseum met focus op de oude vissershuisjes en het leven van vóór de dijk.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Spel van Verandering: Onderzoek: Proefje met planten: wat gebeurt er als je een plant zout water geeft? (Hij gaat dood -> daarom was de Afsluitdijk nodig voor de boeren). Maken: Het bouwen van een Tijdlijn in de klas: Plaatjes van botters (vroeger) en tractoren (nu) op de juiste plek plakken. Rol: Rollenspel in de klas: de Visser tegen de Boer.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Toneelstuk: De leerlingen voeren een kort toneelstuk of tableau vivant op voor ouders of een andere klas, waarin ze laten zien hoe de vissers afscheid namen van de zee en de boeren het nieuwe land verwelkomden.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'De Ecologische Metamorfose',
      focus: 'Systeemdenken, biologie (osmose/voedselketens) en watertechniek',
      fasen: [
        {
          fase: 'Doelbepaling',
          beschrijving: 'De leerlingen analyseren de afsluiting als een ecologische schok. Ze leren over voedselketens (waarom verdween de haring?), het biologische principe van osmose (waarom overleeft een zeevis niet in zoet water?) en de techniek van water wegpompen.',
          icon: Shield
        },
        {
          fase: 'Narratieve Inbedding',
          beschrijving: '"Het Raadsel van de Verdwenen Haring": De leerlingen volgen Klaas, een jongen in 1933. Zijn vader komt thuis met lege netten. De haring is weg, maar er verschijnen vreemde glibberige dieren (palingen). De leerlingen fungeren als "Natuurdetectives" die moeten uitzoeken waarom de natuur in de war is.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Watertoppers: Deelname aan het programma Watertoppers in het Zuiderzeemuseum. Hier ervaren ze fysiek hoe zwaar het is om water te verplaatsen met een vijzel en bouwen ze dijken. Ze zien de technische kant van de strijd tegen het water.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Het Laboratorium: Biologie: Osmose-proef: Een stukje komkommer in zout water leggen (wordt slap) vs. zoet water (blijft stevig). Dit verklaart waarom zeevissen uitdrogen in zoet water. Data: Grafieken maken van de visvangst in Enkhuizen (de kelderende lijn van de haring na 1932). Ecologie: Het reconstrueren van de voedselketen: van haring/bruinvis (toen) naar muggenlarve/snoekbaars (nu).',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Natuurbeheersplan: De klas wordt een adviesbureau. Ze ontwerpen een maquette of poster voor een nieuw stukje IJsselmeer (geïnspireerd op de Marker Wadden of Vismigratierivier) waar ruimte is voor zowel natuur als recreatie. Ze presenteren dit aan een "Dijkgraaf".',
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
        <div className="space-y-6 min-h-[400px]">
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
              <BookOpen className="h-5 w-5 mr-2 text-deep-water-blue" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              De Huiskamer van de Visser: Klederdracht passen en 'Botter' bootjes vouwen die echt blijven drijven.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Ship className="h-5 w-5 mr-2 text-deep-water-blue" />
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
        <div className="space-y-6 min-h-[400px]">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-3">
              De Muur in de Zee
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Observatie, het verschil tussen zout/zoet en de sociale verandering</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-deep-water-blue" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Muur in de Zee": Het verhaal wordt verteld vanuit twee kinderen in 1932: een visserszoon uit Enkhuizen (die bang is dat de vis verdwijnt) en een boerendochter uit de Wieringermeer (die blij is met het nieuwe land). De leerlingen beleven de verwarring: de zee wordt ineens een meer.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-deep-water-blue" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Het Waterlab:</strong> In de klas staan twee bakken water (zout en zoet). De leerlingen doen een drijfproef met een ei (in zout water drijft het, in zoet zinkt het).</p>
              <p><strong>Spel van Verandering:</strong> Rollenspel in de klas: de Visser tegen de Boer.</p>
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
        <div className="space-y-6 min-h-[400px]">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-3">
              De Ecologische Metamorfose
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Systeemdenken, biologie (osmose/voedselketens) en watertechniek</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-deep-water-blue" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Raadsel van de Verdwenen Haring": De leerlingen volgen Klaas, een jongen in 1933. Zijn vader komt thuis met lege netten. De haring is weg, maar er verschijnen vreemde glibberige dieren (palingen). De leerlingen fungeren als "Natuurdetectives" die moeten uitzoeken waarom de natuur in de war is.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-deep-water-blue" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Watertoppers:</strong> Deelname aan het programma Watertoppers in het Zuiderzeemuseum. Hier ervaren ze fysiek hoe zwaar het is om water te verplaatsen met een vijzel en bouwen ze dijken.</p>
              <p><strong>Het Laboratorium:</strong> Osmose-proef met komkommer, grafieken maken van visvangst, en voedselketen reconstrueren.</p>
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
        <div className="space-y-6 min-h-[400px]">
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
              <BookOpen className="h-5 w-5 mr-2 text-deep-water-blue" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Het Grote Visse-Spel: Wat gebeurt er als de haring verdwijnt en de aal verschijnt? En hoe werkt de Vismigratierivier?
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Fish className="h-5 w-5 mr-2 text-deep-water-blue" />
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
  const themeConfig = getThemeConfig('zuiderzee-naar-ijsselmeer')
  const colorScheme = themeConfig.colorScheme!

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
        <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          {/* Abstract water background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-blue-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van Zuiderzee naar IJsselmeer
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Van zout naar zoet: Het grootste waterbouwkundige project ter wereld
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
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
            <div className="lg:col-span-7 px-2 sm:px-0">
              {/* Tabs System */}
              <ThemeTabs 
                tabs={tabs as ThemeTab[]} 
                defaultTab="onderbouw"
                activeColor={getActiveColor('zuiderzee-naar-ijsselmeer')}
                activeBorderColor={getActiveBorderColor('zuiderzee-naar-ijsselmeer')}
                onTabChange={handleTabChange}
              />

              {/* 5-Fasen Verticale Lijst */}
              <div ref={didacticRouteRef}>
                <DidacticRoute
                  phases={activeRoute.fasen}
                  title={activeRoute.titel}
                  focus={activeRoute.focus}
                  colorScheme={colorScheme}
                />
              </div>
            </div>

            {/* Sidebar - 30% */}
            <div className="lg:col-span-3 space-y-6">
              {/* Boekenplank */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <BookOpen className="h-5 w-5 text-deep-water-blue mr-2" />
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
                    <Users className="h-5 w-5 text-deep-water-blue mr-2" />
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
                    <FileText className="h-5 w-5 text-deep-water-blue mr-2" />
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
                          <FileText className="h-5 w-5 text-deep-water-blue group-hover:text-polder-green flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-polder-green block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-polder-green flex-shrink-0" />
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
