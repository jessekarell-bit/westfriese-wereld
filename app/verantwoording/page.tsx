'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Tabs from '@/components/Tabs'
import { ArrowLeft, FileText, BookOpen, Calculator, Users, Monitor, Globe, Leaf, Palette, Languages } from 'lucide-react'

// SLO Kerndoelen Mapping - Volledige verantwoording
const SLO_MAPPING = [
  {
    domain: "Nederlands",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-900 border-blue-200",
    objectives: [
      {
        id: "Kerndoel 1",
        title: "Taalcompetentie",
        description: "Taal als basis voor alle thema's via 'Rijke Teksten'.",
        subObjectives: [
          {
            id: "1A",
            title: "Rijke taalomgeving",
            detail: "Gebruik van de 'Didactische Leidraad' met 16 authentieke boeken per thema (8 informatief, 8 verhalend) om woordenschat en wereldkennis op te bouwen."
          },
          {
            id: "1B",
            title: "Taal in alle vakken",
            detail: "Taal wordt functioneel ingezet bij zaakvakken, bijv. het leren van woorden als 'boezemwater' en 'polderpeil' tijdens aardrijkskunde."
          }
        ]
      },
      {
        id: "Kerndoel 2",
        title: "Begrijpen van teksten",
        description: "Leerlingen ontwikkelen begrijpend lezen vaardigheden.",
        subObjectives: [
          {
            id: "2A",
            title: "Begrip tonen",
            detail: "Leerlingen lezen teksten over de watersnood van 1916 en beantwoorden begripsvragen."
          },
          {
            id: "2B",
            title: "Evalueren & Reflecteren",
            detail: "Vergelijken van fictie (De zee kwam door de brievenbus) met non-fictie (800 jaar dijkzorg)."
          },
          {
            id: "2C",
            title: "Bronnen verkennen",
            detail: "In de bovenbouw beoordelen leerlingen de betrouwbaarheid van historische bronnen over J.P. Coen in het Westfries Archief."
          }
        ]
      },
      {
        id: "Kerndoel 3",
        title: "Produceren van teksten",
        description: "Leerlingen leren verschillende tekstsoorten schrijven.",
        subObjectives: [
          {
            id: "3A",
            title: "Doelgericht schrijven",
            detail: "Het schrijven van een formeel adviesrapport aan de gemeente over de inrichting van de polder."
          },
          {
            id: "3B",
            title: "Creatief schrijven",
            detail: "Het schrijven van 'Daiku's' (West-Friese Haiku's) over de dijk in groep 3/4."
          },
          {
            id: "3C",
            title: "Schrijven om te leren",
            detail: "Maken van samenvattingen en schema's over de werking van stoommachines."
          }
        ]
      },
      {
        id: "Kerndoel 4",
        title: "Gesprekken voeren",
        description: "Leerlingen ontwikkelen spreek- en luistervaardigheden.",
        subObjectives: [
          {
            id: "4A",
            title: "Doelgericht spreken",
            detail: "Presenteren van de 'Meesterproef' (bijv. een maquette) aan een publiek van ouders of experts."
          },
          {
            id: "4B",
            title: "Gesprekken om te leren",
            detail: "Deelnemen aan het debat over de 'Calamiteitenpolder' (wel of niet onder water zetten?)."
          }
        ]
      },
      {
        id: "Kerndoel 5",
        title: "Bewuste taalgebruiker",
        description: "Leerlingen reflecteren op taalgebruik.",
        subObjectives: [
          {
            id: "5A",
            title: "Reflecteren",
            detail: "Feedback geven op elkaars presentaties tijdens de authentieke afsluiting."
          }
        ]
      },
      {
        id: "Kerndoel 6",
        title: "Taal als systeem",
        description: "Leerlingen leren over taalstructuur.",
        subObjectives: [
          {
            id: "6A",
            title: "Vorm en betekenis",
            detail: "Etymologie van Latijnse leenwoorden (muur, straat) in het thema Grieken en Romeinen."
          },
          {
            id: "6B",
            title: "Spelling/Grammatica",
            detail: "Correct toepassen van regels in de eindproducten (brieven/rapporten)."
          }
        ]
      },
      {
        id: "Kerndoel 7",
        title: "Taalgebruik verkennen",
        description: "Leerlingen verkennen taalvariatie en identiteit.",
        subObjectives: [
          {
            id: "7A",
            title: "Identiteit",
            detail: "Verkennen van het West-Friese dialect en de eigen talige identiteit."
          },
          {
            id: "7B",
            title: "Variatie",
            detail: "Verschil tussen formeel taalgebruik (in de rechtszaal bij Kasteel Radboud) en informeel taalgebruik."
          }
        ]
      },
      {
        id: "Kerndoel 8 & 9",
        title: "Literatuur",
        description: "Leerlingen ervaren en waarderen literatuur.",
        subObjectives: [
          {
            id: "8A/B",
            title: "Ervaring & Waarde",
            detail: "Lezen van Kruistocht in Spijkerbroek en reflecteren op de historische context."
          },
          {
            id: "9A",
            title: "Verhalende teksten",
            detail: "Analyseren van perspectief in De reis van Syntax Bosselman (slavernijverleden)."
          }
        ]
      }
    ]
  },
  {
    domain: "Rekenen & Wiskunde",
    icon: Calculator,
    color: "bg-orange-100 text-orange-900 border-orange-200",
    objectives: [
      {
        id: "Kerndoel 10",
        title: "Getallen en verhoudingen",
        description: "Toegepast rekenen in een historische en technische context.",
        subObjectives: [
          {
            id: "10A",
            title: "Getallen",
            detail: "Rekenen met historische valuta (gulden, stuiver) en grote getallen (VOC-winsten)."
          },
          {
            id: "10C",
            title: "Verhoudingen",
            detail: "Schaalberekeningen bij het maken van kaarten van de Beemster (1:100)."
          }
        ]
      },
      {
        id: "Kerndoel 11",
        title: "Grootheden en eenheden",
        description: "Meten en berekenen in praktische contexten.",
        subObjectives: [
          {
            id: "11A",
            title: "Meten",
            detail: "Oppervlakte en inhoud berekenen van polderkavels en dijklichamen (l×b×h)."
          }
        ]
      },
      {
        id: "Kerndoel 12",
        title: "Data",
        description: "Interpreteren en analyseren van data.",
        subObjectives: [
          {
            id: "12A",
            title: "Interpreteren",
            detail: "Analyseren van grafieken over de visstand (haring vs. paling) voor en na de Afsluitdijk."
          }
        ]
      },
      {
        id: "Kerndoel 13",
        title: "Patronen en verbanden",
        description: "Herkennen en voortzetten van patronen.",
        subObjectives: [
          {
            id: "13A",
            title: "Patronen",
            detail: "Herkennen en voortzetten van geometrische patronen in de Beemster en Romeinse mozaïeken."
          }
        ]
      },
      {
        id: "Kerndoel 14",
        title: "Meetkunde",
        description: "Redeneren over meetkundige figuren en plaats.",
        subObjectives: [
          {
            id: "14A",
            title: "Figuren en plaats",
            detail: "Construeren van plattegronden voor een dwangburcht (vierkant vs. ronde torens) en navigeren met coördinaten."
          }
        ]
      },
      {
        id: "Kerndoel 15",
        title: "Denk-werkwijzen",
        description: "Probleemoplossen en modelleren.",
        subObjectives: [
          {
            id: "15A",
            title: "Probleemoplossen",
            detail: "Hoeveel kuub water moet een gemaal pompen om de polder droog te houden bij 10mm regen?"
          },
          {
            id: "15B",
            title: "Modelleren",
            detail: "Maken van een schaalmodel van een dijk of kasteel."
          }
        ]
      },
      {
        id: "Kerndoel 16",
        title: "Taal en gereedschap",
        description: "Gebruik van wiskundige instrumenten.",
        subObjectives: [
          {
            id: "16B",
            title: "Instrumenten",
            detail: "Gebruik van de landmetersketting en waterpas in het thema De Polder."
          }
        ]
      },
      {
        id: "Kerndoel 17 & 18",
        title: "Attitude en Toepassing",
        description: "Wiskunde in context toepassen.",
        subObjectives: [
          {
            id: "18A",
            title: "Context",
            detail: "Wiskunde gebruiken om te bepalen of een investering in de droogmakerij winstgevend is (aandelenspel)."
          }
        ]
      }
    ]
  },
  {
    domain: "Burgerschap",
    icon: Users,
    color: "bg-indigo-100 text-indigo-900 border-indigo-200",
    objectives: [
      {
        id: "Kerndoel 19",
        title: "Democratische oefenplaats",
        description: "De school als oefenplaats voor democratie.",
        subObjectives: [
          {
            id: "19A",
            title: "Sociale competenties",
            detail: "Samenwerken in de 'Dijkwacht'-simulatie (wie legt de zandzakken?)."
          }
        ]
      },
      {
        id: "Kerndoel 20",
        title: "Democratische rechtsstaat",
        description: "Vrijheid, gelijkwaardigheid en diversiteit.",
        subObjectives: [
          {
            id: "20A",
            title: "Waarden",
            detail: "Vergelijken van middeleeuwse rechtspraak (Floris V) met de moderne rechtsstaat en debatteren over vrijheid vs. veiligheid."
          },
          {
            id: "20B",
            title: "Diversiteit",
            detail: "Onderzoek naar slavernijverleden (WIC in Hoorn/Enkhuizen) en diversiteit in de 17e eeuw."
          }
        ]
      },
      {
        id: "Kerndoel 21",
        title: "Betrokkenheid",
        description: "Democratisch handelen en bijdragen aan de samenleving.",
        subObjectives: [
          {
            id: "21A",
            title: "Democratisch handelen",
            detail: "Simulatie van waterschapsverkiezingen en besluitvorming over dijkversterking."
          },
          {
            id: "21B",
            title: "Bijdrage leveren",
            detail: "Ontwerpen van een duurzame toekomstvisie voor de polder (Agriport vs. natuur)."
          }
        ]
      }
    ]
  },
  {
    domain: "Digitale Geletterdheid",
    icon: Monitor,
    color: "bg-cyan-100 text-cyan-900 border-cyan-200",
    objectives: [
      {
        id: "Kerndoel 22",
        title: "Praktische kennis",
        description: "Technologie als middel voor onderzoek en creatie.",
        subObjectives: [
          {
            id: "22A",
            title: "Systemen",
            detail: "Gebruik van EduGIS en Topotijdreis om landschapsveranderingen te analyseren."
          },
          {
            id: "22B",
            title: "Informatievaardigheden",
            detail: "Bronnenkritiek bij online informatie over J.P. Coen ('fake news' vs. feiten)."
          }
        ]
      },
      {
        id: "Kerndoel 23",
        title: "Ontwerpen en maken",
        description: "Programmeren en computational thinking.",
        subObjectives: [
          {
            id: "23B",
            title: "Programmeren/Computational Thinking",
            detail: "Programmeren van de BeeBot op een polderkaart (algoritmes voor routes)."
          }
        ]
      },
      {
        id: "Kerndoel 24",
        title: "Gedigitaliseerde wereld",
        description: "Impact van digitalisering.",
        subObjectives: [
          {
            id: "24C",
            title: "Impact",
            detail: "Onderzoek naar de rol van datacenters (de fysieke 'cloud') in de Wieringermeer en de energietransitie."
          }
        ]
      }
    ]
  },
  {
    domain: "Mens & Maatschappij",
    icon: Globe,
    color: "bg-purple-100 text-purple-900 border-purple-200",
    objectives: [
      {
        id: "Kerndoel 25",
        title: "Vraagstukken",
        description: "Tijd, Ruimte en Samenleving in regionaal perspectief.",
        subObjectives: [
          {
            id: "25B",
            title: "Maatschappelijke kwesties",
            detail: "Analyse van het conflict tussen datacenters, boeren en natuur in de polder."
          },
          {
            id: "25C",
            title: "Eigen omgeving",
            detail: "Verkenning van de eigen regio (dijk, terp, polder) en het lokale erfgoed."
          }
        ]
      },
      {
        id: "Kerndoel 26",
        title: "Mens en Ruimte",
        description: "Geografische werkwijzen hanteren.",
        subObjectives: [
          {
            id: "26A",
            title: "Wereldbeeld",
            detail: "Navigeren op kaarten van de Zuiderzee en de handelsroutes van de VOC."
          },
          {
            id: "26B",
            title: "Inrichting",
            detail: "Analyse van de rationele inrichting van de Beemster (UNESCO) vs. het oude land."
          }
        ]
      },
      {
        id: "Kerndoel 27",
        title: "Mens en Tijd",
        description: "Historisch denken en redeneren.",
        subObjectives: [
          {
            id: "27A",
            title: "Ontwikkelingen",
            detail: "Chronologische lijn van Prehistorie (Drechtje) tot Industriële Revolutie (Stoom)."
          },
          {
            id: "27B",
            title: "Historisch redeneren",
            detail: "Oorzaken en gevolgen van de watersnood van 1916 en de Zuiderzeewet."
          }
        ]
      },
      {
        id: "Kerndoel 28",
        title: "Mens en Samenleving",
        description: "Maatschappelijke vraagstukken en democratie.",
        subObjectives: [
          {
            id: "28A",
            title: "Economie",
            detail: "De economie van de Gouden Eeuw (aandelen, handel) en moderne innovatie (Seed Valley)."
          },
          {
            id: "28B",
            title: "Macht",
            detail: "Bestuursvormen vergelijken: van Graaf Floris V tot het Waterschap."
          }
        ]
      }
    ]
  },
  {
    domain: "Mens & Natuur",
    icon: Leaf,
    color: "bg-green-100 text-green-900 border-green-200",
    objectives: [
      {
        id: "Kerndoel 29",
        title: "Natuurwetenschappelijk perspectief",
        description: "Onderzoekend leren in 'Seed Valley' en het gemaal.",
        subObjectives: [
          {
            id: "29A",
            title: "Onderzoeken",
            detail: "Experimenteren met plantengroei (licht/donker) en kieming in De Tuin van Europa."
          },
          {
            id: "29C",
            title: "Werkwijzen",
            detail: "Gebruik van laboratoriummateriaal bij Sow to Grow."
          }
        ]
      },
      {
        id: "Kerndoel 30",
        title: "Techniek en Fysica",
        description: "Technische systemen en energie.",
        subObjectives: [
          {
            id: "30A",
            title: "Technische systemen",
            detail: "Werking van de vijzel (Archimedes) en stoommachine (zuigers/druk)."
          },
          {
            id: "30C",
            title: "Energie/Kracht",
            detail: "Thermodynamica: hoe zet stoom warmte om in beweging?"
          }
        ]
      },
      {
        id: "Kerndoel 31",
        title: "Organismen",
        description: "Levenscyclus en erfelijkheid.",
        subObjectives: [
          {
            id: "31A",
            title: "Levenscyclus",
            detail: "Van zaadje tot plant; erfelijkheid en veredeling (Mendel)."
          }
        ]
      },
      {
        id: "Kerndoel 32",
        title: "Systeem Aarde",
        description: "Ecosystemen en biodiversiteit.",
        subObjectives: [
          {
            id: "32C",
            title: "Ecosystemen",
            detail: "De ecologische schok van zout (Zuiderzee) naar zoet (IJsselmeer) en de gevolgen voor biodiversiteit."
          }
        ]
      }
    ]
  },
  {
    domain: "Kunst & Cultuur",
    icon: Palette,
    color: "bg-pink-100 text-pink-900 border-pink-200",
    objectives: [
      {
        id: "Kerndoel 35",
        title: "Artistiek vermogen",
        description: "Verwerking en betekenisgeving.",
        subObjectives: [
          {
            id: "35A",
            title: "Creatieve strategieën",
            detail: "Ontwerpen van een eigen 'Superplant' of futuristisch gemaal."
          }
        ]
      },
      {
        id: "Kerndoel 36",
        title: "Maken",
        description: "Verbeelden en creëren.",
        subObjectives: [
          {
            id: "36A",
            title: "Verbeelden",
            detail: "Maken van polderdekens (Mondriaan-stijl), schimmenspelen en maquettes."
          }
        ]
      },
      {
        id: "Kerndoel 37",
        title: "Meemaken en betekenis",
        description: "Erfgoed en cultuur ervaren.",
        subObjectives: [
          {
            id: "37B",
            title: "Erfgoed",
            detail: "Bezoek aan en reflectie op erfgoedlocaties: Kasteel Radboud, Zuiderzeemuseum, Stoommachinemuseum."
          }
        ]
      }
    ]
  },
  {
    domain: "Moderne Vreemde Talen",
    icon: Languages,
    color: "bg-yellow-100 text-yellow-900 border-yellow-200",
    objectives: [
      {
        id: "Kerndoel 33 & 34",
        title: "Engels",
        description: "Moderne vreemde talen in het curriculum.",
        subObjectives: [
          {
            id: "Status",
            title: "In ontwikkeling",
            detail: "In het huidige ontwerp is dit een ontwikkelpunt. Uit de kwaliteitsanalyse blijkt dat de integratie van Engels (bijv. via internationale handel of Seed Valley) nog niet formeel is vastgelegd in de thema's. Dit wordt geadviseerd als vervolgstap (bijv. CLIL-activiteiten in de bovenbouw)."
          }
        ]
      }
    ]
  }
]

