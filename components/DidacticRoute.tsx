'use client'

import { DidacticPhase, ColorScheme } from '@/src/types/theme'
import { Card, CardContent } from '@/components/ui/card'

interface DidacticRouteProps {
  phases: DidacticPhase[]
  title: string
  focus: string
  colorScheme: ColorScheme
}

export function DidacticRoute({ phases, title, focus, colorScheme }: DidacticRouteProps) {
  return (
    <div className="mt-8 sm:mt-12">
      <div className="mb-4 sm:mb-6 px-2 sm:px-0">
        <h3 className={`font-serif text-xl sm:text-2xl font-bold ${colorScheme.text} mb-2`}>
          De didactische route
        </h3>
        <p className={`text-base sm:text-lg font-medium ${colorScheme.text.replace('-700', '-800')} mb-1`}>
          {title}
        </p>
        <p className="text-xs sm:text-sm text-gray-600">
          Focus: {focus}
        </p>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {phases.map((item, index) => {
          const Icon = item.icon
          return (
            <Card 
              key={index} 
              className={`border-l-4 ${colorScheme.border}`}
            >
              <CardContent className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Phase number badge */}
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${colorScheme.activeBg} text-white flex items-center justify-center text-base sm:text-lg font-bold shadow-lg`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${colorScheme.bg} ${colorScheme.text} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <h4 className={`font-semibold ${colorScheme.text} text-base sm:text-lg`}>
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
  )
}
