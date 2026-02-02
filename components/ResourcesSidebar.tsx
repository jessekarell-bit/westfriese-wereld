import { BookOpen, MapPin } from 'lucide-react'
import { Resource } from '@/src/data/curriculum'
import { themeColorSchemes } from '@/src/data/theme-config'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MemberGate from '@/components/MemberGate'

interface ResourcesSidebarProps {
  resources?: Resource[]
  themeName: string
  themeId?: string
}

const themeColorIdMap: Record<string, string> = {
  'gouden-eeuw': 'handel-en-gouden-eeuw',
  'zuiderzee-ijsselmeer': 'zuiderzee-naar-ijsselmeer',
  'tuin-van-europa': 'voedsel-en-groei',
}

export default function ResourcesSidebar({ resources = [], themeName, themeId }: ResourcesSidebarProps) {
  const boeken = resources.filter(r => r.type === 'boek')
  const excursies = resources.filter(r => r.type === 'excursie')
  const configKey = themeId ? (themeColorIdMap[themeId] ?? themeId) : null
  const colorScheme = configKey ? themeColorSchemes[configKey] : null
  const iconColor = colorScheme?.text ?? 'text-deep-water-blue'
  const listBorder = colorScheme ? colorScheme.border : 'border-l-2 border-polder-green'

  return (
    <div className="space-y-6 sticky top-24">
      {/* Rijke Teksten Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <BookOpen className={`h-10 w-10 ${iconColor} mr-2`} />
            Rijke Teksten
          </CardTitle>
        </CardHeader>
        <CardContent>
          <MemberGate>
            {boeken.length > 0 ? (
              <ul className="space-y-3">
                {boeken.map((resource, index) => (
                  <li key={index} className={`${listBorder} pl-3`}>
                    <p className="font-medium text-gray-900 text-sm">{resource.title}</p>
                    {resource.description && (
                      <p className="text-xs text-gray-600 mt-1">{resource.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm italic">
                Nog geen boeken toegevoegd voor deze wereld.
              </p>
            )}
          </MemberGate>
        </CardContent>
      </Card>

      {/* Eropuit Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <MapPin className={`h-10 w-10 ${iconColor} mr-2`} />
            Eropuit
          </CardTitle>
        </CardHeader>
        <CardContent>
          {excursies.length > 0 ? (
            <ul className="space-y-3">
              {excursies.map((resource, index) => (
                <li key={index} className={`${listBorder} pl-3`}>
                  <p className="font-medium text-gray-900 text-sm">{resource.title}</p>
                  {resource.description && (
                    <p className="text-xs text-gray-600 mt-1">{resource.description}</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm italic">
              Nog geen excursies toegevoegd voor deze wereld.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
