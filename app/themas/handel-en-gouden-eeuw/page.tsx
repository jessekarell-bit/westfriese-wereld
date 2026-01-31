import Link from 'next/link'
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
  Ship, 
  Target, 
  BookOpen, 
  FileText, 
  Download,
  MapPin,
  Users,
  FileDown,
  ExternalLink,
  Coins
} from 'lucide-react'

export default function HandelEnGoudenEeuwPage() {
  // Tabs data voor de drie bouwen
  const tabs = [
    {
      id: 'onderbouw',
      label: 'Onderbouw',
      subtitle: 'Groep 1-2',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-amber-700 mb-3">
              Het Pakhuis vol Schatten
            </h3>
            <div className="bg-amber-50 rounded-lg p-4 mb-4 border-l-4 border-amber-600">
              <p className="text-sm font-semibold text-amber-900 mb-2">Focus:</p>
              <p className="text-gray-700">Zintuigen, verwondering & schatten</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-deep-water-blue" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Het pakhuis als schatkist. Wat zit er in die kisten? Specerijen die ruiken als verre landen: kaneel, peper, nootmuskaat. Een reis door geuren en kleuren.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Ship className="h-5 w-5 mr-2 text-deep-water-blue" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Specerijen ontdekken:</strong> Ruiken, voelen en proeven van specerijen uit verre landen.</p>
              <p><strong>Pakhuis naspelen:</strong> De klas wordt een pakhuis vol schatten en kisten.</p>
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
            <h3 className="font-serif text-2xl font-bold text-amber-700 mb-3">
              Scheepsjongens van de VOC
            </h3>
            <div className="bg-amber-50 rounded-lg p-4 mb-4 border-l-4 border-amber-600">
              <p className="text-sm font-semibold text-amber-900 mb-2">Focus:</p>
              <p className="text-gray-700">Havenleven, scheepsbouw & handel</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-deep-water-blue" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Het leven aan boord van een fluitschip. Hoe bouw je een schip dat duizenden kilometers kan varen? Het verhaal van de scheepsjongens die meezeilden naar Oost-Indië.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Ship className="h-5 w-5 mr-2 text-deep-water-blue" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bezoek Halve Maen:</strong> Excursie naar het VOC-schip in Hoorn.</p>
              <p><strong>Schip bouwen:</strong> Zelf een fluitschip maken van hout en touw.</p>
              <p><strong>Handelsspel:</strong> Ruilen van specerijen zoals in de 17e eeuw.</p>
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
            <h3 className="font-serif text-2xl font-bold text-amber-700 mb-3">
              Scheepsjongens van de VOC
            </h3>
            <div className="bg-amber-50 rounded-lg p-4 mb-4 border-l-4 border-amber-600">
              <p className="text-sm font-semibold text-amber-900 mb-2">Focus:</p>
              <p className="text-gray-700">Havenleven, scheepsbouw & handel</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-deep-water-blue" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Het leven aan boord van een fluitschip. Hoe bouw je een schip dat duizenden kilometers kan varen? Het verhaal van de scheepsjongens die meezeilden naar Oost-Indië.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Ship className="h-5 w-5 mr-2 text-deep-water-blue" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bezoek Halve Maen:</strong> Excursie naar het VOC-schip in Hoorn.</p>
              <p><strong>Schip bouwen:</strong> Zelf een fluitschip maken van hout en touw.</p>
              <p><strong>Handelsspel:</strong> Ruilen van specerijen zoals in de 17e eeuw.</p>
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
            <h3 className="font-serif text-2xl font-bold text-amber-700 mb-3">
              Het Goud en de Schaduw
            </h3>
            <div className="bg-amber-50 rounded-lg p-4 mb-4 border-l-4 border-amber-600">
              <p className="text-sm font-semibold text-amber-900 mb-2">Focus:</p>
              <p className="text-gray-700">Multiperspectiviteit, ethiek van kolonialisme & slavernij</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-deep-water-blue" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              De controverse rond Jan Pieterszoon Coen. Was hij een held die Nederland rijk maakte, of een tiran die volkeren onderdrukte? Het verhaal heeft meerdere kanten.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-deep-water-blue mb-2 flex items-center">
              <Coins className="h-5 w-5 mr-2 text-deep-water-blue" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Multiperspectief debat:</strong> Discussie over de erfenis van de VOC en WIC.</p>
              <p><strong>Onderzoek slavernij:</strong> Verdieping in de trans-Atlantische slavenhandel.</p>
              <p><strong>Museumbezoek:</strong> Westfries Museum met kritische blik op de Gouden Eeuw.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  // 5-Fasen specifiek voor dit thema
  const fasen = [
    {
      fase: 'Doel',
      beschrijving: 'Besef van handel, rijkdom en de prijs daarvan (Mens & Maatschappij)',
      icon: Target
    },
    {
      fase: 'Narratief',
      beschrijving: 'Het Pakhuis (OB) / Scheepsjongens van de VOC (MB) / J.P. Coen controverse (BB)',
      icon: BookOpen
    },
    {
      fase: 'Activering',
      beschrijving: 'OB: Specerijen ontdekken in het pakhuis | MB: Bezoek Halve Maen in Hoorn | BB: Westfries Museum met kritische rondleiding',
      icon: MapPin
    },
    {
      fase: 'Concretisering',
      beschrijving: 'Pakhuis naspelen, fluitschip bouwen, multiperspectief debat over kolonialisme',
      icon: Ship
    },
    {
      fase: 'Afsluiting',
      beschrijving: 'De \'Specerijenmarkt\' voor ouders (OB) of een \'Waarheid & Verzoening\' tentoonstelling (BB)',
      icon: Users
    }
  ]

  // Rijke Teksten
  const boeken = {
    informatief: [
      'De Gouden Eeuw in West-Friesland',
      'VOC: Handel en macht',
      'Het verhaal van de specerijenhandel'
    ],
    leesboeken: [
      'Scheepsjongens van Bontekoe (Johan Fabricius)',
      'De reis van de wraak (Thea Beckman)',
      'Havik (Marita de Sterck)',
      'Het pakhuis (Theo Engelen)'
    ]
  }

  // Downloads
  const downloads = [
    { title: 'Lesbrief_Specerijen_OB.pdf', type: 'PDF' },
    { title: 'VOC_Scheepsbouw_MB.pdf', type: 'PDF' },
    { title: 'Multiperspectief_Kolonialisme_BB.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          {/* Abstract gold/treasure background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-yellow-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-amber-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van de Gouden Eeuw
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Wereldhandel, Rijkdom & Schaduwkanten
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              Hoorn was een van de belangrijkste havensteden van de VOC. In dit thema ontdekken leerlingen de wereld van handel, rijkdom en scheepvaart. Van geurende specerijen bij de kleuters tot kritisch nadenken over kolonialisme in groep 8.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Back button */}
          <Link 
            href="/themas"
            className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar thema overzicht
          </Link>

          {/* Main Content with Sidebar - 70/30 split */}
          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            {/* Main Content - 70% */}
            <div className="lg:col-span-7 px-2 sm:px-0">
              {/* Tabs System */}
              <Tabs tabs={tabs} defaultTab="onderbouw" />

              {/* 5-Fasen Verticale Lijst */}
              <div className="mt-8 sm:mt-12">
                <div className="mb-4 sm:mb-6 px-2 sm:px-0">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-700 mb-2">
                    De didactische route
                  </h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {fasen.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Card 
                        key={index} 
                        className="border-l-4 border-l-amber-600"
                      >
                        <CardContent className="p-5 sm:p-6 lg:p-8">
                          <div className="flex items-start gap-3 sm:gap-4">
                            {/* Phase number badge */}
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-600 text-white flex items-center justify-center text-base sm:text-lg font-bold shadow-lg">
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-100 text-deep-water-blue flex items-center justify-center flex-shrink-0">
                                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <h4 className="font-semibold text-amber-700 text-base sm:text-lg">
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
                    <BookOpen className="h-5 w-5 text-amber-600 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-amber-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-amber-600 pl-3">
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
              <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 text-deep-water-blue mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Westfries Museum
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Onze partner voor gastlessen en expertise over de Gouden Eeuw in West-Friesland.
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
                    <FileText className="h-5 w-5 text-amber-600 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-amber-600 hover:bg-amber-50 transition-colors group"
                        >
                          <FileText className="h-5 w-5 text-deep-water-blue group-hover:text-polder-green flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-amber-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-amber-600 flex-shrink-0" />
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
