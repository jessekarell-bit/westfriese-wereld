'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PhaseIndicator from '@/components/PhaseIndicator'
import Tabs from '@/components/Tabs'
import MemberGate from '@/components/MemberGate'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  LayoutGrid, 
  Shield, 
  BookOpen, 
  FileText, 
  Download,
  MapPin,
  Users,
  ExternalLink,
  Lightbulb,
  Search,
  Gavel,
  Hammer,
  Home
} from 'lucide-react'

export default function LandEnPolderPage() {
  // State voor geselecteerde tab en route
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  // Routes per bouw
  const routes = {
    onderbouw: {
      titel: 'Jan de Tovenaar en de Rechte Lijnen',
      focus: 'Ordening, contrast (nat/droog, recht/krom) en de magie van land maken',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontdekken het verschil tussen \'natuur\' (krom, wild water) en \'cultuur\' (recht, polder, land). Ze leren dat mensen (zoals Leeghwater) het landschap hebben gemaakt om er te kunnen wonen en werken (ruimtelijke oriëntatie/meetkunde).',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Tovenaar met de Liniaal": Het verhaal van Jan (Adriaanszoon Leeghwater). Jan hield niet van natte voeten en wilde van het wilde water een mooie tuin maken. Hij gebruikte geen toverstaf, maar een hele grote liniaal en molens om het water weg te toveren.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'De Polder-Expeditie: Een wandeling in de buurt met \'toverbrillen\' (kokers). De kinderen zoeken naar rechte lijnen (sloten, wegen) en kromme lijnen (bomen, wolken). Ze kijken naar het waterpeil: "Is de sloot lager dan de weg?".',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Maken en Spelen: Zandtafel: De \'Grote Droogmaak-Actie\'. Een bak met water en zand. Kinderen moeten dijken bouwen en het water eruit scheppen naar de \'ringvaart\' (de rand) om droog land te maken. Kunst/Rekenen: De "Polderdeken". Een klassikaal kunstwerk van vierkante vellen papier (kavels) die samen een strak patroon vormen, net als de Beemster vanuit de lucht.',
          icon: Hammer
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Polderopening: Ouders komen kijken in het \'nieuwe land\' in de klas. De kinderen, verkleed als bouwers of Jan Leeghwater, leggen uit hoe ze de huizen (blokken) droog hebben gehouden.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'De Junior Landmeter',
      focus: 'Meetkunde, het raster en de stolpboerderij',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren dat de polder (specifiek de Beemster) is ontworpen als een perfect vierkant raster. Ze oefenen met meten, schaal en geometrische vormen en herkennen de stolpboerderij als typisch West-Fries gebouw.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Vierkante Wereld": De leerlingen worden benoemd tot "Junior Landmeters". Ze krijgen de opdracht van Leeghwater om de \'warboel\' van het oude land (West-Friesland binnen de dijk) te vergelijken met de \'nieuwe orde\' van de droogmakerij. Alles moet eerlijk verdeeld worden in rechte stukken.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Expeditie Beemster: Een bezoek aan Droogmakerij de Beemster (UNESCO Werelderfgoed) of een polder in de buurt. Ze meten met een landmetersketting (touw met knopen) hoe groot een stukje land is en bekijken een stolpboerderij.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Ontwerpen en Programmeren: Wiskunde/Kunst: Het ontwerpen van de "Ideale Polder" op ruitjespapier. Elk vakje is een stuk land. Waar komt de weg? Waar de sloot? Alles moet recht zijn. Digitaal: BeeBot in de Beemster. De robot programmeren op een mat met een rasterkaart. De BeeBot mag niet in de sloot (blauwe vakjes) rijden, maar moet de weg volgen.',
          icon: Lightbulb
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Polder-Symposium: De leerlingen presenteren hun ontworpen polderkaarten en maquettes van stolpboerderijen aan een \'hoofdingenieur\' (directeur of ouder). Ze leggen uit waarom hun polder handig is ingedeeld.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'Investeerders en Ingenieurs',
      focus: 'Economie, techniek (stoom vs. wind) en watermanagement',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen dat de droogmakerijen in de Gouden Eeuw economische projecten waren (investeren voor winst). Ze leren de technische transitie van windmolens naar stoomgemalen en de natuurkunde achter waterverplaatsing.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Investeerders van de Gouden Eeuw": Het is 1612. De leerlingen zijn rijke kooplieden uit Amsterdam. Durven zij hun geld te steken in het droogmalen van het grote meer? Het is riskant, maar de grond is vruchtbaar. Het verhaal verschuift later naar de 19e eeuw: de strijd om de polder droog te houden met nieuwe stoommachines.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek aan het Stoommachinemuseum: Excursie naar Medemblik (Gemaal Vier Noorder Koggen). Leerlingen ervaren de kracht van stoom, halen hun \'stookdiploma\' en zien het verschil in capaciteit tussen een molen en een gemaal.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Constructie: Techniek: Het bouwen van een werkende Archimedes-schroef (vijzel). Hoe krijg je water omhoog? Rekenen: Oppervlakte en inhoud berekenen. Hoeveel kuub water moet eruit? Hoeveel hectare land winnen we? Economie: Een aandelenspel. Wat gebeurt er met je investering als de dijk doorbreekt?',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Maquette: De klas bouwt een werkend watermodel van een polder (laag) en ringvaart (hoog). Ze demonstreren met hun zelfgebouwde vijzels of pompen hoe ze het land drooghouden.',
          icon: Hammer
        }
      ]
    },
    bovenbouw: {
      titel: 'De Strijd om de Ruimte',
      focus: 'Planologie, conflicterende belangen (datacenters vs. landbouw) en toekomstvisie',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de polder als een \'maakbaar\' maar \'schaars\' gebied. Ze onderzoeken moderne conflicten in de ruimtelijke ordening (bijv. Agriport A7 vs. UNESCO erfgoed) en ontwikkelen een visie voor de toekomst (klimaatadaptatie).',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"West-Friesland 2050: Grijs, Groen of Goud?": De leerlingen vormen het \'Planbureau voor de Leefomgeving\'. Er is een conflict in de Wieringermeer: Tech-reuzen willen datacenters, boeren willen landbouwgrond, en natuurorganisaties willen waterberging. Wie krijgt de ruimte?',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Contrast-Excursie: Een veldbezoek aan de klassieke Beemster (harmonie, erfgoed) gevolgd door een tocht langs Agriport A7 (grootschaligheid, kassen, datacenters). Ze analyseren het verschil in landschap en functie.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Analyse en Debat: Onderzoek: Gebruik van EduGIS (digitale kaarten) om lagen over elkaar te leggen (bodem, water, bebouwing). Waar is nog ruimte? Burgerschap: Het simuleren van een Inspraakavond. Leerlingen nemen rollen aan (boze buurman, wethouder, actievoerder) en debatteren over een nieuw bestemmingsplan. Techniek: Onderzoek naar energietransitie en restwarmte (thermodynamica).',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Omgevingsvisie 2050: De leerlingen presenteren hun definitieve plan voor de inrichting van de polder aan een jury (bijv. een lokaal raadslid). Ze moeten hun keuzes verantwoorden: waarom hebben ze gekozen voor woningbouw, natuur of industrie?',
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
            <h3 className="font-serif text-2xl font-bold text-green-700 mb-3">
              Jan de Tovenaar en de Rechte Lijnen
            </h3>
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-600">
              <p className="text-sm font-semibold text-green-900 mb-2">Focus:</p>
              <p className="text-gray-700">Ordening, contrast (nat/droog, recht/krom) en de magie van land maken</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Tovenaar met de Liniaal": Het verhaal van Jan (Adriaanszoon Leeghwater). Jan hield niet van natte voeten en wilde van het wilde water een mooie tuin maken. Hij gebruikte geen toverstaf, maar een hele grote liniaal en molens om het water weg te toveren.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <LayoutGrid className="h-5 w-5 mr-2 text-green-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>De Polder-Expeditie:</strong> Een wandeling in de buurt met 'toverbrillen' (kokers). Zoeken naar rechte en kromme lijnen.</p>
              <p><strong>Zandtafel:</strong> De 'Grote Droogmaak-Actie'. Dijken bouwen en water eruit scheppen. De "Polderdeken": Een klassikaal kunstwerk van vierkante vellen papier.</p>
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
            <h3 className="font-serif text-2xl font-bold text-green-700 mb-3">
              De Junior Landmeter
            </h3>
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-600">
              <p className="text-sm font-semibold text-green-900 mb-2">Focus:</p>
              <p className="text-gray-700">Meetkunde, het raster en de stolpboerderij</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Vierkante Wereld": De leerlingen worden benoemd tot "Junior Landmeters". Ze krijgen de opdracht van Leeghwater om de 'warboel' van het oude land (West-Friesland binnen de dijk) te vergelijken met de 'nieuwe orde' van de droogmakerij. Alles moet eerlijk verdeeld worden in rechte stukken.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-green-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Expeditie Beemster:</strong> Bezoek aan Droogmakerij de Beemster (UNESCO Werelderfgoed). Meten met een landmetersketting en bekijken van een stolpboerderij.</p>
              <p><strong>Ontwerpen:</strong> Het ontwerpen van de "Ideale Polder" op ruitjespapier. BeeBot programmeren op een rasterkaart.</p>
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
            <h3 className="font-serif text-2xl font-bold text-green-700 mb-3">
              Investeerders en Ingenieurs
            </h3>
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-600">
              <p className="text-sm font-semibold text-green-900 mb-2">Focus:</p>
              <p className="text-gray-700">Economie, techniek (stoom vs. wind) en watermanagement</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Investeerders van de Gouden Eeuw": Het is 1612. De leerlingen zijn rijke kooplieden uit Amsterdam. Durven zij hun geld te steken in het droogmalen van het grote meer? Het is riskant, maar de grond is vruchtbaar. Het verhaal verschuift later naar de 19e eeuw: de strijd om de polder droog te houden met nieuwe stoommachines.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-green-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Stoommachinemuseum:</strong> Excursie naar Medemblik (Gemaal Vier Noorder Koggen). Ervaren de kracht van stoom en zien het verschil tussen molen en gemaal.</p>
              <p><strong>Onderzoek:</strong> Het bouwen van een werkende Archimedes-schroef. Oppervlakte en inhoud berekenen. Een aandelenspel.</p>
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
            <h3 className="font-serif text-2xl font-bold text-green-700 mb-3">
              De Strijd om de Ruimte
            </h3>
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-600">
              <p className="text-sm font-semibold text-green-900 mb-2">Focus:</p>
              <p className="text-gray-700">Planologie, conflicterende belangen (datacenters vs. landbouw) en toekomstvisie</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "West-Friesland 2050: Grijs, Groen of Goud?": De leerlingen vormen het 'Planbureau voor de Leefomgeving'. Er is een conflict in de Wieringermeer: Tech-reuzen willen datacenters, boeren willen landbouwgrond, en natuurorganisaties willen waterberging. Wie krijgt de ruimte?
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-green-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Contrast-Excursie:</strong> Veldbezoek aan de klassieke Beemster gevolgd door een tocht langs Agriport A7. Analyseren van het verschil in landschap en functie.</p>
              <p><strong>Analyse en Debat:</strong> Gebruik van EduGIS om lagen over elkaar te leggen. Het simuleren van een Inspraakavond met verschillende rollen. Onderzoek naar energietransitie en restwarmte.</p>
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
  type TabType = { id: string; label: string; subtitle?: string; content: React.ReactElement }
  const CustomTabs = ({ tabs, defaultTab }: { tabs: TabType[], defaultTab?: string }) => {
    const activeTabContent = tabs.find((tab: TabType) => tab.id === activeTab)?.content

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
                      ? 'bg-deep-water-blue text-white border-b-2 border-deep-water-blue'
                      : 'text-gray-700 hover:text-deep-water-blue hover:bg-gray-50'
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
      'De Beemster: Werelderfgoed',
      'Leeghwater en de droogmakerijen',
      'Ruimtelijke ordening in Nederland'
    ],
    leesboeken: [
      'De molen van Jan (Annie M.G. Schmidt)',
      'Het geheim van de polder (Ton van Reen)',
      'De waterwolf (Jan Terlouw)'
    ]
  }

  // Downloads
  const downloads = [
    { title: 'Lesbrief_Leeghwater.pdf', type: 'PDF' },
    { title: 'Rasterpapier_Beemster.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 w-full px-6 py-12 md:p-20 overflow-hidden">
          {/* Abstract polder/land background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-green-400/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-emerald-400/10 blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-3 sm:mb-4 leading-tight">
              De Wereld van de Polder
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-800 mb-4 sm:mb-6 font-medium">
              Kaarsrechte lijnen in een oud landschap: De Hollandse maakbaarheid
            </p>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              God schiep de wereld, maar de Nederlanders maakten Holland. Nergens zie je dat beter dan hier. Van de grillige sloten in oud West-Friesland tot de strakke liniaal-lijnen van de Wieringermeer en de Beemster. Een thema over wiskunde, gemalen en ruimte.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Back button */}
          <Link 
            href="/themas"
            className="inline-flex items-center text-green-700 hover:text-green-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
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
              <div className="mt-8 sm:mt-12">
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-green-700 mb-2">
                    De didactische route
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-green-800 mb-1">
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
                        className="border-l-4 border-l-green-600"
                      >
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                          <div className="flex items-start gap-3 sm:gap-4">
                            {/* Phase number badge */}
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-base sm:text-lg font-bold shadow-lg">
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <h4 className="font-semibold text-green-700 text-base sm:text-lg">
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
                    <BookOpen className="h-5 w-5 text-green-600 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-green-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-green-600 pl-3">
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
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 text-green-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-green-700 mb-2">
                    Museummolen Schermerhorn
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Ontdek hoe de polder 400 jaar geleden werd drooggegemalen door vernuftige techniek.
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
                    <FileText className="h-5 w-5 text-green-600 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-green-600 hover:bg-green-50 transition-colors group"
                        >
                          <FileText className="h-5 w-5 text-green-600 group-hover:text-green-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-green-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-green-600 flex-shrink-0" />
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
