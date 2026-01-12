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
  Sprout, 
  Shield, 
  BookOpen, 
  Lightbulb, 
  MapPin, 
  FileText, 
  Download,
  Users,
  ExternalLink,
  Microscope,
  Search,
  Gavel
} from 'lucide-react'

export default function VoedselEnGroeiPage() {
  // State voor geselecteerde tab en route
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  // Routes per bouw
  const routes = {
    onderbouw: {
      titel: 'Het Wonderlijke Zaadje',
      focus: 'Verwondering, verzorging en de cyclus van groei',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontdekken dat een \'dood\' zaadje een levende plant wordt als je er goed voor zorgt (licht, water, aarde). Ze maken kennis met de kassen in hun omgeving als \'glazen paleizen\' waar planten wonen.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Geheim van het Kleine Zakje": De klas vindt een mysterieuze kist met \'toverbolletjes\' (zaden) en een brief van Kasper de Tuinder (of de Plantendokter). Hij vraagt de kinderen om op zijn kostbare zaden te passen en ze wakker te maken.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Expeditie Seed Valley: Een wandeling in de buurt om te kijken naar de grote kassen en akkers. De kinderen zetten een \'toverbril\' op om te zoeken naar dingen die groeien. Of een bezoek aan een lokale schooltuin/volkstuin.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Het Grote Groei-Experiment: Biologie: Bonen planten in doorzichtige potten om de wortels te zien groeien. Spel: De huishoek wordt een Tuincentrum/Groentewinkel waar zaden en bloemen worden verkocht. Techniek: Bouwen van een kas met blokken en doorzichtig plastic in de bouwhoek.',
          icon: Sprout
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Oogstfeest: Ouders komen op bezoek in de \'Tuin van de Klas\'. De kinderen verkopen hun zelfgekweekte stekjes of tuinkers-beschuitjes en laten hun groei-dagboek zien.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'De Jonge Plantendokter',
      focus: 'Historisch besef (Nanne Groot), waarnemen en de basis van handel',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren over de geschiedenis van Nanne Jansz. Groot (de grondlegger van de zaadhandel) en begrijpen wat een plant nodig heeft om gezond te blijven. Ze leren dat zaden verhandeld worden.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Man met de Mand": Het verhaal van Nanne Groot die met zijn mand vol zakjes (\'builtjes\') door het land liep om zaden te verkopen na de \'Karwijstorm\'. De leerlingen worden hulpjes van de Plantendokter die een zieke plant beter moeten maken.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek aan Sow to Grow: Een excursie naar het museum in Enkhuizen. Leerlingen doen een speurtocht naar de herkomst van voedsel en zien hoe zaden vroeger en nu werden bewaard.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Ambacht: Onderzoek: Het Groei-Laboratorium: experimenteren met variabelen (wel/geen licht, wel/geen water) en dit bijhouden in een logboek. Geschiedenis: Naspelen van de reis van Nanne Groot: zaden afwegen op een balansweegschaal en verpakken in zakjes. Techniek: Zelf een mini-kas bouwen van kosteloos materiaal om het broeikaseffect te testen.',
          icon: Lightbulb
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De West-Friese Oogstmarkt: De klas wordt een marktplein. Leerlingen presenteren hun mini-kassen en verkopen hun gekweekte planten of zaden. Ze vertellen het verhaal van Nanne Groot aan het publiek.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'High-Tech in de Polder',
      focus: 'Technologie, klimaatbeheersing en fotosynthese',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen dat moderne landbouw technologie is. Ze leren over fotosynthese (planten als energiefabrieken) en hoe techniek (kassen, robots) de natuur een handje helpt.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Slimme Kas": De leerlingen worden ontwerpers. Er is een probleem: het klimaat verandert en we hebben een kas nodig die zelf kan \'denken\' (temperatuur regelen, water geven).',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bedrijfsbezoek of Gastles: Een bezoek aan een modern veredelingsbedrijf (zoals Enza of Syngenta) om robots en klimaatkamers te zien, of een practicum in het lab van Sow to Grow.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Ontwerpend Leren: Techniek/Digitaal: Het ontwerpen van een \'Slimme Kas\'. Gebruik van sensoren (bijv. Micro:bit) om vocht of temperatuur te meten. Biologie: Proefjes met fotosynthese (blad afplakken om effect van licht te zien).',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Techniek-Expo: Leerlingen presenteren hun ontwerpen voor de kas van de toekomst en demonstreren hun sensoren of irrigatiesystemen aan experts of ouders.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Architecten van het Voedsel',
      focus: 'Genetica (DNA), Ethiek en Wereldvoedselvoorziening',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de rol van West-Friesland (Seed Valley) in de wereld. Ze leren over erfelijkheid (Mendel, DNA), veredeling en debatteren over ethische dilemma\'s (GMO, patenten).',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Future Food Team": Een scenario vanuit het jaar 2050. De wereldbevolking groeit, het klimaat is extreem. De leerlingen krijgen de opdracht om een \'Supergewas\' te ontwikkelen dat de wereld kan voeden.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Lab-Experience: Een verdiepend bezoek aan Sow to Grow of een gastles van een veredelaar waarbij DNA zichtbaar wordt gemaakt (bijv. uit een kiwi of banaan). Of de inzet van de Plant Rover in de klas.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Wetenschap en Ethiek: Onderzoek: Simulatie van kruisingen (Mendel) om te zien hoe eigenschappen worden doorgegeven. Burgerschap: Het Grote GGO-Debat: "Mag je sleutelen aan de natuur om honger op te lossen?". Ontwerp: Het ontwerpen van het \'Supergewas\' met specifieke eigenschappen (bijv. zouttolerant).',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Wereldvoedselcongres: Een formele conferentie waar leerlingen hun \'Supergewas\' pitchen aan een jury en hun visie geven op de voedseltoekomst.',
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
            <h3 className="font-serif text-2xl font-bold text-lime-700 mb-3">
              Het Wonderlijke Zaadje
            </h3>
            <div className="bg-lime-50 rounded-lg p-4 mb-4 border-l-4 border-lime-600">
              <p className="text-sm font-semibold text-lime-900 mb-2">Focus:</p>
              <p className="text-gray-700">Verwondering, verzorging en de cyclus van groei</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-lime-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Geheim van het Kleine Zakje": De klas vindt een mysterieuze kist met 'toverbolletjes' (zaden) en een brief van Kasper de Tuinder (of de Plantendokter). Hij vraagt de kinderen om op zijn kostbare zaden te passen en ze wakker te maken.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-lime-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Het Grote Groei-Experiment:</strong> Bonen planten in doorzichtige potten om de wortels te zien groeien. De huishoek wordt een Tuincentrum/Groentewinkel. Bouwen van een kas met blokken en doorzichtig plastic.</p>
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
            <h3 className="font-serif text-2xl font-bold text-lime-700 mb-3">
              De Jonge Plantendokter
            </h3>
            <div className="bg-lime-50 rounded-lg p-4 mb-4 border-l-4 border-lime-600">
              <p className="text-sm font-semibold text-lime-900 mb-2">Focus:</p>
              <p className="text-gray-700">Historisch besef (Nanne Groot), waarnemen en de basis van handel</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-lime-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Man met de Mand": Het verhaal van Nanne Groot die met zijn mand vol zakjes ('builtjes') door het land liep om zaden te verkopen na de 'Karwijstorm'. De leerlingen worden hulpjes van de Plantendokter die een zieke plant beter moeten maken.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-lime-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Het Groei-Laboratorium:</strong> Experimenteren met variabelen (wel/geen licht, wel/geen water). Naspelen van de reis van Nanne Groot: zaden afwegen en verpakken. Zelf een mini-kas bouwen om het broeikaseffect te testen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-lime-700 mb-3">
              High-Tech in de Polder
            </h3>
            <div className="bg-lime-50 rounded-lg p-4 mb-4 border-l-4 border-lime-600">
              <p className="text-sm font-semibold text-lime-900 mb-2">Focus:</p>
              <p className="text-gray-700">Technologie, klimaatbeheersing en fotosynthese</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-lime-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Slimme Kas": De leerlingen worden ontwerpers. Er is een probleem: het klimaat verandert en we hebben een kas nodig die zelf kan 'denken' (temperatuur regelen, water geven).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-lime-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Ontwerpend Leren:</strong> Het ontwerpen van een 'Slimme Kas' met sensoren (Micro:bit) om vocht of temperatuur te meten. Proefjes met fotosynthese (blad afplakken om effect van licht te zien).</p>
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
            <h3 className="font-serif text-2xl font-bold text-lime-700 mb-3">
              Architecten van het Voedsel
            </h3>
            <div className="bg-lime-50 rounded-lg p-4 mb-4 border-l-4 border-lime-600">
              <p className="text-sm font-semibold text-lime-900 mb-2">Focus:</p>
              <p className="text-gray-700">Genetica (DNA), Ethiek en Wereldvoedselvoorziening</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-lime-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Future Food Team": Een scenario vanuit het jaar 2050. De wereldbevolking groeit, het klimaat is extreem. De leerlingen krijgen de opdracht om een 'Supergewas' te ontwikkelen dat de wereld kan voeden.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-lime-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Wetenschap en Ethiek:</strong> Simulatie van kruisingen (Mendel). Het Grote GGO-Debat: "Mag je sleutelen aan de natuur om honger op te lossen?". Het ontwerpen van het 'Supergewas' met specifieke eigenschappen.</p>
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
                onClick={(e) => {
                  e.preventDefault()
                  handleTabChange(tab.id)
                }}
                className={`
                  px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-t-lg transition-colors flex flex-col items-center whitespace-nowrap flex-shrink-0
                  ${
                    activeTab === tab.id
                      ? 'bg-lime-700 text-white border-b-2 border-lime-700'
                      : 'text-gray-700 hover:text-lime-700 hover:bg-gray-50'
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
      'Het wonder van de plant',
      'Mendel en zijn erwten',
      'Seed Valley: De kracht van veredeling'
    ],
    leesboeken: [
      'Rupsje Nooitgenoeg (Eric Carle)',
      'Het zaadje (Eric Carle)',
      'De reuzentulp (Tjibbe Veldkamp)'
    ]
  }

  // Downloads
  const downloads = [
    { title: 'Lesbrief_Seizoenen_OB.pdf', type: 'PDF' },
    { title: 'Practicum_DNA_Aardbei_BB.pdf', type: 'PDF' },
    { title: 'Handreiking_Gastles_Veredeling.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-lime-50 via-green-50 to-lime-100 w-full px-6 py-12 md:p-20 overflow-hidden">
          {/* Abstract pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-lime-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-lime-400/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-green-400/10 blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-lime-700 mb-3 sm:mb-4 leading-tight">
              De Wereld van de Tuin van Europa
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-800 mb-4 sm:mb-6 font-medium">
              Seed Valley, Genetica & Voedseltoekomst
            </p>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              West-Friesland is de groentetuin van Europa. Maar hoe maken we voedsel dat resistent is tegen klimaatverandering? In dit thema duiken leerlingen in de wonderlijke wereld van groei, van het eerste zaadje bij de kleuters tot DNA-technologie in groep 8.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Back button */}
          <Link 
            href="/themas"
            className="inline-flex items-center text-lime-700 hover:text-lime-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar thema overzicht
          </Link>

          {/* Main Content with Sidebar - 70/30 split */}
          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            {/* Main Content - 70% */}
            <div className="lg:col-span-7 px-2 sm:px-0">
              {/* Tabs System */}
              <CustomTabs tabs={tabs} defaultTab="onderbouw" />

              {/* 5-Fasen Verticale Lijst */}
              <div className="mt-8 sm:mt-12">
                <div className="mb-4 sm:mb-6 px-2 sm:px-0">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-lime-700 mb-2">
                    De didactische route
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-lime-800 mb-1">
                    {activeRoute.titel}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Focus: {activeRoute.focus}
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {activeRoute.fasen.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Card 
                        key={index} 
                        className="border-l-4 border-l-lime-600"
                      >
                        <CardContent className="p-5 sm:p-6 lg:p-8">
                          <div className="flex items-start gap-3 sm:gap-4">
                            {/* Phase number badge */}
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lime-600 text-white flex items-center justify-center text-base sm:text-lg font-bold shadow-lg">
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0">
                                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <h4 className="font-semibold text-lime-700 text-base sm:text-lg">
                                  {item.fase}
                                </h4>
                              </div>
                              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
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
                    <BookOpen className="h-5 w-5 text-lime-600 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-lime-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-lime-600 pl-3">
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

              {/* Partner Card 1: Seed Valley */}
              <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Sprout className="h-5 w-5 text-lime-700 mr-2" />
                    Seed Valley
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Het mondiale centrum voor plantenveredeling, hier in onze achtertuin.
                  </p>
                  <Link 
                    href="https://www.seedvalley.nl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-8 px-3 text-xs rounded-lg font-medium transition-colors border border-gray-300 bg-transparent hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    www.seedvalley.nl
                  </Link>
                </CardContent>
              </Card>

              {/* Partner Card 2: Sow to Grow */}
              <Card className="bg-gradient-to-br from-green-50 to-lime-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Microscope className="h-5 w-5 text-green-700 mr-2" />
                    Sow to Grow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    De plant science experience voor het onderwijs.
                  </p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center justify-center h-8 px-3 text-xs rounded-lg font-medium transition-colors border border-gray-300 bg-transparent hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full group"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Meer informatie
                  </Link>
                </CardContent>
              </Card>

              {/* Leerkracht Toolkit */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <FileText className="h-5 w-5 text-lime-600 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-lime-600 hover:bg-lime-50 transition-colors group"
                        >
                          <FileText className="h-5 w-5 text-lime-600 group-hover:text-lime-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-lime-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-lime-600 flex-shrink-0" />
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
