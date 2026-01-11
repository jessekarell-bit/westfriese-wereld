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
  Castle, 
  Shield, 
  BookOpen, 
  FileText, 
  Download,
  MapPin,
  Users,
  ExternalLink,
  Search,
  Gavel,
  Sword
} from 'lucide-react'

export default function KasteelRadboudPage() {
  // State voor geselecteerde tab en route
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  // Routes per bouw
  const routes = {
    onderbouw: {
      titel: 'Mythe, Bescherming & Fantasie',
      focus: 'De wereld van Gerrie de Leeuwdraak',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontwikkelen een eerste tijdsbesef (\'riddertijd\' vs. \'nu\') en verkennen begrippen rondom wonen en verdedigen (muur, toren, veiligheid). Ze leren dat een kasteel een "groot, sterk huis" is om de baas te zijn.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Gerrie de Leeuwdraak is zijn spullen kwijt." Gerrie, de mascotte van het kasteel, is vergeetachtig. Hij is zijn helm, zwaard en beker verloren. De leerlingen moeten hem helpen zoeken in het grote kasteel van de strenge graaf Floris.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Een bezoek aan Kasteel Radboud met het programma "Verwonder en Beleef". De kinderen gaan fysiek op speurtocht door de ruimtes (ridderzaal, gevangenis) om de spullen van Gerrie te vinden en voelen aan de dikke muren.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Bouwhoek: Experimenteren met stabiliteit. Hoe bouw je een toren die niet omvalt? Gebruik van blokken om muren en kantelen te maken. Kruiden: Zintuiglijke activiteit met \'Kruidje en Billie Bij\'. Ruiken en voelen aan middeleeuwse kruiden zoals munt en lavendel.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Kasteelfeest. De klas wordt een ridderzaal. Ouders komen kijken naar de tentoonstelling van zelfgemaakte wapenschilden en de kinderen voeren een middeleeuwse kringdans op.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'Taken, Rollen & Zorg',
      focus: 'Het dagelijks leven: dienen, schrijven en genezen',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen dat een samenleving drijft op taakverdeling. Ze leren over middeleeuwse beroepen (page, monnik, kruidenvrouw) en de geneeskrachtige werking van de natuur (biologie).',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Page en de Kruidenvrouw." Het verhaal van Boudewijn (een 7-jarige page in opleiding) en Lobbrecht Aerntsdochter (de historische kruidenvrouw/mater). Boudewijn heeft zich bezeerd en heeft de hulp van Lobbrecht nodig. Samen lossen ze het "Geheim van de Kasteeltuin" op.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Excursie naar Kasteel Radboud met het programma "Kruip in de Huid". Leerlingen voeren fysieke taken uit die horen bij de bewoners (tafel dekken, wachtlopen) en bezoeken de kruidentuin om planten te determineren.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Het Scriptorium: Schrijven met een ganzenveer en het maken van een \'initiaal\' (versierde letter), om het monnikenwerk te ervaren. Het Kruidenlab: Zelf \'medicijnen\' (thee of zalf) maken van goudsbloem en kamille. Leren welke plant waarvoor dient (bijv. kamille voor rust).',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Gildedag. De klas wordt een middeleeuwse markt. Leerlingen presenteren in gilden hun ambachten (het Bouwersgilde toont maquettes, het Heelmeestersgilde de thee) aan ouders en andere klassen.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'Strategie, Constructie & Conflict',
      focus: 'De dwangburcht: architectuur als wapen',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de strategische functie van kastelen (dwangburchten) en begrijpen de natuurkundige principes achter middeleeuwse bouwtechniek (waarom zijn ronde torens sterker?). Ze leren historisch redeneren vanuit multiperspectiviteit (Floris V: held of bezetter?).',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Dilemma van de West-Fries." We volgen Aelbrecht, een West-Friese boerenzoon in 1288. Zijn vader haat de Hollandse graaf die hun vrijheid afnam, maar Aelbrecht is gefascineerd door de ingenieuze bouw van de dwangburcht. Hij twijfelt tussen loyaliteit aan zijn stam en bewondering voor de vooruitgang.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek aan Kasteel Radboud met het programma "Ontdek en Speur". Focus op de militaire architectuur: schootsvelden, mezekouwen en de locatie aan de Zuiderzee. Tevens een bezoek aan Huis van Hilde om wapens en skeletten uit de strijd te zien.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'De Onneembare Vesting: Techniekproef. Leerlingen bouwen vierkante en ronde torens en beschieten deze met knikkers om te ontdekken dat ronde torens projectielen beter afketsen en geen dode hoeken hebben. Cold Case: Een bronnenonderzoek naar de moord op Floris V. Wie waren de daders? Wat was hun motief?',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Historisch Tribunaal (Deel 1). Een rechtszaak waarin geoordeeld wordt over de schuldvraag: Was de West-Friese opstand terrorisme of vrijheidsstrijd? Leerlingen presenteren hun \'dossiers\' en maquettes als bewijsmateriaal.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Rechtsstaat, Ethiek & Democratie',
      focus: 'Van vuistrecht naar rechtsstaat',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen vergelijken het middeleeuwse rechtssysteem (privileges, marteling, klassenjustitie) met de moderne democratische rechtsstaat. Ze ontwikkelen inzicht in staatsinrichting en ethische dilemma\'s rondom geweld en macht.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Complot: Wie heeft het recht om te straffen?" De klas fungeert als een onderzoekscommissie die de legitimiteit van de macht van Floris V en de edelen onderzoekt. Centraal staat de vraag of tirannenmoord gerechtvaardigd is.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Verdiepend bezoek aan Kasteel Radboud met focus op de gevangenis en de \'Vierschaar\' (rechtspraak). Gastles van een jurist of bezoek van ProDemos over de moderne rechtsstaat.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Ballistiek: Het ontwerpen en bouwen van een werkende blijde (trebuchet). Natuurkundige berekeningen van hefboomwerking en banen van projectielen. Retorica: Het schrijven van een juridisch pleidooi. Leerlingen oefenen met argumenteren vanuit een rol (aanklager of verdediger van de graaf).',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Grote Tribunaal (Deel 2). Een formele zitting waarbij ouders of experts de jury vormen. Er wordt vonnis gewezen over Floris V en zijn moordenaars op basis van argumenten over staatsbelang versus mensenrechten. Dit is de ultieme proeve van burgerschap.',
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
            <h3 className="font-serif text-2xl font-bold text-rose-800 mb-3">
              Mythe, Bescherming & Fantasie
            </h3>
            <div className="bg-rose-50 rounded-lg p-4 mb-4 border-l-4 border-rose-600">
              <p className="text-sm font-semibold text-rose-900 mb-2">Focus:</p>
              <p className="text-gray-700">De wereld van Gerrie de Leeuwdraak</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-rose-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Gerrie de Leeuwdraak is zijn spullen kwijt." Gerrie, de mascotte van het kasteel, is vergeetachtig. Hij is zijn helm, zwaard en beker verloren. De leerlingen moeten hem helpen zoeken in het grote kasteel van de strenge graaf Floris.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Castle className="h-5 w-5 mr-2 text-rose-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bouwhoek:</strong> Experimenteren met stabiliteit. Hoe bouw je een toren die niet omvalt? Gebruik van blokken om muren en kantelen te maken.</p>
              <p><strong>Kruiden:</strong> Zintuiglijke activiteit met 'Kruidje en Billie Bij'. Ruiken en voelen aan middeleeuwse kruiden zoals munt en lavendel.</p>
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
            <h3 className="font-serif text-2xl font-bold text-rose-800 mb-3">
              Taken, Rollen & Zorg
            </h3>
            <div className="bg-rose-50 rounded-lg p-4 mb-4 border-l-4 border-rose-600">
              <p className="text-sm font-semibold text-rose-900 mb-2">Focus:</p>
              <p className="text-gray-700">Het dagelijks leven: dienen, schrijven en genezen</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-rose-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Page en de Kruidenvrouw." Het verhaal van Boudewijn (een 7-jarige page in opleiding) en Lobbrecht Aerntsdochter (de historische kruidenvrouw/mater). Boudewijn heeft zich bezeerd en heeft de hulp van Lobbrecht nodig. Samen lossen ze het "Geheim van de Kasteeltuin" op.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Sword className="h-5 w-5 mr-2 text-rose-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Het Scriptorium:</strong> Schrijven met een ganzenveer en het maken van een 'initiaal' (versierde letter), om het monnikenwerk te ervaren.</p>
              <p><strong>Het Kruidenlab:</strong> Zelf 'medicijnen' (thee of zalf) maken van goudsbloem en kamille. Leren welke plant waarvoor dient (bijv. kamille voor rust).</p>
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
            <h3 className="font-serif text-2xl font-bold text-rose-800 mb-3">
              Strategie, Constructie & Conflict
            </h3>
            <div className="bg-rose-50 rounded-lg p-4 mb-4 border-l-4 border-rose-600">
              <p className="text-sm font-semibold text-rose-900 mb-2">Focus:</p>
              <p className="text-gray-700">De dwangburcht: architectuur als wapen</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-rose-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Dilemma van de West-Fries." We volgen Aelbrecht, een West-Friese boerenzoon in 1288. Zijn vader haat de Hollandse graaf die hun vrijheid afnam, maar Aelbrecht is gefascineerd door de ingenieuze bouw van de dwangburcht. Hij twijfelt tussen loyaliteit aan zijn stam en bewondering voor de vooruitgang.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-rose-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>De Onneembare Vesting:</strong> Techniekproef. Leerlingen bouwen vierkante en ronde torens en beschieten deze met knikkers om te ontdekken dat ronde torens projectielen beter afketsen en geen dode hoeken hebben.</p>
              <p><strong>Cold Case:</strong> Een bronnenonderzoek naar de moord op Floris V. Wie waren de daders? Wat was hun motief?</p>
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
            <h3 className="font-serif text-2xl font-bold text-rose-800 mb-3">
              Rechtsstaat, Ethiek & Democratie
            </h3>
            <div className="bg-rose-50 rounded-lg p-4 mb-4 border-l-4 border-rose-600">
              <p className="text-sm font-semibold text-rose-900 mb-2">Focus:</p>
              <p className="text-gray-700">Van vuistrecht naar rechtsstaat</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-rose-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Complot: Wie heeft het recht om te straffen?" De klas fungeert als een onderzoekscommissie die de legitimiteit van de macht van Floris V en de edelen onderzoekt. Centraal staat de vraag of tirannenmoord gerechtvaardigd is.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-rose-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Ballistiek:</strong> Het ontwerpen en bouwen van een werkende blijde (trebuchet). Natuurkundige berekeningen van hefboomwerking en banen van projectielen.</p>
              <p><strong>Retorica:</strong> Het schrijven van een juridisch pleidooi. Leerlingen oefenen met argumenteren vanuit een rol (aanklager of verdediger van de graaf).</p>
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
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-1" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  px-6 py-3 text-sm font-medium rounded-t-lg transition-colors flex flex-col items-center
                  ${
                    activeTab === tab.id
                      ? 'bg-rose-800 text-white border-b-2 border-rose-800'
                      : 'text-gray-700 hover:text-rose-800 hover:bg-gray-50'
                  }
                `}
              >
                <span>{tab.label}</span>
                {tab.subtitle && (
                  <span className={`text-xs mt-0.5 ${
                    activeTab === tab.id ? 'text-white/90' : 'text-gray-500'
                  }`}>
                    {tab.subtitle}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
        <div className="min-h-[400px]">
          {activeTabContent}
        </div>
      </div>
    )
  }

  // Rijke Teksten
  const boeken = {
    informatief: [
      'Kastelen in Nederland',
      'Floris V: De graaf die werd vermoord',
      'Het leven in de Middeleeuwen'
    ],
    leesboeken: [
      'Ridder Roeland (Paul Biegel)',
      'Kruistocht in spijkerbroek (Thea Beckman)',
      'De brief voor de koning (Tonke Dragt)'
    ]
  }

  // Downloads
  const downloads = [
    { title: 'Bouwplaat_Kasteel.pdf', type: 'PDF' },
    { title: 'Verhaal_Floris_V.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-50 via-red-50 to-rose-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Abstract pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-rose-400/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-red-400/10 blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-rose-800 mb-4 leading-tight">
              De Wereld van Kasteel Radboud
            </h1>
            <p className="text-xl md:text-2xl text-rose-900 mb-6 font-medium">
              Ridders, macht en dwangburchten: Wie is hier eigenlijk de baas?
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Kasteel Radboud in Medemblik is het enige overgebleven kasteel van Floris V in West-Friesland. Het staat er niet om ons te beschermen, maar om ons te bewaken. Een thema over de Middeleeuwen, ruzie met de graaf en leven binnen dikke muren.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back button */}
          <Link 
            href="/themas"
            className="inline-flex items-center text-rose-800 hover:text-rose-900 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar thema overzicht
          </Link>

          {/* Main Content with Sidebar - 70/30 split */}
          <div className="grid lg:grid-cols-10 gap-8">
            {/* Main Content - 70% */}
            <div className="lg:col-span-7">
              {/* Tabs System */}
              <CustomTabs tabs={tabs} defaultTab="onderbouw" />

              {/* 5-Fasen Verticale Lijst */}
              <div className="mt-12">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-rose-800 mb-2">
                    De didactische route
                  </h3>
                  <p className="text-lg font-medium text-rose-900 mb-1">
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
                        className="border-l-4 border-l-rose-600"
                      >
                        <CardContent className="p-6 sm:p-8">
                          <div className="flex items-start gap-4">
                            {/* Phase number badge */}
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                                  <Icon className="h-5 w-5" />
                                </div>
                                <h4 className="font-semibold text-rose-800 text-lg">
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
                    <BookOpen className="h-5 w-5 text-rose-600 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-rose-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-rose-600 pl-3">
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
              <Card className="bg-gradient-to-br from-rose-50 to-red-50 border-rose-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 text-rose-800 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-rose-800 mb-2">
                    Kasteel Radboud
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Stap terug in de tijd in het enige dwangkasteel dat West-Friesland nog rijk is.
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
                    <FileText className="h-5 w-5 text-rose-600 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-rose-600 hover:bg-rose-50 transition-colors group"
                        >
                          <FileText className="h-5 w-5 text-rose-600 group-hover:text-rose-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-rose-800 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-rose-600 flex-shrink-0" />
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
