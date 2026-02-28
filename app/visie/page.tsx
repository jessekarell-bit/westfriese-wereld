import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Percent,
  BookOpen,
  Landmark,
  Users,
  Compass,
  Target,
  Sparkles,
  MapPin,
  Hammer,
  Megaphone,
  Lightbulb,
  Globe2,
} from 'lucide-react'

const steps = [
  {
    title: 'Doelbepaling',
    description: 'Koppeling aan kerndoelen en leerlijnen.',
    icon: Target,
  },
  {
    title: 'Narratieve Inbedding',
    description: 'Een pakkend verhaal of mythe als haakje.',
    icon: BookOpen,
  },
  {
    title: 'Activering',
    description: 'De school uit (excursie) of expert in de klas.',
    icon: MapPin,
  },
  {
    title: 'Concretisering',
    description: 'Onderzoeken, ontwerpen en maken.',
    icon: Hammer,
  },
  {
    title: 'Authentieke Afsluiting',
    description: 'Presenteren aan een echt publiek.',
    icon: Megaphone,
  },
]

export default function VisiePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-polder-green bg-polder-green/10 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              Strategische visie
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-deep-water-blue leading-tight">
              Onderwijs met de voeten in de klei en de blik op de wereld
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Een strategische verbinding tussen de landelijke kerndoelen (SLO 2025) en de kracht van de West-Friese regio.
            </p>
          </div>
        </section>

        {/* Kernfilosofie */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-polder-green" />
              <h2 className="font-serif text-3xl font-bold text-deep-water-blue">De Kernfilosofie</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Regio als fundament</CardTitle>
                  <CardDescription>
                    Het onderwijs ziet de regio niet als extraatje, maar als basis.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed">
                  De school is geen eiland, maar een democratische oefenplaats. Wij geloven dat leerlingen effectiever leren
                  wanneer zij de wereld kunnen doorgronden vanuit een herkenbare context. West-Friesland fungeert als een
                  &apos;levend laboratorium&apos; waarin abstracte doelen concreet worden.
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Contextgedreven leren</CardTitle>
                  <CardDescription>
                    Thematisch onderwijs dat de leefwereld van leerlingen centraal zet.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed">
                  Door lokale verhalen, plekken en partners te verbinden aan nationale kerndoelen creëren we betekenisvol
                  onderwijs. Leerlingen ervaren eigenaarschap, ontwikkelen burgerschap en bouwen aan een stevig moreel kompas.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 70/30 Model */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center gap-3">
              <Percent className="h-6 w-6 text-deep-water-blue" />
              <h2 className="font-serif text-3xl font-bold text-deep-water-blue">Het 70/30 model</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Verdeling van onderwijstijd</CardTitle>
                  <CardDescription>Een balans tussen landelijke basis en regionale ruimte.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm font-semibold text-deep-water-blue mb-2">
                        <span>70% Landelijke Basis</span>
                        <span>SLO-kerndoelen</span>
                      </div>
                      <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
                        <div className="h-full w-[70%] bg-deep-water-blue" />
                      </div>
                      <p className="text-gray-700 mt-2">
                        De verplichte kern van de SLO-kerndoelen: rekenen, taal, burgerschap en basisvaardigheden.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <div className="flex justify-between text-sm font-semibold text-polder-green mb-2">
                        <span>30% Regionale Ruimte</span>
                        <span>West-Friese identiteit</span>
                      </div>
                      <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
                        <div className="h-full w-[30%] bg-polder-green" />
                      </div>
                      <p className="text-gray-700 mt-2">
                        Vrije ruimte voor schooleigen accenten en lokale werelden, ingezet voor diepgaand thematisch werk en regionale verankering.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-deep-water-blue to-polder-green text-white shadow-lg">
                  <Globe2 className="h-10 w-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-deep-water-blue mb-3">Verankerd en verbonden</h3>
                <p className="text-gray-700 leading-relaxed">
                  Regionale identiteit geeft betekenis aan landelijke kerndoelen. Leerlingen ervaren dat hun leefomgeving ertoe doet.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pedagogisch Fundament */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center gap-3">
              <Compass className="h-6 w-6 text-brick-red" />
              <h2 className="font-serif text-3xl font-bold text-deep-water-blue">Het Pedagogisch Fundament</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-polder-green/20">
                <CardHeader className="pb-3 pt-8">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-polder-green to-green-700 text-white shadow-lg">
                      <Landmark className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">Qualification</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed text-center">
                  Kennis en vaardigheden verwerven
                </CardContent>
              </Card>

              <Card className="border-2 border-polder-green/20">
                <CardHeader className="pb-3 pt-8">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-polder-green to-green-700 text-white shadow-lg">
                      <Users className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">Socialization</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed text-center">
                  Deelnemen aan culturele tradities
                </CardContent>
              </Card>

              <Card className="border-2 border-polder-green/20">
                <CardHeader className="pb-3 pt-8">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-polder-green to-green-700 text-white shadow-lg">
                      <Compass className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">Subjectification</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed text-center">
                  Eigen identiteit ontwikkelen
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Didactische Methodiek */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-deep-water-blue" />
              <h2 className="font-serif text-3xl font-bold text-deep-water-blue">De Didactische Methodiek</h2>
            </div>

            <Card>
              <CardContent className="py-8">
                <div className="grid md:grid-cols-5 gap-6">
                  {steps.map((step, index) => {
                    const StepIcon = step.icon
                    return (
                      <div key={step.title} className="flex flex-col items-center justify-center text-center gap-3 pt-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-deep-water-blue text-white shadow-lg">
                          <StepIcon className="h-8 w-8" />
                        </div>
                        <div className="text-sm font-semibold text-deep-water-blue">Stap {index + 1}</div>
                        <div>
                          <h4 className="font-serif text-lg font-bold text-deep-water-blue">{step.title}</h4>
                          <p className="text-gray-700 text-sm leading-relaxed mt-1">{step.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Onze Belofte */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-deep-water-blue bg-deep-water-blue/10 px-4 py-2 rounded-full">
              <Globe2 className="h-4 w-4" />
              Onze Belofte
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-water-blue">
              Wij transformeren de regio tot een leer- en leefgebied
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Onze leerlingen ontwikkelen zich van verwonderde kleuters tot kritische wereldburgers, geworteld in hun eigen omgeving.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
