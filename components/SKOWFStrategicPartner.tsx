'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Search, Microscope, Network } from 'lucide-react'

const curriculumData = {
  yearA: [
    {
      id: 1,
      title: "De Westfriese Omringdijk",
      subtitle: "De strijd tegen het water",
      levels: [
        { group: "Onderbouw (1-2)", focus: "Mythische Bescherming", desc: "De dijk als grens en veiligheid (De Waterwolf)." },
        { group: "Middenbouw (3-4)", focus: "Sporenonderzoek", desc: "Historische littekens in het landschap (wielen) en calamiteiten." },
        { group: "Middenbouw (5-6)", focus: "Technische Innovatie", desc: "Oorzaak-gevolg in waterbouw. Hout naar steen (Paalworm)." },
        { group: "Bovenbouw (7-8)", focus: "Strategisch Waterbeheer", desc: "Klimaatadaptatie, risicomanagement en bestuurlijke besluitvorming." }
      ]
    },
    {
      id: 2,
      title: "Grieken & Romeinen",
      subtitle: "Grenzen & Cultuur",
      levels: [
        { group: "Onderbouw (1-2)", focus: "Culturele Ontmoeting", desc: "Besef van 'de ander', ver weg vs. hier. Ruilhandel." },
        { group: "Middenbouw (3-4)", focus: "Grensverkenning", desc: "Limes: Inheemse vs. Romeinse cultuur." },
        { group: "Middenbouw (5-6)", focus: "Wetenschappelijke Reconstructie", desc: "Archeologie, stratigrafie en Romeinse bouwkunst." },
        { group: "Bovenbouw (7-8)", focus: "Staatsinrichting & Democratie", desc: "Machtsstructuren (Imperium) vs. moderne rechtsstaat." }
      ]
    },
    {
      id: 3,
      title: "De Polder",
      subtitle: "Maakbaarheid van het land",
      levels: [
        { group: "Onderbouw (1-2)", focus: "Ruimtelijke Ordening", desc: "Contrast tussen organisch (natuur) en geordend (recht)." },
        { group: "Middenbouw (3-4)", focus: "Geometrische Ratio", desc: "Wiskundige principes en rasters (De Beemster)." },
        { group: "Middenbouw (5-6)", focus: "Economisch Eigenaarschap", desc: "Investering, risico en rendement in de 17e eeuw." },
        { group: "Bovenbouw (7-8)", focus: "Planologie & Belangen", desc: "Ruimtelijke ordening: economie vs. ecologie." }
      ]
    },
    {
      id: 4,
      title: "De Gouden Eeuw",
      subtitle: "Handel & Wereld",
      levels: [
        { group: "Onderbouw (1-2)", focus: "Zintuiglijk Wereldburgerschap", desc: "Geuren en kleuren van specerijen/stoffen." },
        { group: "Middenbouw (3-4)", focus: "Stedelijke Identiteit", desc: "De stad als archief: gevelstenen en symboliek." },
        { group: "Middenbouw (5-6)", focus: "Handelskapitalisme", desc: "Systeemanalyse wereldhandel en navigatie." },
        { group: "Bovenbouw (7-8)", focus: "Multiperspectiviteit & Ethiek", desc: "Welvaart vs. schaduwzijden (slavernij). Historische canon." }
      ]
    }
  ],
  yearB: [
    {
      id: 5,
      title: "Zuiderzee naar IJsselmeer",
      subtitle: "Ecologie & Politiek",
      levels: [
        { group: "Onderbouw (1-2)", focus: "Cultureel Erfgoed", desc: "Lokale tradities, visserij en leven met de elementen." },
        { group: "Middenbouw (3-4)", focus: "Fysische Transformatie", desc: "De schok van zout naar zoet water." },
        { group: "Middenbouw (5-6)", focus: "Ecologische Systeemleer", desc: "Voedselketens en adaptatie flora/fauna." },
        { group: "Bovenbouw (7-8)", focus: "Politieke Besluitvorming", desc: "Zuiderzeewet: veiligheid vs. economie/ecologie." }
      ]
    },
    {
      id: 6,
      title: "Kasteel Radboud",
      subtitle: "Macht & Recht",
      levels: [
        { group: "Onderbouw (1-2)", focus: "Archetypische Verbeelding", desc: "De burcht als symbool van bescherming. Fantasie." },
        { group: "Middenbouw (3-4)", focus: "Sociale Rolverdeling", desc: "Taakverdeling en hiërarchie in de middeleeuwen." },
        { group: "Middenbouw (5-6)", focus: "Militaire Strategie", desc: "Fysica van verdedigingswerken en dwangburchten." },
        { group: "Bovenbouw (7-8)", focus: "Rechtsstaat & Justitie", desc: "Van recht van de sterkste naar ethische rechtspraak." }
      ]
    },
    {
      id: 7,
      title: "Burgers & Stoommachines",
      subtitle: "Techniek & Arbeid",
      levels: [
        { group: "Onderbouw (1-2)", focus: "Fysische Kracht", desc: "Energieomzetting: warmte naar beweging." },
        { group: "Middenbouw (3-4)", focus: "Sociale Innovatie", desc: "Ongelijkheid, rechten van het kind en uitvinden." },
        { group: "Middenbouw (5-6)", focus: "Thermodynamica", desc: "Principes van druk en energiebehoud." },
        { group: "Bovenbouw (7-8)", focus: "Maatschappelijke Transitie", desc: "Industrialisatie, emancipatie en vakbonden." }
      ]
    },
    {
      id: 8,
      title: "De Tuin van Europa",
      subtitle: "Seed Valley & Toekomst",
      levels: [
        { group: "Onderbouw (1-2)", focus: "Cyclisch Denken", desc: "Wonder van leven: van zaad tot plant." },
        { group: "Middenbouw (3-4)", focus: "Agrarische Historie", desc: "Oorsprong lokale handel en groeicondities." },
        { group: "Middenbouw (5-6)", focus: "Biotechnologie", desc: "Genetica, veredeling en optimalisatie." },
        { group: "Bovenbouw (7-8)", focus: "Bio-ethiek & Globalisering", desc: "Wereldvoedselvraagstukken en gentech-dilemma's." }
      ]
    }
  ],
  pedagogy: [
    { phase: "Onderbouw", role: "Verwondering", text: "De regio is een belevingswereld (Spel & Zintuigen)", icon: Sparkles },
    { phase: "Middenbouw 3/4", role: "Exploratie", text: "De regio is een ontdekkingsplek (Observatie & Ordening)", icon: Search },
    { phase: "Middenbouw 5/6", role: "Analyse", text: "De regio is een laboratorium (Techniek & Causaliteit)", icon: Microscope },
    { phase: "Bovenbouw 7/8", role: "Synthese", text: "De regio is een maatschappelijk vraagstuk (Systeemdenken & Burgerschap)", icon: Network }
  ]
}

