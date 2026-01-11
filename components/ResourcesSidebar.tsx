import { BookOpen, MapPin } from 'lucide-react'
import { Resource } from '@/src/data/curriculum'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MemberGate from '@/components/MemberGate'

interface ResourcesSidebarProps {
  resources?: Resource[]
  themeName: string
}

export default function ResourcesSidebar({ resources = [], themeName }: ResourcesSidebarProps) {
  const boeken = resources.filter(r => r.type === 'boek')
  const excursies = resources.filter(r => r.type === 'excursie')

  return (
    <div className="space-y-6 sticky top-24">
      {/* Rijke Teksten Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <BookOpen className="h-5 w-5 text-polder-green mr-2" />
            Rijke Teksten
          </CardTitle>
        </CardHeader>
        <CardContent>
          <MemberGate>
            {boeken.length > 0 ? (
              <ul className="space-y-3">
                {boeken.map((resource, index) => (
                  <li key={index} className="border-l-2 border-polder-green pl-3">
                    <p className="font-medium text-gray-900 text-sm">{resource.title}</p>
                    {resource.description && (
                      <p className="text-xs text-gray-600 mt-1">{resource.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm italic">
                Nog geen boeken toegevoegd voor dit thema.
              </p>
            )}
          </MemberGate>
        </CardContent>
      </Card>

      {/* Eropuit Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <MapPin className="h-5 w-5 text-brick-red mr-2" />
            Eropuit
          </CardTitle>
        </CardHeader>
        <CardContent>
          {excursies.length > 0 ? (
            <ul className="space-y-3">
              {excursies.map((resource, index) => (
                <li key={index} className="border-l-2 border-brick-red pl-3">
                  <p className="font-medium text-gray-900 text-sm">{resource.title}</p>
                  {resource.description && (
                    <p className="text-xs text-gray-600 mt-1">{resource.description}</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm italic">
              Nog geen excursies toegevoegd voor dit thema.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
