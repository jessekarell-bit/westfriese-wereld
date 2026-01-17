'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Search, Microscope, Network, BookOpen, Handshake } from 'lucide-react'
import { themes } from '@/src/data/curriculum'
import { getSKOWFCurriculumData } from '@/src/data/curriculum-helpers'

const pedagogy = [
  { phase: "Onderbouw", role: "Verwondering", text: "De regio is een belevingswereld (Spel & Zintuigen)", icon: Sparkles },
  { phase: "Middenbouw 3/4", role: "Exploratie", text: "De regio is een ontdekkingsplek (Observatie & Ordening)", icon: Search },
  { phase: "Middenbouw 5/6", role: "Analyse", text: "De regio is een laboratorium (Techniek & Causaliteit)", icon: Microscope },
  { phase: "Bovenbouw 7/8", role: "Synthese", text: "De regio is een maatschappelijk vraagstuk (Systeemdenken & Burgerschap)", icon: Network }
]

export default function SKOWFStrategicPartner() {
  const [activeYear, setActiveYear] = useState<'yearA' | 'yearB'>('yearA')
  const curriculumData = useMemo(() => getSKOWFCurriculumData(themes), [])
  const activeThemes = curriculumData[activeYear]

  const getBadgeColor = (group: string) => {
    if (group.includes('Onderbouw')) return 'bg-green-100 text-green-800'
    if (group.includes('Middenbouw')) return 'bg-blue-100 text-blue-800'
    if (group.includes('Bovenbouw')) return 'bg-purple-100 text-purple-800'
    return 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="bg-[#F9FAFB]">
      {/* Hero Section with Gradient - SKOWF Branding */}
      <section className="bg-gradient-to-r from-[#463f8a] via-[#5a4f9a] to-[#F39200] py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        {/* Subtle pattern overlay for depth */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Combined Logo - SKOWF Brand Identity - Prominent Partnership Display */}
          <div className="mb-20">
            {/* Logo Display with Enhanced Partnership Visual */}
            <div className="relative">
              {/* Decorative connecting lines */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent hidden lg:block"></div>
              
              <div className="flex flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-16">
                {/* SKOWF Logo - Prominent Brand Display */}
                <div className="flex items-center relative z-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-white/30 shadow-2xl">
                    <div className="relative inline-flex items-center tracking-tight">
                      <span className="font-montserrat font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-none drop-shadow-lg">S</span>
                      <span className="font-montserrat font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-none drop-shadow-lg">K</span>
                      {/* O with teal circle and arcs - Signature Brand Element */}
                      <span className="relative inline-block mx-2">
                        {/* Teal circle - Brand accent color */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22 xl:w-24 xl:h-24 rounded-full bg-[#00B7B6] shadow-2xl -z-10"></div>
                        {/* Top arc - Elegant brand detail */}
                        <svg className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 sm:w-14 h-8" viewBox="0 0 50 16" fill="none">
                          <path d="M 5 10 Q 25 3 45 10" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                        </svg>
                        {/* Bottom arc */}
                        <svg className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-6 sm:w-14 h-8" viewBox="0 0 50 16" fill="none">
                          <path d="M 5 6 Q 25 13 45 6" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                        </svg>
                        <span className="font-montserrat font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-none relative z-10 drop-shadow-lg">O</span>
                      </span>
                      <span className="font-montserrat font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-none drop-shadow-lg">W</span>
                      <span className="font-montserrat font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-none drop-shadow-lg">F</span>
                    </div>
                  </div>
                </div>

                {/* Handshake Icon - Enhanced Partnership Symbol */}
                <div className="flex items-center justify-center relative z-20">
                  <div className="relative">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative p-6 md:p-8 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/50 shadow-2xl">
                      <Handshake className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 text-white" strokeWidth="3" fill="none" />
                    </div>
                    {/* Partnership text below icon */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="font-montserrat font-bold text-white text-xs sm:text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                        Samenwerking
                      </span>
                    </div>
                  </div>
                </div>

                {/* De West-Friese Wereld Logo - Enhanced */}
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-white/30 shadow-2xl">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40">
                        <BookOpen className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-white" strokeWidth="3" fill="none" />
                      </div>
                      <span className="text-white font-montserrat font-bold text-lg sm:text-xl lg:text-2xl text-center whitespace-nowrap tracking-wide drop-shadow-lg">
                        De West-Friese Wereld
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Statement */}
            <div className="mt-12 text-center">
              <p className="font-montserrat font-bold text-white text-xl md:text-2xl lg:text-3xl mb-2 drop-shadow-lg">
                Samen bouwen aan betekenisvol onderwijs
              </p>
              <p className="font-open-sans text-white/90 text-base md:text-lg font-medium">
                Een unieke samenwerking tussen SKOWF en De West-Friese Wereld
              </p>
            </div>
          </div>

          {/* Partnership Emphasis Badge - Prominent Display */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#463f8a] via-[#5a4f9a] to-[#F39200] rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-[#463f8a] via-[#5a4f9a] to-[#F39200] rounded-full px-10 py-5 shadow-2xl border-4 border-white/40">
                <div className="flex items-center gap-5">
                  <span className="font-montserrat font-extrabold text-white text-xl md:text-2xl lg:text-3xl drop-shadow-lg">SKOWF</span>
                  <div className="w-1.5 h-12 bg-white/70 rounded-full"></div>
                  <span className="font-montserrat font-extrabold text-white text-xl md:text-2xl lg:text-3xl drop-shadow-lg">De West-Friese Wereld</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title - SKOWF Typography */}
          <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-6 tracking-tight leading-tight drop-shadow-md">
            SKOWF pioniert met<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">De West-Friese Wereld</span>
          </h1>

          {/* Subtitle - Professional spacing */}
          <p className="font-open-sans text-xl md:text-2xl lg:text-3xl text-white/95 text-center mb-8 max-w-5xl mx-auto font-semibold leading-relaxed">
            Een doorlopende leerlijn van groep 1 t/m 8, geworteld in de regio.
          </p>

          {/* Intro Text - SKOWF Brand Voice */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
              <p className="font-open-sans text-lg md:text-xl text-white/95 text-center leading-relaxed font-medium">
                Als strategisch partner omarmt <span className="font-montserrat font-bold text-white">SKOWF</span> de ambitie om het onderwijs contextrijker en betekenisvoller te maken. 
                In deze pilotfase implementeren we een unieke verticale leerlijn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Matrix Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          {/* Visie Tekstvak */}
          <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-l-[#463f8a]">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#463f8a] mb-6">
              De Wereld begint in West-Friesland
            </h2>
            <h3 className="font-montserrat text-xl md:text-2xl font-semibold text-[#F39200] mb-6">
              Onze visie op betekenisvol onderwijs
            </h3>
            
            <div className="space-y-6 text-[#1F2937] font-open-sans text-base md:text-lg leading-relaxed">
              <p>
                Bij SKOWF geloven we in het motto: <span className="font-montserrat text-2xl md:text-3xl font-bold text-[#463f8a] block my-6 text-center italic">"Eerst het kind, dan de leerling"</span> Wij willen dat kinderen niet alleen leren uit boeken, maar leren door te ervaren, te onderzoeken en samen te werken. Onze missie is om kinderen inspirerend lerend de toekomst in te laten gaan. Maar hoe ziet die toekomst eruit? En waar begint die?
              </p>
              
              <p>
                Voor ons begint die ontdekkingsreis dichtbij huis. Precies daar vinden de visie van SKOWF en het project De West-Friese Wereld elkaar.
              </p>
              
              <h4 className="font-montserrat text-xl md:text-2xl font-semibold text-[#F39200] mt-8 mb-4">
                Vanuit eigen kracht de wereld in
              </h4>
              
              <p>
                De West-Friese Wereld is de vertaling van onze ambitie om betekenisvol onderwijs te bieden. Onderwijs dat niet abstract blijft, maar gaat leven.
              </p>
              
              <h5 className="font-montserrat text-lg md:text-xl font-semibold text-[#F39200] mt-6 mb-3">
                Verbinding met de omgeving:
              </h5>
              <p>
                SKOWF ziet de school niet als een eiland, maar als het hart van de wijk en de regio. Met 'De West-Friese Wereld' maken we van West-Friesland ons klaslokaal. De Westfriese Omringdijk, de hightech van Seed Valley en de historie van de VOC zijn geen saaie lesstof, maar het startpunt van avontuurlijk leren.
              </p>
              
              <h5 className="font-montserrat text-lg md:text-xl font-semibold text-[#F39200] mt-6 mb-3">
                Van dichtbij naar ver:
              </h5>
              <p>
                Wij geloven dat kinderen de grote wereld pas écht begrijpen als ze hun eigen omgeving kennen. Door te leren over het watermanagement in de polder, snappen ze de klimaatuitdagingen wereldwijd. De wortels liggen in de klei, de blik is gericht op de horizon.
              </p>
              
              <h4 className="font-montserrat text-xl md:text-2xl font-semibold text-[#F39200] mt-8 mb-4">
                Samen inspirerend lerend
              </h4>
              
              <p>
                Onze kernwaarden – Kwaliteit, Ontwikkeling en Samenwerking – komen in dit project tot leven. We werken niet alleen binnen de schoolmuren, maar trekken eropuit. Samen met lokale musea, bedrijven en natuurorganisaties creëren we een rijke leeromgeving waarin elk talent tot bloei komt.
              </p>
              
              <p className="font-montserrat font-semibold text-lg md:text-xl text-[#463f8a] mt-8 pt-6 border-t-2 border-[#463f8a]/20">
                Zo geven we bij SKOWF vorm aan onderwijs van nu: geworteld in onze eigen regio, maar met de skills voor de wereld van morgen.
              </p>
            </div>
          </div>

          {/* Tab System - SKOWF Brand Styling */}
          <div className="mb-12">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveYear('yearA')}
                className={`
                  px-10 py-5 font-montserrat font-extrabold text-lg md:text-xl rounded-xl transition-all tracking-wide
                  ${activeYear === 'yearA'
                    ? 'bg-gradient-to-r from-[#463f8a] to-[#5a4f9a] text-white shadow-xl transform scale-105 border-2 border-white/20'
                    : 'bg-white text-[#463f8a] border-2 border-[#463f8a]/30 hover:border-[#F39200] hover:text-[#F39200] hover:shadow-md'
                  }
                `}
              >
                Jaar A
              </button>
              <button
                onClick={() => setActiveYear('yearB')}
                className={`
                  px-10 py-5 font-montserrat font-extrabold text-lg md:text-xl rounded-xl transition-all tracking-wide
                  ${activeYear === 'yearB'
                    ? 'bg-gradient-to-r from-[#463f8a] to-[#5a4f9a] text-white shadow-xl transform scale-105 border-2 border-white/20'
                    : 'bg-white text-[#463f8a] border-2 border-[#463f8a]/30 hover:border-[#F39200] hover:text-[#F39200] hover:shadow-md'
                  }
                `}
              >
                Jaar B
              </button>
            </div>
          </div>

          {/* Theme Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {activeThemes.map((theme) => (
              <Card key={theme.id} className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-t-[#F39200] border-l border-r border-b border-gray-100 rounded-xl overflow-hidden">
                <CardHeader className="pb-5 bg-gradient-to-br from-white to-gray-50/50">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#463f8a] to-[#5a4f9a] text-white rounded-xl flex items-center justify-center font-montserrat font-extrabold text-xl shadow-md">
                      {theme.id}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-montserrat text-xl md:text-2xl font-extrabold text-[#463f8a] mb-2 tracking-tight">
                        {theme.title}
                      </CardTitle>
                      <p className="font-open-sans text-sm md:text-base text-[#463f8a]/70 font-medium italic">
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
                        className="p-4 rounded-lg bg-white border border-gray-200"
                      >
                        <div className="flex items-start gap-3">
                          <Badge 
                            className={`font-montserrat font-semibold text-xs flex-shrink-0 rounded-full px-3 py-1 ${getBadgeColor(level.group)}`}
                          >
                            {level.group}
                          </Badge>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-montserrat font-bold text-sm md:text-base mb-2 text-[#463f8a]">
                              {level.focus}
                            </h4>
                            <p className="font-open-sans text-xs md:text-sm text-[#1F2937] leading-relaxed">
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
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-[#463f8a] text-center mb-16 tracking-tight">
            Pedagogische Verantwoording
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pedagogy.map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="bg-white border-2 border-gray-200 hover:border-[#F39200] transition-all duration-300 hover:shadow-xl rounded-xl overflow-hidden">
                  <CardHeader className="text-center pb-4 bg-gradient-to-br from-white to-gray-50/30">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#463f8a] via-[#5a4f9a] to-[#F39200] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                      <Icon className="h-10 w-10 text-white" strokeWidth="2.5" />
                    </div>
                    <Badge className="bg-gradient-to-r from-[#F39200] to-[#ffa733] text-white font-montserrat font-extrabold mb-3 rounded-full px-4 py-1.5 text-xs tracking-wide shadow-md">
                      {item.phase}
                    </Badge>
                    <CardTitle className="font-montserrat text-xl font-extrabold text-[#463f8a] mb-2">
                      {item.role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-open-sans text-sm md:text-base text-[#1F2937] text-center leading-relaxed font-medium">
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
