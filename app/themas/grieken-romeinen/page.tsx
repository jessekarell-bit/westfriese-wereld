'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PhaseIndicator from '@/components/PhaseIndicator'
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
  MessageCircle, 
  Shield, 
  BookOpen, 
  FileText, 
  Download,
  MapPin,
  Users,
  ExternalLink,
  Landmark,
  Hammer,
  Coins,
  Search,
  Gavel,
  Scale
} from 'lucide-react'

export default function GriekenRomeinenPage() {
  // State voor geselecteerde tab en route
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')
  const didacticRouteRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef<number>(0)

  // Routes per bouw
  const routes = {
    onderbouw: {
      titel: 'Schatgravers in de Zandbak',
      focus: 'Zintuiglijk ervaren, ontdekken van \'oud\' versus \'nieuw\' en de materiële cultuur',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontdekken dat er spullen in de grond zitten die van mensen van \'héél lang geleden\' zijn en maken kennis met het verschil tussen de lokale bewoners (Friezen) en de reizigers (Romeinen).',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Vondst van de Scherf": Het verhaal van Aak (een Fries kind in een boerderij) en Marcus (een Romeins kind met vreemde sandalen en glimmende munten). Ze vinden een mysterieuze kist of scherf in de zandbak.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'De Opgraving: De zandtafel wordt een archeologische vindplaats. Leerlingen worden \'hulp-archeologen\' en graven met kwastjes naar verstopte (plastic) munten en scherven.',
          icon: Search
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Maken en Spelen: Ambacht: Zelf een potje kleien (zoals Aak) of een munt stempelen in zoutdeeg (zoals Marcus). Spel: Een \'Romeinse markt\' in de huishoek waar geruild wordt (wol voor een potje).',
          icon: Hammer
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Mini-Museum: Een tentoonstelling in de klas waar de gevonden en gemaakte \'schatten\' worden getoond aan ouders. De kinderen vertellen wat oud is en wat nieuw.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'Ontmoeting aan de Grens',
      focus: 'Cultuurverschillen, ruilhandel en het dagelijks leven',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen dat de Romeinen nieuwe dingen brachten (schrift, wegen, geld) en leren over de verschillen in wonen en leven tussen de Friezen en Romeinen.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Ontmoeting bij de Grenspaal": Aak en Marcus ontmoeten elkaar bij de grens. Ze verbazen zich over elkaars gewoonten: Marcus draagt sandalen (koud!) en Aak woont in een huis van riet en poep (warm!). Het gaat over vriendschap ondanks verschillen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek aan Huis van Hilde: Een excursie naar het archeologiecentrum om te zien hoe de mensen hier echt uitzagen (gezichtsreconstructies) en hoe ze woonden.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoeken en Maken: Rekenen: Een klok maken met Romeinse cijfers (I t/m XII). Techniek: Het verschil testen tussen een Fries dak (riet) en een Romeins dak (dakpannen van klei) met een gieter. Taal: Latijnse woorden leren die wij nog gebruiken (muur, straat, fruit).',
          icon: Hammer
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Museum van de Tijd: De klas wordt een museum waar leerlingen als gidsen optreden, verkleed als Friezen of Romeinen, en uitleggen hoe men vroeger leefde en handelde.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'De Archeologische Puzzel',
      focus: 'Wetenschappelijk onderzoek, techniek en infrastructuur',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren hoe archeologen door middel van stratigrafie (aardlagen) en materiaalonderzoek het verleden reconstrueren. Ze begrijpen de superieure Romeinse techniek (wegen, bogen).',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Raadsel van de Grens" / "De Tijdcapsule": De klas vindt een kist met objecten die ze moeten dateren en determineren. Het verhaal volgt een Romeinse landmeter die de \'wilde\' Noord-Hollandse gebieden in kaart moet brengen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Gastles of Excursie: Een bezoek van een archeoloog (bijv. Archeologie West-Friesland) met een metaaldetector en echte vondsten, of een verdiepend bezoek aan Huis van Hilde gericht op techniek.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Ontwerpend Leren: Techniek: Een Romeinse boog (aquaduct) bouwen zonder lijm (krachtenverdeling met sluitsteen). Onderzoek: Een stratigrafie-proef doen in een doorzichtige bak (lagen afgraven en loggen). Kunst: Een mozaïek ontwerpen op basis van geometrische patronen.',
          icon: Hammer
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Pop-up Museum: Leerlingen presenteren hun technische maquettes (aquaducten/wegen) en onderzoeksverslagen over de vondsten aan een publiek.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Democratie, Dwang en de Friese Vrijheidsstrijd',
      focus: 'Politiek, staatsinrichting, conflict en multiperspectiviteit',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de machtsverhoudingen tussen een wereldrijk (Rome) en lokale autonomie (Vrije Friezen). Ze vergelijken de Atheense/Romeinse staatsvorm met onze moderne democratie en rechtsstaat.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Friese Opstand (28 n.Chr.)": Het dilemma van de jonge Fries Hylke. Zijn vader moet onmogelijke belastingen betalen (koeienhuiden) aan de Romeinse landvoogd Olennius. Kiest hij voor onderwerping of verzet?',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bronnenonderzoek en Debat: Analyse van teksten van de Romeinse geschiedschrijver Tacitus over de slag in het Baduhenna-woud. Is deze bron betrouwbaar? Analyse van digitale kaarten van het Oer-IJ en de strategische ligging van forten (bijv. Velsen).',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Simulatie en Retorica: Burgerschap: Het naspelen van de \'Senaat\' of \'Volksvergadering\'. Debatteren over stellingen als: "Veiligheid is belangrijker dan vrijheid". Techniek: Het bouwen van een werkend belegeringswapen (katapult/trebuchet) en berekenen van de baan. Taal: Het schrijven van een retorische toespraak (pleidooi) voor of tegen de opstand.',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Historisch Tribunaal: Een rechtszaak waarin Olennius (de Romeinse belastinginner) en de Friese leiders worden aangeklaagd. Leerlingen zijn rechters, advocaten en getuigen en vellen een vonnis op basis van argumenten.',
          icon: Scale
        }
      ]
    }
  }

  // Tabs data voor de drie bouwen
  const tabs = [
    {
      id: 'onderbouw',
      label: 'Onderbouw',
      subtitle: 'Groep 1-2',
      content: (
        <div className="space-y-6 min-h-[400px]">
          <div>
            <h3 className="font-serif text-2xl font-bold text-stone-700 mb-3">
              Schatgravers in de Zandbak
            </h3>
            <div className="bg-stone-50 rounded-lg p-4 mb-4 border-l-4 border-stone-600">
              <p className="text-sm font-semibold text-stone-900 mb-2">Focus:</p>
              <p className="text-gray-700">Zintuiglijk ervaren, ontdekken van 'oud' versus 'nieuw' en de materiële cultuur</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-stone-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Vondst van de Scherf": Het verhaal van Aak (een Fries kind in een boerderij) en Marcus (een Romeins kind met vreemde sandalen en glimmende munten). Ze vinden een mysterieuze kist of scherf in de zandbak.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Hammer className="h-5 w-5 mr-2 text-stone-600" />
              Kernactiviteit
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Een Romeinse weg aanleggen in de zandbak. Mozaïek leggen met bonen. Zelf een potje kleien (zoals Aak) of een munt stempelen in zoutdeeg (zoals Marcus).
            </p>
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
            <h3 className="font-serif text-2xl font-bold text-stone-700 mb-3">
              Ontmoeting aan de Grens
            </h3>
            <div className="bg-stone-50 rounded-lg p-4 mb-4 border-l-4 border-stone-600">
              <p className="text-sm font-semibold text-stone-900 mb-2">Focus:</p>
              <p className="text-gray-700">Cultuurverschillen, ruilhandel en het dagelijks leven</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-stone-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Ontmoeting bij de Grenspaal": Aak en Marcus ontmoeten elkaar bij de grens. Ze verbazen zich over elkaars gewoonten: Marcus draagt sandalen (koud!) en Aak woont in een huis van riet en poep (warm!). Het gaat over vriendschap ondanks verschillen.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Coins className="h-5 w-5 mr-2 text-stone-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>De Romeinse Markt:</strong> Rekenen met Romeinse cijfers (klok maken I t/m XII). Techniek: Het verschil testen tussen een Fries dak en een Romeins dak. Taal: Latijnse woorden leren die we nu nog gebruiken (muur, straat, fruit).</p>
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
            <h3 className="font-serif text-2xl font-bold text-stone-700 mb-3">
              De Archeologische Puzzel
            </h3>
            <div className="bg-stone-50 rounded-lg p-4 mb-4 border-l-4 border-stone-600">
              <p className="text-sm font-semibold text-stone-900 mb-2">Focus:</p>
              <p className="text-gray-700">Wetenschappelijk onderzoek, techniek en infrastructuur</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-stone-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Raadsel van de Grens" / "De Tijdcapsule": De klas vindt een kist met objecten die ze moeten dateren en determineren. Het verhaal volgt een Romeinse landmeter die de 'wilde' Noord-Hollandse gebieden in kaart moet brengen.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-stone-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Techniek:</strong> Een Romeinse boog (aquaduct) bouwen zonder lijm. <strong>Onderzoek:</strong> Een stratigrafie-proef doen. <strong>Kunst:</strong> Een mozaïek ontwerpen op basis van geometrische patronen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-stone-700 mb-3">
              Democratie, Dwang en de Friese Vrijheidsstrijd
            </h3>
            <div className="bg-stone-50 rounded-lg p-4 mb-4 border-l-4 border-stone-600">
              <p className="text-sm font-semibold text-stone-900 mb-2">Focus:</p>
              <p className="text-gray-700">Politiek, staatsinrichting, conflict en multiperspectiviteit</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-stone-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Friese Opstand (28 n.Chr.)": Het dilemma van de jonge Fries Hylke. Zijn vader moet onmogelijke belastingen betalen (koeienhuiden) aan de Romeinse landvoogd Olennius. Kiest hij voor onderwerping of verzet?
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Users className="h-5 w-5 mr-2 text-stone-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Het Historisch Tribunaal:</strong> Een rechtszaak naspelen waarin Olennius en de Friese leiders worden aangeklaagd. Leerlingen zijn rechters, advocaten en getuigen en vellen een vonnis op basis van argumenten.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  // Handler voor tab wijziging
  // Herstel scroll positie na content update
  useEffect(() => {
    if (scrollPositionRef.current > 0) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const didacticRouteElement = didacticRouteRef.current
          if (didacticRouteElement) {
            const currentTop = didacticRouteElement.getBoundingClientRect().top + window.scrollY
            const difference = currentTop - scrollPositionRef.current
            if (Math.abs(difference) > 5) {
              window.scrollTo({
                top: window.scrollY - difference,
                behavior: 'instant'
              })
            }
          }
        })
      })
    }
  }, [selectedBouw])

  const handleTabChange = (tabId: string) => {
    const didacticRouteElement = didacticRouteRef.current
    if (didacticRouteElement) {
      scrollPositionRef.current = didacticRouteElement.getBoundingClientRect().top + window.scrollY
    }
    
    setActiveTab(tabId)
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
  const themeConfig = getThemeConfig('grieken-romeinen')
  const colorScheme = themeConfig.colorScheme!

  // Rijke Teksten
  const boeken = {
    informatief: [
      'Archeologie voor kinderen',
      'Het Romeinse Rijk in Noord-Holland',
      'Friezen en Romeinen aan de grens'
    ],
    leesboeken: [
      'Asterix en Obelix (Goscinny & Uderzo)',
      'De laatste druppel (Peter Smit)',
      'De Romeinse jongen (Annejoke Smids)',
      'Archeologen op zoek (Agave Kruijssen)'
    ]
  }

  // Downloads
  const downloads = [
    { title: 'Woordenlijst_Latijn.pdf', type: 'PDF' },
    { title: 'Bouwtekening_Boog.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-stone-50 via-orange-50 to-stone-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          {/* Abstract classic/earth background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-stone-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-orange-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-stone-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van Grieken & Romeinen
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Grensland: Handel en cultuur aan de rand van het Rijk
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              West-Friesland lag net buiten het Romeinse Rijk. Waren wij 'barbaren'? Of slimme handelaren? In dit thema ontdekken leerlingen de invloed van de klassieke oudheid op onze taal, cultuur en het landschap.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Back button */}
          <Link 
            href="/themas"
            className="inline-flex items-center text-stone-700 hover:text-stone-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
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
                activeColor={getActiveColor('grieken-romeinen')}
                activeBorderColor={getActiveBorderColor('grieken-romeinen')}
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
                    <BookOpen className="h-5 w-5 text-stone-600 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-stone-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-stone-600 pl-3">
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
              <Card className="bg-gradient-to-br from-stone-50 to-orange-50 border-stone-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 text-stone-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-stone-700 mb-2">
                    Huis van Hilde
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Het archeologiecentrum waar je oog in oog staat met de oer-bewoners van Noord-Holland.
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
                    <FileText className="h-5 w-5 text-stone-600 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-stone-600 hover:bg-stone-50 transition-colors group"
                        >
                          <FileText className="h-5 w-5 text-stone-600 group-hover:text-stone-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-stone-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-stone-600 flex-shrink-0" />
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
