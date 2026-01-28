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
import { getThemeConfig } from '@/src/data/theme-config'
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
  Microscope
} from 'lucide-react'

export default function WaterWorldPage() {
  // State voor geselecteerde tab en route
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')
  const didacticRouteRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef<number>(0)

  // Routes per bouw
  const routes = {
    onderbouw: {
      titel: 'De Waterwolf en de Reus',
      focus: 'Mythische verbeelding van waterveiligheid: de dijk als beschermer tegen het water',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ervaren op een speelse en veilige manier dat de dijk hen beschermt tegen het water. Ze ontdekken het verschil tussen zand en klei en zien dat sommige materialen beter werken om water tegen te houden dan andere.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Waterwolf" (of: De Reus die het water tegenhoudt): Het abstracte concept van waterveiligheid wordt vertaald naar een mythisch verhaal. De zee wordt gepersonifieerd als de \'Waterwolf\', een hongerig beest dat happen uit het land wil nemen (\"het land opeten\"). De dijk is de grote, sterke beschermer (de Reus of de Muur) die ervoor zorgt dat de wolf niet binnen kan komen en dat de voeten droog blijven.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Introductiespel met handpoppen of verkleedkleren: één leerling speelt de Waterwolf, een ander de Reus/Dijk. De rest van de klas speelt bewoners achter de dijk. Zo wordt het verhaal fysiek en herkenbaar.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Sensopathisch spel in de zand- en watertafel: kinderen bouwen dijken van zand en van klei. Ze ontdekken dat een dijk van zand direct wegspoelt als het water komt, terwijl klei \'plakt\' en het water veel beter tegenhoudt. In de bouwhoek bootsen ze het landschap na met blokken en blauwe doeken (water) en bouwen ze een veilige plek achter de dijk.',
          icon: Sprout
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Kringmoment: samen het verhaal van de Waterwolf naspelen en benoemen wat de dijk doet. De kinderen laten hun dijken in de zand- en watertafel zien en vertellen welk materiaal het beste werkte.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'Speuren naar Sporen',
      focus: 'De dijkdoorbraak van 1675 en het verschil tussen zand en klei',
      fasen: [
        {
          fase: 'Doelbepaling',
          beschrijving: 'De leerlingen ontdekken het verschil tussen zand en klei en begrijpen waarom de dijk bij Scharwoude in 1675 doorbrak. Ze leren dat wielen (diepe gaten) littekens zijn van dijkdoorbraken die we nog steeds in het landschap zien.',
          icon: Shield
        },
        {
          fase: 'Narratieve Inbedding',
          beschrijving: '"De Tijdmachine naar 1675": De klas stapt in een tijdmachine en reist terug naar de stormnacht van 5 november 1675 bij Scharwoude. De leerlingen horen de noodklokken luiden. De "Waterwolf" is boos en beukt tegen de dijk. Waarom breekt de dijk juist hier? Was hij niet sterk genoeg? De leerlingen ontdekken dat de dijk op sommige plekken te zwak was en dat het water diepe gaten (wielen) heeft geslagen die we nu nog steeds in het landschap zien als littekens.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Excursie naar de dijk: Een bezoek aan een echte dijk in de omgeving om te kijken naar de structuur en materialen. Of een bezoek aan een wiel (overblijfsel van een dijkdoorbraak) om te zien hoe diep het water heeft geslagen.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: '"Het Grote Lek": In de zandtafel of waterbak bouwen de leerlingen het landschap van 1675 na. Ze maken een dijk van alleen zand en een dijk van klei. Ze simuleren de storm (golven maken). De ontdekking: De zanddijk spoelt direct weg (het \'wiel\' ontstaat), terwijl de kleidijk het water veel beter tegenhoudt omdat klei \'plakt\'. Ze markeren op hun eigen kaart waar het misging.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Sporenkaart: Leerlingen presenteren hun zelfgemaakte kaart met de zwakke plekken in de dijk en leggen uit waarom de dijk op die plek doorbrak. Ze tonen hun experimenten met zand en klei aan ouders of een andere klas.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'Ingenieurs van de Klei',
      focus: 'De Paalwormcrisis van 1730 en technische innovatie',
      fasen: [
        {
          fase: 'Doelbepaling',
          beschrijving: 'De leerlingen analyseren de Paalwormcrisis van 1730 en begrijpen waarom houten palen niet meer werkten. Ze leren over technische innovatie: de overstap van hout naar steen en aarde. Ze onderzoeken materiaaleigenschappen (doorlaatbaarheid en erosiebestendigheid) en het belang van een flauw talud (schuine helling) om golven te breken.',
          icon: Shield
        },
        {
          fase: 'Narratieve Inbedding',
          beschrijving: '"De Stille Vijand": Het is 1730. De dijken lijken sterk, want ze worden beschermd door dikke houten palen. Maar er is paniek bij de dijkgraaf! Een onzichtbare vijand, de paalworm (Teredo navalis), eet het hout van binnenuit op. De palen breken als luciferhoutjes. De leerlingen worden benoemd tot "Ingenieurs van de Klei". Zij moeten een nieuwe manier bedenken om het land te beschermen, nu het hout niet meer werkt. Ze moeten de overstap maken van hout naar steen en aarde.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Excursie naar de dijk: Een bezoek aan een echte dijk om de constructie te bekijken (talud, materialen). Of een gastles van een dijkwerker/waterbouwkundige die uitlegt hoe moderne dijken worden gebouwd.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: '"Het Dijk-Laboratorium": Leerlingen voeren materiaalproeven uit om de perfecte \'nieuwe dijk\' te ontwerpen die de paalworm niet lust. Het Experiment: Ze testen in bakken de doorlaatbaarheid en erosiebestendigheid van drie materialen: zand, klei en steen/grind. Ze bouwen een dwarsdoorsnede van een dijk met een flauw talud (schuine helling) om de golven te breken, in plaats van een rechte muur.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Presentatie aan de Dijkgraaf: Leerlingen presenteren hun technische oplossing aan de \'Dijkgraaf\' (bijv. een gastspreker of leerkracht in rol). Ze tonen hun dijkmodellen en leggen uit waarom hun ontwerp beter is dan de oude houten palen.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Vechten of Meebewegen?',
      focus: 'Klimaatscenario’s 2050: dijkverhoging, ruimte voor water en morele keuzes',
      fasen: [
        {
          fase: 'Doelbepaling',
          beschrijving: 'De leerlingen onderzoeken of de huidige dijk in 2050 nog veilig genoeg is bij stijgende zeespiegel en piekbuien. Ze leren dat keuzes over dijkverhoging of ruimte maken voor water altijd gevolgen hebben voor bewoners, natuur en economie.',
          icon: Shield
        },
        {
          fase: 'Narratieve Inbedding',
          beschrijving: '"Vechten of Meebewegen?": De klas functioneert als een Raad van Advies voor het waterschap of het Toekomstteam West-Friesland. Ze worden geconfronteerd met klimaatscenario’s voor het jaar 2050 (stijgende zeespiegel, piekbuien). De centrale vraag is: Is de huidige dijk hoog genoeg, of moeten we ruimte maken voor water door bijvoorbeeld polders onder water te laten lopen?',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Kennismaking met echte dijk- en klimaatscenario’s via kaarten, video’s en een gastles of korte reportage over het werk van het waterschap en de gevolgen van extreem weer in West-Friesland.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: '"De Calamiteitenpolder": Simulatie en debat over een noodsituatie. Stel: de stad Hoorn dreigt te overstromen en de enige redding is het doorsteken van een dijk naar een dunbevolkte polder (een calamiteitenpolder). Mag je de boerderijen daar opofferen om de stad te redden (solidariteit versus eigendom)? Onderzoek met GIS-data (bijvoorbeeld EduGIS) naar overstromingsrisico’s in de eigen regio.',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Eindproduct: een formeel Adviesrapport "Visie 2050" aan het Hoogheemraadschap of de gemeente, waarin leerlingen hun voorstel onderbouwen en aangeven wanneer je moet vechten tegen het water en wanneer je beter met het water kunt meebewegen.',
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
              De Waterwolf en de Reus
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Mythische verbeelding van waterveiligheid: de dijk als beschermer tegen het water</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Waterwolf" (of: De Reus die het water tegenhoudt): De zee wordt een hongerige Waterwolf die happen uit het land wil nemen. De dijk is de sterke Reus of Muur die de wolf tegenhoudt en de voeten van de kinderen droog houdt. Zo wordt waterveiligheid een spannend maar veilig verhaal.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Sensopathisch spel in de zand- en watertafel:</strong> Kinderen bouwen dijken van zand en van klei. Ze zien dat een zanddijk snel wegspoelt als het water komt, terwijl klei \'plakt\' en het water beter tegenhoudt.</p>
              <p><strong>Constructie in de bouwhoek:</strong> Met blokken en blauwe doeken (water) bouwen ze een landschap met een dijk en een veilige plek achter de dijk.</p>
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
              Speuren naar Sporen
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">De dijkdoorbraak van 1675 en het verschil tussen zand en klei</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Tijdmachine naar 1675": De klas stapt in een tijdmachine en reist terug naar de stormnacht van 5 november 1675 bij Scharwoude. De leerlingen horen de noodklokken luiden. De "Waterwolf" is boos en beukt tegen de dijk. Waarom breekt de dijk juist hier? Was hij niet sterk genoeg? De leerlingen ontdekken dat de dijk op sommige plekken te zwak was en dat het water diepe gaten (wielen) heeft geslagen die we nu nog steeds in het landschap zien als littekens.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>"Het Grote Lek":</strong> In de zandtafel of waterbak bouwen de leerlingen het landschap van 1675 na. Ze maken een dijk van alleen zand en een dijk van klei. Ze simuleren de storm (golven maken). De ontdekking: De zanddijk spoelt direct weg (het 'wiel' ontstaat), terwijl de kleidijk het water veel beter tegenhoudt omdat klei 'plakt'. Ze markeren op hun eigen kaart waar het misging.</p>
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
              Ingenieurs van de Klei
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">De Paalwormcrisis van 1730 en technische innovatie</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Stille Vijand": Het is 1730. De dijken lijken sterk, want ze worden beschermd door dikke houten palen. Maar er is paniek bij de dijkgraaf! Een onzichtbare vijand, de paalworm (Teredo navalis), eet het hout van binnenuit op. De palen breken als luciferhoutjes. De leerlingen worden benoemd tot "Ingenieurs van de Klei". Zij moeten een nieuwe manier bedenken om het land te beschermen, nu het hout niet meer werkt. Ze moeten de overstap maken van hout naar steen en aarde.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>"Het Dijk-Laboratorium":</strong> Leerlingen voeren materiaalproeven uit om de perfecte 'nieuwe dijk' te ontwerpen die de paalworm niet lust. Het Experiment: Ze testen in bakken de doorlaatbaarheid en erosiebestendigheid van drie materialen: zand, klei en steen/grind. Ze bouwen een dwarsdoorsnede van een dijk met een flauw talud (schuine helling) om de golven te breken, in plaats van een rechte muur. Ze presenteren hun technische oplossing aan de 'Dijkgraaf'.</p>
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
              Vechten of Meebewegen?
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Klimaatscenario’s 2050: dijkverhoging, ruimte voor water en morele keuzes</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Vechten of Meebewegen?": De klas functioneert als een Raad van Advies voor het waterschap of het Toekomstteam West-Friesland. Ze krijgen klimaatscenario’s voor het jaar 2050 voorgeschoteld (stijgende zeespiegel, piekbuien) en onderzoeken of de huidige dijk hoog genoeg is of dat er ruimte gemaakt moet worden voor water, bijvoorbeeld door polders gecontroleerd onder water te laten lopen.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>"De Calamiteitenpolder":</strong> Simulatie en debat over een noodsituatie. Stel: de stad Hoorn dreigt te overstromen en de enige redding is het doorsteken van een dijk naar een dunbevolkte polder (een calamiteitenpolder). Mag je de boerderijen daar opofferen om de stad te redden (solidariteit versus eigendom)? Leerlingen onderbouwen hun standpunt met argumenten en lokale voorbeelden.</p>
              <p><strong>Onderzoek met GIS-data:</strong> Leerlingen gebruiken bijvoorbeeld EduGIS of kaartmateriaal om risicoanalyses te maken van mogelijke overstromingsscenario’s in hun eigen regio en leggen verbanden met echte beleidskeuzes.</p>
              <p><strong>Eindproduct:</strong> Het schrijven van een formeel Adviesrapport "Visie 2050" aan het Hoogheemraadschap of de gemeente, waarin zij hun voorkeursstrategie presenteren en verantwoorden.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  // Herstel scroll positie na content update
  useEffect(() => {
    if (scrollPositionRef.current > 0) {
      // Gebruik dubbele requestAnimationFrame om te wachten tot de DOM volledig is bijgewerkt
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const didacticRouteElement = didacticRouteRef.current
          if (didacticRouteElement) {
            const currentTop = didacticRouteElement.getBoundingClientRect().top + window.scrollY
            const difference = currentTop - scrollPositionRef.current
            if (Math.abs(difference) > 5) { // Corrigeren als het verschil significant is
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

  // Handler voor tab wijziging
  const handleTabChange = (tabId: string) => {
    // Sla de huidige scroll positie op relatief tot de didactic route
    const didacticRouteElement = didacticRouteRef.current
    if (didacticRouteElement) {
      scrollPositionRef.current = didacticRouteElement.getBoundingClientRect().top + window.scrollY
    }
    
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
  const themeConfig = getThemeConfig('westfriese-omringdijk')
  const colorScheme = themeConfig.colorScheme!

  // Rijke Teksten
  const boeken = {
    informatief: [
      '800 jaar dijkzorg',
      'De levende dijk',
      'Dijkwerkers (Projectmateriaal)'
    ],
    leesboeken: [
      'De zee kwam door de brievenbus (Selma Noort)',
      'Kikker en de horizon (Velthuijs)',
      'Storm (Schmitz)',
      'Opeens zijn wij de vijand'
    ]
  }

  // Downloads
  const downloads = [
    { title: 'Lesbrief_Waterwolf_Gr1-2.pdf', type: 'PDF' },
    { title: 'Constructie_Challenge_Dijk_Gr5-6.pdf', type: 'PDF' },
    { title: 'Debatvorm_Calamiteitenpolder_Gr7-8.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          {/* Abstract water/dijk background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-blue-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van de West-Friese Omringdijk
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Strijd tegen het water & Klimaat
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              West-Friesland is een eiland binnen de dijken. In dit thema ontdekken leerlingen hoe wij al eeuwenlang leven met het water. Van de mythische 'Waterwolf' bij de kleuters tot strategisch watermanagement in groep 8.
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
                activeColor="bg-cyan-600"
                activeBorderColor="border-cyan-600"
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
                    Hoogheemraadschap Hollands Noorderkwartier (HHNK)
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Onze partner voor gastlessen en expertise over droge voeten.
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
