import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
  BookOpen as BookOpenIcon,
  Percent,
  ArrowRight
} from 'lucide-react'

// THEMES array with 8 themes in de juiste volgorde
const THEMES = [
  {
    id: 1,
    title: 'De Wereld van de West-Friese Omringdijk',
    description: 'Strijd tegen het water & Klimaat',
    icon: Waves,
    color: 'text-cyan-700',
    link: '/themas/westfriese-omringdijk',
  },
  {
    id: 2,
    title: 'De Wereld van Grieken & Romeinen',
    description: 'Grensland, Handel & Cultuur',
    icon: MessageCircle,
    color: 'text-stone-700',
    link: '/themas/grieken-romeinen',
  },
  {
    id: 3,
    title: 'De Wereld van de Polder',
    description: 'Maakbaarheid, Wiskunde & Ruimtelijke Ordening',
    icon: LayoutGrid,
    color: 'text-green-700',
    link: '/themas/de-polder',
  },
  {
    id: 4,
    title: 'De Wereld van de Gouden Eeuw',
    description: 'Wereldhandel, Rijkdom & Schaduwkanten',
    icon: Ship,
    color: 'text-amber-700',
    link: '/themas/handel-en-gouden-eeuw',
  },
  {
    id: 5,
    title: 'De Wereld van de Zuiderzee naar IJsselmeer',
    description: 'Ecologie, Transformatie & Visserij',
    icon: ShieldAlert,
    color: 'text-cyan-700',
    link: '/themas/zuiderzee-naar-ijsselmeer',
  },
  {
    id: 6,
    title: 'De Wereld van Kasteel Radboud',
    description: 'Macht, Recht & Middeleeuwen',
    icon: Castle,
    color: 'text-rose-800',
    link: '/themas/kasteel-radboud',
  },
  {
    id: 7,
    title: 'De Wereld van de burgers & stoommachines',
    description: 'Innovatie, Techniek & Sociale Kwestie',
    icon: TrainFront,
    color: 'text-slate-700',
    link: '/themas/burgers-stoommachines',
  },
  {
    id: 8,
    title: 'De Wereld van de Tuin van Europa',
    description: 'Seed Valley, Genetica & Voedseltoekomst',
    icon: Sprout,
    color: 'text-lime-700',
    link: '/themas/voedsel-en-groei',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Subtle globe element in background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-full border-4 border-deep-water-blue/20" style={{
              background: 'radial-gradient(circle, transparent 30%, rgba(30, 58, 95, 0.05) 30%, rgba(30, 58, 95, 0.05) 35%, transparent 35%, transparent 65%, rgba(30, 58, 95, 0.05) 65%, rgba(30, 58, 95, 0.05) 70%, transparent 70%)',
            }} />
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center px-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-deep-water-blue mb-4 sm:mb-6 md:mb-8 leading-tight">
              Welkom in De West-Friese Wereld
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
              {/* 70/30 Rule Card */}
              <div className="bg-gradient-to-br from-deep-water-blue to-blue-800 rounded-lg p-8 text-white shadow-lg">
                <div className="flex items-center mb-4">
                  <Percent className="h-8 w-8 mr-3" />
                  <h3 className="font-serif text-2xl font-bold">70/30 regel</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">70%</span>
                      <span className="text-sm">Nationale SLO standaarden</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-[70%]"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">30%</span>
                      <span className="text-sm">Regionale West-Friesland context</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-polder-green w-[30%]"></div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white/90 text-sm">
                  Een gebalanceerde aanpak die nationale leerdoelen combineert met lokale betekenisgeving.
                </p>
              </div>

              {/* Biesta's Framework Card */}
              <div className="bg-gradient-to-br from-polder-green to-green-700 rounded-lg p-8 text-white shadow-lg">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 mr-3" />
                  <h3 className="font-serif text-2xl font-bold">Biesta's Triple Qualification</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Qualification</h4>
                    <p className="text-sm text-white/90">Kennis en vaardigheden verwerven</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Socialization</h4>
                    <p className="text-sm text-white/90">Deelnemen aan culturele tradities</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Subjectification</h4>
                    <p className="text-sm text-white/90">Eigen identiteit ontwikkelen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5-Phase Structure */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <BookOpenIcon className="h-8 w-8 text-brick-red mr-3" />
                <h3 className="font-serif text-2xl font-bold text-deep-water-blue">5-fase structuur</h3>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { phase: 'Doel', description: 'Leerdoel bepalen' },
                  { phase: 'Narratief', description: 'Verhaal introduceren' },
                  { phase: 'Activering/Excursie', description: 'Ervaring opdoen' },
                  { phase: 'Concretisering/Onderzoek', description: 'Verdiepen en onderzoeken' },
                  { phase: 'Afsluiting', description: 'Reflecteren en presenteren' },
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-brick-red font-bold text-lg shadow-md">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-deep-water-blue mb-1">{step.phase}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                    <Card className="h-full border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-polder-green cursor-pointer">
                      <CardHeader>
                        <div className={`mb-4 flex items-center justify-center ${theme.color}`}>
                          <Icon className="h-12 w-12 group-hover:scale-110 transition-transform" />
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
