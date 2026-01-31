import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SKOWFStrategicPartner from '@/components/SKOWFStrategicPartner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Landmark, 
  Sprout, 
  GraduationCap, 
  FileDown,
  Calendar,
  Building2,
  Droplets,
  Users,
  Factory,
  Leaf
} from 'lucide-react'

export default function PartnersPage() {
  const culturePartners = [
    'Zuiderzeemuseum',
    'Kasteel Radboud',
    'Huis van Hilde',
    'Westfries Museum',
    'Stedelijk Museum Alkmaar',
  ]

  const businessSectors = [
    { name: 'Seed Valley', icon: Sprout },
    { name: 'Waterbeheer', icon: Droplets },
    { name: 'Agritech', icon: Leaf },
    { name: 'Historische Verenigingen', icon: Users },
    { name: 'Energie & Duurzaamheid', icon: Factory },
    { name: 'Regionale Overheid', icon: Building2 },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* SKOWF Strategic Partner Section */}
        <SKOWFStrategicPartner />

        {/* Hero Section */}
        <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-deep-water-blue mb-6 leading-tight">
              Bouw mee aan De West-Friese Wereld
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Wij geloven dat onderwijs niet stopt bij de muren van de school. Samen met musea, bedrijfsleven en overheid maken we de regio tot één groot klaslokaal.
            </p>
          </div>
        </section>

        {/* De Drie Pijlers Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-water-blue text-center mb-16">
              De Gouden Driehoek
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mx-auto">
              {/* Card 1: Cultuur & Erfgoed */}
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-gradient-to-br from-brick-red to-terracotta rounded-lg p-3 mb-4">
                      <Landmark className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl">Cultuur & erfgoed</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed text-center">
                    Voor musea en erfgoedlocaties. Wij verankeren uw collectie en verhalen in de doorlopende leerlijn van West-Friese kinderen.
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-600 mb-2 text-center">Zoals:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {culturePartners.map((partner) => (
                        <Badge key={partner} variant="secondary" className="text-xs">
                          {partner}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Innovatie & Bedrijfsleven */}
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-gradient-to-br from-polder-green to-green-700 rounded-lg p-3 mb-4">
                      <Sprout className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl">Innovatie & bedrijfsleven</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed text-center">
                    Voor de koplopers van de regio. Help mee de werknemers van de toekomst te inspireren in de thema's Agritech, Water en Duurzaamheid.
                  </p>
                  
                  <Button variant="default" className="w-full mt-4">
                    Word Kennispartner
                  </Button>
                </CardContent>
              </Card>

              {/* Card 3: De Pilot Scholen */}
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-gradient-to-br from-deep-water-blue to-blue-700 rounded-lg p-3 mb-4">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl">De pilot scholen</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed text-center">
                    Voor scholen met lef. Durft uw team het aan om de SLO-doelen te behalen via een contextrijk curriculum? Meld u aan als kwartiermaker.
                  </p>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Meld u aan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Logo Cloud Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-water-blue text-center mb-4">
              Wij zoeken verbinding met...
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Samen bouwen we aan een netwerk dat de regio tot een levend klaslokaal maakt.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mx-auto">
              {businessSectors.map((sector) => {
                const Icon = sector.icon
                return (
                  <div
                    key={sector.name}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-polder-green transition-colors group"
                  >
                    {/* Placeholder logo area */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-50 transition-colors">
                      <Icon className="h-8 w-8 text-gray-400 group-hover:text-polder-green transition-colors" />
                    </div>
                    
                    {/* Sector name */}
                    <p className="text-sm font-medium text-gray-700 text-center group-hover:text-deep-water-blue transition-colors">
                      {sector.name}
                    </p>
                    
                    {/* "Uw logo hier?" hint */}
                    <p className="text-xs text-gray-400 mt-2 italic opacity-0 group-hover:opacity-100 transition-opacity">
                      Uw logo hier?
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-water-blue mb-6">
              Wilt u partner worden of meer informatie?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op of download onze visie-brochure om meer te leren over De West-Friese Wereld.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              {/* Primary CTA: Download Brochure */}
              <Button size="lg" variant="default" className="group">
                <FileDown className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Download de Visie-Brochure (PDF)
              </Button>
              
              {/* Secondary CTA: Contact */}
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Calendar className="h-5 w-5 mr-2" />
                  Plan een kennismaking
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
