import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollytellingPhases from '@/components/ScrollytellingPhases'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { 
  Waves, 
  Castle, 
  Ship, 
  LayoutGrid, 
  TrainFront, 
  ShieldAlert, 
  MessageCircle, 
  Sprout,
  Target,
  Users,
  Percent,
  ArrowRight
} from 'lucide-react'

// THEMES array met 8 werelden – kleuren zoals op de wereldpagina's
const THEMES = [
  {
    id: 1,
    title: 'De Wereld van de West-Friese Omringdijk',
    description: 'Strijd tegen het water & Klimaat',
    icon: Waves,
    color: 'text-cyan-700',
    iconBg: 'bg-cyan-100',
    link: '/themas/westfriese-omringdijk',
  },
  {
    id: 2,
    title: 'De Wereld van Grieken & Romeinen',
    description: 'Grensland, Handel & Cultuur',
    icon: MessageCircle,
    color: 'text-stone-700',
    iconBg: 'bg-stone-100',
    link: '/themas/grieken-romeinen',
  },
  {
    id: 3,
    title: 'De Wereld van de Polder',
    description: 'Maakbaarheid, Wiskunde & Ruimtelijke Ordening',
    icon: LayoutGrid,
    color: 'text-green-700',
    iconBg: 'bg-green-100',
    link: '/themas/de-polder',
  },
  {
    id: 4,
    title: 'De Wereld van de Gouden Eeuw',
    description: 'Wereldhandel, Rijkdom & Schaduwkanten',
    icon: Ship,
    color: 'text-amber-700',
    iconBg: 'bg-amber-100',
    link: '/themas/handel-en-gouden-eeuw',
  },
  {
    id: 5,
    title: 'De Wereld van de Zuiderzee naar IJsselmeer',
    description: 'Ecologie, Transformatie & Visserij',
    icon: ShieldAlert,
    color: 'text-teal-700',
    iconBg: 'bg-teal-100',
    link: '/themas/zuiderzee-naar-ijsselmeer',
  },
  {
    id: 6,
    title: 'De Wereld van Kasteel Radboud',
    description: 'Macht, Recht & Middeleeuwen',
    icon: Castle,
    color: 'text-rose-800',
    iconBg: 'bg-rose-100',
    link: '/themas/kasteel-radboud',
  },
  {
    id: 7,
    title: 'De Wereld van de burgers & stoommachines',
    description: 'Innovatie, Techniek & Sociale Kwestie',
    icon: TrainFront,
    color: 'text-slate-700',
    iconBg: 'bg-slate-100',
    link: '/themas/burgers-stoommachines',
  },
  {
    id: 8,
    title: 'De Wereld van de Tuin van Europa',
    description: 'Seed Valley, Genetica & Voedseltoekomst',
    icon: Sprout,
    color: 'text-lime-700',
    iconBg: 'bg-lime-100',
    link: '/themas/voedsel-en-groei',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section – Welkom in de West-Friese Wereld */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex items-center justify-center">
          {/* Achtergrondfoto */}
          <Image
            src="/welkom-west-friese-wereld-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Donkere overlay voor leesbare witte tekst */}
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Welkom in De West-Friese Wereld
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Een ontdekkingsreis voor leerlingen, dwars door de geschiedenis, natuur en toekomst van onze regio.
            </p>
          </div>
        </section>

        {/* Het Model Section */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-deep-water-blue text-center mb-6 sm:mb-8 md:mb-12">
              Het Model
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px_1fr] gap-4 sm:gap-6 md:gap-6 items-stretch">
              {/* 70/30 Rule Card –zelfde hoogte als foto, uitgelijnd met groen blok */}
              <div className="bg-gradient-to-br from-deep-water-blue to-blue-800 rounded-lg p-8 text-white shadow-lg flex flex-col items-center text-center min-h-[420px] md:min-h-0 md:h-full">
                <div className="flex items-center justify-center min-h-[4rem] mb-4">
                  <Percent className="h-8 w-8 mr-3 flex-shrink-0" aria-hidden />
                  <h3 className="font-serif text-2xl font-bold leading-tight">70/30 regel</h3>
                </div>
                <div className="space-y-4 flex-1 w-full max-w-sm">
                  <div className="bg-white/10 rounded-lg p-4 min-h-[5.5rem] flex flex-col justify-center">
                    <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                      <span className="font-semibold">70%</span>
                      <span className="text-sm">Nationale SLO standaarden</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-[70%]"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 min-h-[5.5rem] flex flex-col justify-center">
                    <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                      <span className="font-semibold">30%</span>
                      <span className="text-sm">Regionale West-Friesland context</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-polder-green w-[30%]"></div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white/90 text-sm max-w-sm">
                  Een gebalanceerde aanpak die nationale leerdoelen combineert met lokale betekenisgeving.
                </p>
              </div>

              {/* 70/30 methode in actie – foto tussen de twee blokken, gelijke ruimte links en rechts */}
              <div className="w-full max-w-[280px] mx-auto md:max-w-none md:w-[280px] h-[420px] md:h-full md:min-h-[420px] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/70-30-methode-in-actie.png"
                  alt="De 70/30 methode in actie: leerlingen en begeleider in het veld met West-Friese molen op de achtergrond. Verbind kerndoelen direct met de West-Friese klei en de lokale cultuur."
                  width={280}
                  height={420}
                  className="w-full h-full rounded-xl object-cover"
                  sizes="(max-width: 768px) 280px, 280px"
                  priority={false}
                />
              </div>

              {/* Biesta's Framework Card –zelfde hoogte als foto, uitgelijnd met blauw blok */}
              <div className="bg-gradient-to-br from-polder-green to-green-700 rounded-lg p-8 text-white shadow-lg flex flex-col items-center text-center min-h-[420px] md:min-h-0 md:h-full">
                <div className="flex items-center justify-center min-h-[4rem] mb-4">
                  <Target className="h-8 w-8 mr-3 flex-shrink-0" aria-hidden />
                  <h3 className="font-serif text-2xl font-bold leading-tight">Biesta's Triple Qualification</h3>
                </div>
                <div className="space-y-4 flex-1 w-full max-w-sm">
                  <div className="bg-white/10 rounded-lg p-4 min-h-[5.5rem] flex flex-col justify-center">
                    <h4 className="font-semibold mb-2">Qualification</h4>
                    <p className="text-sm text-white/90">Kennis en vaardigheden verwerven</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 min-h-[5.5rem] flex flex-col justify-center">
                    <h4 className="font-semibold mb-2">Socialization</h4>
                    <p className="text-sm text-white/90">Deelnemen aan culturele tradities</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 min-h-[5.5rem] flex flex-col justify-center">
                    <h4 className="font-semibold mb-2">Subjectification</h4>
                    <p className="text-sm text-white/90">Eigen identiteit ontwikkelen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-fase structuur – scrollytelling */}
        <section className="bg-gray-50">
          <ScrollytellingPhases />
        </section>

        {/* Ontdek onze 8 Werelden Section */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-deep-water-blue text-center mb-3 sm:mb-4">
              Ontdek onze 8 Werelden
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-700 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4">
              Ontdek de acht werelden die de kern vormen van ons curriculum, elk met aandacht voor verschillende leeftijdsgroepen.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {THEMES.map((theme) => {
                const Icon = theme.icon
                return (
                  <Link
                    key={theme.id}
                    href={theme.link}
                    className="group"
                  >
                    <Card className={`h-full border border-gray-200 ${theme.iconBg} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-polder-green cursor-pointer`}>
                      <CardHeader>
                        <div className={`mb-4 flex items-center justify-center ${theme.iconBg} rounded-full p-4 w-fit mx-auto group-hover:scale-110 transition-transform`}>
                          <Icon className={`h-10 w-10 ${theme.color}`} />
                        </div>
                        <CardTitle className="font-serif text-xl font-bold text-deep-water-blue mb-2 group-hover:text-polder-green transition-colors">
                          {theme.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 mb-4 min-h-[60px]">
                          {theme.description}
                        </CardDescription>
                        <div className="flex items-center text-deep-water-blue font-medium group-hover:text-polder-green transition-colors">
                          <span>Lees meer</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