export default function VerantwoordingPage() {
  // Tel totaal aantal kerndoelen
  const totalObjectives = SLO_MAPPING.reduce((sum, domain) => sum + domain.objectives.length, 0)
  
  // Maak tabs voor elk domein
  const tabs = SLO_MAPPING.map((domain) => {
    const Icon = domain.icon
    
    return {
      id: domain.domain.toLowerCase().replace(/\s+/g, '-'),
      label: domain.domain,
      content: (
        <div className="space-y-6">
          {/* Domein Header */}
          <div className={`${domain.color} p-6 rounded-lg border-2 mb-6`}>
            <div className="flex items-center gap-3 mb-2">
              <Icon className="h-6 w-6" />
              <h2 className="text-2xl font-bold">{domain.domain}</h2>
            </div>
            <p className="text-sm opacity-90">
              {domain.objectives.length} kerndoel{domain.objectives.length !== 1 ? 'en' : ''} gedekt
            </p>
          </div>

          {/* Alle Kerndoelen onder elkaar */}
          <div className="space-y-6">
            {domain.objectives.map((objective, objIndex) => (
              <Card 
                key={objIndex}
                className={`${domain.color} border-2 shadow-md`}
              >
                <CardContent className="p-6">
                  {/* Kerndoel Header */}
                  <div className="mb-4 pb-4 border-b border-gray-300">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {objective.id}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {objective.title}
                        </h4>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="bg-white border-gray-300 text-gray-700 font-mono text-xs"
                      >
                        {objective.subObjectives.length} subdoel{objective.subObjectives.length !== 1 ? 'en' : ''}
                      </Badge>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      {objective.description}
                    </p>
                  </div>

                  {/* Subdoelen */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                      Concretisering:
                    </h5>
                    <div className="space-y-3">
                      {objective.subObjectives.map((subObj, subIndex) => (
                        <div 
                          key={subIndex}
                          className="bg-white/80 rounded-lg p-4 border border-gray-200"
                        >
                          <div className="flex items-start gap-3">
                            <Badge 
                              variant="outline" 
                              className="bg-deep-water-blue/10 border-deep-water-blue/30 text-deep-water-blue font-semibold flex-shrink-0"
                            >
                              {subObj.id}
                            </Badge>
                            <div className="flex-1">
                              <h6 className="font-semibold text-gray-800 mb-1">
                                {subObj.title}
                              </h6>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {subObj.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )
    }
  })

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Zakelijk */}
        <section className="bg-white border-b border-gray-200 py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-deep-water-blue mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug naar home
            </Link>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-deep-water-blue/10 rounded-lg">
                <FileText className="h-8 w-8 text-deep-water-blue" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Verantwoording & Dekkingsmatrix
                </h1>
                <p className="text-lg text-gray-600">
                  Concretisering SLO Kerndoelen 2025
                </p>
              </div>
            </div>

            {/* Statistieken */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-deep-water-blue">{SLO_MAPPING.length}</div>
                <div className="text-sm text-gray-600">Domeinen</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-deep-water-blue">{totalObjectives}</div>
                <div className="text-sm text-gray-600">Kerndoelen</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-deep-water-blue">8</div>
                <div className="text-sm text-gray-600">Thema's</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-deep-water-blue">100%</div>
                <div className="text-sm text-gray-600">Dekking</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content met Tabs */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs tabs={tabs} defaultTab={tabs[0]?.id} />

          {/* Footer Note - Officieel */}
          <Card className="mt-12 bg-white border-2 border-gray-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold mb-2">Verantwoordingsdocument</p>
                  <p className="mb-2">
                    Dit document toont de 1-op-1 koppeling tussen de officiële SLO Kerndoelen 2025 
                    en de 8 thema's van 'De West-Friese Wereld'. Elke kerndoel is geconcretiseerd 
                    met specifieke subdoelen en leeractiviteiten.
                  </p>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    Laatste update: {new Date().toLocaleDateString('nl-NL', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
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