export default function SKOWFStrategicPartner() {
  const [activeYear, setActiveYear] = useState<'yearA' | 'yearB'>('yearA')
  const activeThemes = curriculumData[activeYear]

  const getLevelColor = (group: string) => {
    if (group.includes('Onderbouw')) return 'bg-purple-100 text-skowf-magenta border-purple-200'
    if (group.includes('Middenbouw 3-4')) return 'bg-orange-100 text-skowf-orange border-orange-200'
    if (group.includes('Middenbouw 5-6')) return 'bg-amber-100 text-amber-700 border-amber-200'
    if (group.includes('Bovenbouw')) return 'bg-blue-100 text-blue-700 border-blue-200'
    return 'bg-gray-100 text-gray-700 border-gray-200'
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-skowf-magenta">
        <div className="max-w-7xl mx-auto">
          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="w-48 h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-sm text-gray-500 font-montserrat font-semibold">School Logo</span>
            </div>
            <div className="text-skowf-magenta font-bold text-2xl">+</div>
            <div className="w-48 h-24 bg-skowf-magenta rounded-lg flex items-center justify-center">
              <span className="text-white font-montserrat font-bold text-xl">SKOWF</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-skowf-magenta text-center mb-4">
            SKOWF pioniert met De West-Friese Wereld
          </h1>

          {/* Subtitle */}
          <p className="font-open-sans text-xl md:text-2xl text-gray-700 text-center mb-6 max-w-4xl mx-auto">
            Een doorlopende leerlijn van groep 1 t/m 8, geworteld in de regio.
          </p>

          {/* Intro Text */}
          <div className="max-w-4xl mx-auto">
            <p className="font-open-sans text-lg text-gray-600 text-center leading-relaxed">
              Als strategisch partner omarmt SKOWF de ambitie om het onderwijs contextrijker en betekenisvoller te maken. 
              In deze pilotfase implementeren we een unieke verticale leerlijn.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Matrix Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Tab System */}
          <div className="mb-8">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveYear('yearA')}
                className={`
                  px-8 py-4 font-montserrat font-bold text-lg rounded-lg transition-all
                  ${activeYear === 'yearA'
                    ? 'bg-skowf-magenta text-white shadow-lg transform scale-105'
                    : 'bg-white text-skowf-magenta border-2 border-skowf-magenta hover:bg-purple-50'
                  }
                `}
              >
                JAAR A
              </button>
              <button
                onClick={() => setActiveYear('yearB')}
                className={`
                  px-8 py-4 font-montserrat font-bold text-lg rounded-lg transition-all
                  ${activeYear === 'yearB'
                    ? 'bg-skowf-magenta text-white shadow-lg transform scale-105'
                    : 'bg-white text-skowf-magenta border-2 border-skowf-magenta hover:bg-purple-50'
                  }
                `}
              >
                JAAR B
              </button>
            </div>
          </div>

          {/* Theme Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {activeThemes.map((theme) => (
              <Card key={theme.id} className="bg-white shadow-md hover:shadow-xl transition-shadow border-l-4 border-l-skowf-orange">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-skowf-magenta text-white rounded-full flex items-center justify-center font-montserrat font-bold text-lg">
                      {theme.id}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-montserrat text-xl font-bold text-skowf-magenta mb-1">
                        {theme.title}
                      </CardTitle>
                      <p className="font-open-sans text-sm text-gray-600 italic">
                        {theme.subtitle}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {theme.levels.map((level, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg border-2 ${getLevelColor(level.group)}`}
                      >
                        <div className="flex items-start gap-3">
                          <Badge 
                            variant="outline" 
                            className={`font-montserrat font-semibold text-xs flex-shrink-0 ${
                              level.group.includes('Onderbouw') ? 'bg-purple-200 border-purple-300 text-skowf-magenta' :
                              level.group.includes('Middenbouw 3-4') ? 'bg-orange-200 border-orange-300 text-skowf-orange' :
                              level.group.includes('Middenbouw 5-6') ? 'bg-amber-200 border-amber-300 text-amber-700' :
                              'bg-blue-200 border-blue-300 text-blue-700'
                            }`}
                          >
                            {level.group}
                          </Badge>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-montserrat font-bold text-sm mb-1">
                              {level.focus}
                            </h4>
                            <p className="font-open-sans text-xs text-gray-700 leading-relaxed">
                              {level.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Verantwoording Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-skowf-magenta text-center mb-12">
            Pedagogische Verantwoording
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumData.pedagogy.map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-skowf-orange transition-all hover:shadow-lg">
                  <CardHeader className="text-center pb-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-skowf-magenta to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-skowf-orange text-white font-montserrat font-bold mb-2">
                      {item.phase}
                    </Badge>
                    <CardTitle className="font-montserrat text-lg font-bold text-skowf-magenta">
                      {item.role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-open-sans text-sm text-gray-700 text-center leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
