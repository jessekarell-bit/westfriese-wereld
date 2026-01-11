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
  TrainFront, 
  Shield, 
  BookOpen, 
  FileText, 
  Download,
  MapPin,
  Users,
  ExternalLink,
  Search,
  Gavel,
  Cog
} from 'lucide-react'

export default function BurgersEnStoommachinesPage() {
  // State voor geselecteerde tab en route
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  // Routes per bouw
  const routes = {
    onderbouw: {
      titel: 'Kracht, Rook en Reizen',
      focus: 'Bello de Stoomtram en de magie van beweging',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontwikkelen een eerste tijdsbesef (\'toen waren er geen auto\'s\') en verkennen het fenomeen \'kracht\'. Ze leren dat water en vuur samen stoom maken, en dat stoom sterk genoeg is om iets te bewegen (oorzaak-gevolg).',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Bello heeft honger." Het verhaal van de stoomtram Bello die niet wil rijden omdat zijn buik (de ketel) leeg is. Hij moet \'gevoerd\' worden met kolen en water. De kinderen helpen de machinist om Bello wakker te maken zodat hij de mensen van Hoorn naar Medemblik kan brengen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Het Fluitketel-experiment: De leerkracht laat water koken. De kinderen zien de stoom, horen het fluiten en zien hoe de stoom een papieren molentje laat draaien. Conclusie: stoom kan duwen! Bezoek: Een ritje met de Museumstoomtram of een bezoek aan het perron om de grote zwarte locomotief te zien en te ruiken.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Het Station: Rollenspel in de huishoek die is omgebouwd tot loket. Kaartjes knippen, fluiten en op tijd vertrekken. Bouwen: In de bouwhoek een trein bouwen van dozen en wielen. Hoe maak je de wagons aan elkaar vast?',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Stoomparade. De kinderen rijden met hun zelfgebouwde trein door de school of over het plein, maken stoomgeluiden en leggen aan toeschouwers uit dat Bello rijdt op "water en vuur".',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'Uitvinders en Kinderarbeid',
      focus: 'Hoe werkt het en hoe was het leven?',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen de basiswerking van mechanische overbrengingen (wielen, assen) en ontwikkelen historisch besef door hun eigen leven te vergelijken met dat van kinderen in de 19e eeuw (het Kinderwetje van Van Houten).',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Brief van Jet." Het verhaal van Jet, een meisje dat in de fabriek werkt, en Klaas, de zoon van de machinist van het stoomgemaal. Jet schrijft een brief omdat ze liever naar school wil. De leerlingen worden "Junior Uitvinders" die oplossingen bedenken om het zware werk makkelijker te maken.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek: Excursie naar het Nederlands Stoommachinemuseum of de Stoomtram. Focus op de beleving: het lawaai, de hitte en het vele werk (kolen scheppen). Ervaring: In de klas een simpele lopende band simuleren (bijv. bonen sorteren) om te voelen hoe saai fabriekswerk is.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Garage Gust: Naar aanleiding van het boek Garage Gust zelf machines ontwerpen en knutselen van kosteloos materiaal. Hoe werkt een tandwiel? Sociale vergelijking: Een dagrooster maken van een kind in 1874 vs. een kind nu. Waarom was het Kinderwetje nodig?',
          icon: Cog
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Uitvindersbeurs. De leerlingen presenteren hun zelfgemaakte "Handige Machine" (die een probleem oplost) aan ouders of medeleerlingen en leggen uit hoe deze werkt.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'Stoomkracht en Thermodynamica',
      focus: 'Van wind naar stoom: de technische revolutie',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren de principes van luchtdruk en stoomdruk (expansie) en begrijpen de historische transitie van windmolens naar stoomgemalen voor het drooghouden van West-Friesland. Ze halen hun \'stookdiploma\'.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Stoomrevolutie." De polder loopt onder en de windmolens werken niet want het is windstil. De enige redding is de nieuwe techniek: het stoomgemaal Vier Noorder Koggen. De leerlingen fungeren als ingenieurs die deze nieuwe kracht moeten beheersen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Stookdiploma: In het Nederlands Stoommachinemuseum mogen leerlingen onder begeleiding machines smeren, druk aflezen en de miniatuurstoommachines bedienen. Proefjes: Experimenten met luchtdruk, zoals het laten imploderen van een blikje door condensatie (vacuüm) of het lanceren van een waterraket (actie-reactie).',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Blauwdrukken: Het maken van een technische tekening (blauwdruk) van een eigen uitvinding, inclusief zijaanzicht en bovenaanzicht. Debat: "Is kinderarbeid noodzakelijk voor de economie?" Een rollenspel tussen een fabrieksdirecteur en een arts, gebaseerd op historische bronnen.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Wereldtentoonstelling. Een presentatie van de technische modellen en de resultaten van de proefjes. Leerlingen demonstreren live de kracht van stoom/luchtdruk aan het publiek.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Industrialisatie en Sociale Strijd',
      focus: 'Energie, emancipatie en de moderne tijd',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de Industriële Revolutie als een sociaal-economisch breekpunt. Ze koppelen natuurkunde (wet van behoud van energie) aan maatschappelijke veranderingen (opkomst socialisme, kiesrecht, Aletta Jacobs).',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Vooruitgang of Verlies?" De klas onderzoekt de impact van de industrialisatie. Bracht de stoommachine welvaart voor iedereen, of creëerde het nieuwe armoede? Centraal staat de figuur van Aletta Jacobs en de strijd voor gelijke rechten.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Energie-analyse: Bezoek aan Gemaal Lely of het Stoommachinemuseum met focus op rendement. Hoeveel energie gaat erin (kolen) en hoeveel arbeid komt eruit? Sociale Sporen: Een stadswandeling of bronnenonderzoek naar de leefomstandigheden van arbeiders in de 19e eeuw in Hoorn/Enkhuizen.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Thermodynamica: Rekenen met de formule E_in = E_uit + Q (Toegevoegde energie = Arbeid + Warmteverlies). Leerlingen berekenen de efficiëntie van machines. Vergelijking: De leerlingen vergelijken de Industriële Revolutie (stoom) met de huidige AI-revolutie (data). Wat zijn de overeenkomsten in angst voor baanverlies en de verandering van de samenleving? (Kerndoel Digitale Geletterdheid).',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Grote Debat. Een debat over de stelling: "Technologische vooruitgang heiligt alle middelen." Of het schrijven van een manifest voor de rechten van de werknemer/het kind, geïnspireerd op Aletta Jacobs en Domela Nieuwenhuis.',
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
            <h3 className="font-serif text-2xl font-bold text-slate-700 mb-3">
              Kracht, Rook en Reizen
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 border-l-4 border-slate-600">
              <p className="text-sm font-semibold text-slate-900 mb-2">Focus:</p>
              <p className="text-gray-700">Bello de Stoomtram en de magie van beweging</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-slate-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Bello heeft honger." Het verhaal van de stoomtram Bello die niet wil rijden omdat zijn buik (de ketel) leeg is. Hij moet 'gevoerd' worden met kolen en water. De kinderen helpen de machinist om Bello wakker te maken zodat hij de mensen van Hoorn naar Medemblik kan brengen.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <TrainFront className="h-5 w-5 mr-2 text-slate-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Het Station:</strong> Rollenspel in de huishoek die is omgebouwd tot loket. Kaartjes knippen, fluiten en op tijd vertrekken.</p>
              <p><strong>Bouwen:</strong> In de bouwhoek een trein bouwen van dozen en wielen. Hoe maak je de wagons aan elkaar vast?</p>
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
            <h3 className="font-serif text-2xl font-bold text-slate-700 mb-3">
              Uitvinders en Kinderarbeid
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 border-l-4 border-slate-600">
              <p className="text-sm font-semibold text-slate-900 mb-2">Focus:</p>
              <p className="text-gray-700">Hoe werkt het en hoe was het leven?</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-slate-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Brief van Jet." Het verhaal van Jet, een meisje dat in de fabriek werkt, en Klaas, de zoon van de machinist van het stoomgemaal. Jet schrijft een brief omdat ze liever naar school wil. De leerlingen worden "Junior Uitvinders" die oplossingen bedenken om het zware werk makkelijker te maken.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Cog className="h-5 w-5 mr-2 text-slate-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Garage Gust:</strong> Naar aanleiding van het boek Garage Gust zelf machines ontwerpen en knutselen van kosteloos materiaal. Hoe werkt een tandwiel?</p>
              <p><strong>Sociale vergelijking:</strong> Een dagrooster maken van een kind in 1874 vs. een kind nu. Waarom was het Kinderwetje nodig?</p>
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
            <h3 className="font-serif text-2xl font-bold text-slate-700 mb-3">
              Stoomkracht en Thermodynamica
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 border-l-4 border-slate-600">
              <p className="text-sm font-semibold text-slate-900 mb-2">Focus:</p>
              <p className="text-gray-700">Van wind naar stoom: de technische revolutie</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-slate-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Stoomrevolutie." De polder loopt onder en de windmolens werken niet want het is windstil. De enige redding is de nieuwe techniek: het stoomgemaal Vier Noorder Koggen. De leerlingen fungeren als ingenieurs die deze nieuwe kracht moeten beheersen.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Cog className="h-5 w-5 mr-2 text-slate-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Blauwdrukken:</strong> Het maken van een technische tekening (blauwdruk) van een eigen uitvinding, inclusief zijaanzicht en bovenaanzicht.</p>
              <p><strong>Debat:</strong> "Is kinderarbeid noodzakelijk voor de economie?" Een rollenspel tussen een fabrieksdirecteur en een arts, gebaseerd op historische bronnen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-slate-700 mb-3">
              Industrialisatie en Sociale Strijd
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 border-l-4 border-slate-600">
              <p className="text-sm font-semibold text-slate-900 mb-2">Focus:</p>
              <p className="text-gray-700">Energie, emancipatie en de moderne tijd</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-slate-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Vooruitgang of Verlies?" De klas onderzoekt de impact van de industrialisatie. Bracht de stoommachine welvaart voor iedereen, of creëerde het nieuwe armoede? Centraal staat de figuur van Aletta Jacobs en de strijd voor gelijke rechten.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-slate-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Thermodynamica:</strong> Rekenen met de formule E_in = E_uit + Q (Toegevoegde energie = Arbeid + Warmteverlies). Leerlingen berekenen de efficiëntie van machines.</p>
              <p><strong>Vergelijking:</strong> De leerlingen vergelijken de Industriële Revolutie (stoom) met de huidige AI-revolutie (data). Wat zijn de overeenkomsten in angst voor baanverlies en de verandering van de samenleving? (Kerndoel Digitale Geletterdheid).</p>
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
                      ? 'bg-slate-700 text-white border-b-2 border-slate-700'
                      : 'text-gray-700 hover:text-slate-700 hover:bg-gray-50'
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
      'Stoommachines en de Industriële Revolutie',
      'Aletta Jacobs: De eerste vrouwelijke arts',
      'Het leven in de 19e eeuw'
    ],
    leesboeken: [
      'De Zwarte Hand (Thea Beckman)',
      'Kruistocht in spijkerbroek (Thea Beckman)',
      'Het geheim van de stoommachine'
    ]
  }

  // Downloads
  const downloads = [
    { title: 'Techniekkaart_Tandwielen.pdf', type: 'PDF' },
    { title: 'Poster_Kinderwetje.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 w-full px-6 py-12 md:p-20 overflow-hidden">
          {/* Abstract pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-slate-400/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-gray-400/10 blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-slate-700 mb-3 sm:mb-4 leading-tight">
              De Wereld van Burgers & Stoommachines
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 mb-4 sm:mb-6 font-medium">
              IJzer, rook en revolutie: De moderne tijd denderde West-Friesland binnen.
            </p>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Plotseling was er lawaai. De trekschuit ging te langzaam en de paarden werden vervangen door machines. Met de komst van Stoomtram 'Bello' veranderde alles. Maar brachten die machines alleen maar goeds? Een thema over uitvinders, fabrieksarbeiders en de strijd voor een eerlijk loon.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Back button */}
          <Link 
            href="/themas"
            className="inline-flex items-center text-slate-700 hover:text-slate-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
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
                  <h3 className="font-serif text-2xl font-bold text-slate-700 mb-2">
                    De didactische route
                  </h3>
                  <p className="text-lg font-medium text-slate-800 mb-1">
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
                        className="border-l-4 border-l-slate-600"
                      >
                        <CardContent className="p-6 sm:p-8">
                          <div className="flex items-start gap-4">
                            {/* Phase number badge */}
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-700 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center">
                                  <Icon className="h-5 w-5" />
                                </div>
                                <h4 className="font-semibold text-slate-700 text-lg">
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
                    <BookOpen className="h-5 w-5 text-slate-600 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-slate-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-slate-600 pl-3">
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
              <Card className="bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 text-slate-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Museumstoomtram Hoorn-Medemblik
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    De spannendste tijdreis door de historische driehoek. Ruik het stoom en voel de hitte.
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
                    <FileText className="h-5 w-5 text-slate-600 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-slate-600 hover:bg-slate-50 transition-colors group"
                        >
                          <FileText className="h-5 w-5 text-slate-600 group-hover:text-slate-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-slate-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-slate-600 flex-shrink-0" />
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
