'use client'

import { DidacticPhase, ColorScheme } from '@/src/types/theme'
import { Card, CardContent } from '@/components/ui/card'

/** Vaste kleuren voor 5-fase structuur (zelfde als homepagina) voor herkenning op alle pagina's */
const FIVE_PHASE_CARD_STYLE = {
  iconBg: 'bg-deep-water-blue/10',
  iconText: 'text-deep-water-blue',
  numberBg: 'bg-brick-red',
  titleText: 'text-deep-water-blue',
  bodyText: 'text-gray-700',
  cardBorder: 'border border-gray-200 rounded-xl shadow-sm',
}

interface DidacticRouteProps {
  phases: DidacticPhase[]
  title: string
  focus: string
  colorScheme: ColorScheme
}

export function DidacticRoute({ phases, title, focus }: DidacticRouteProps) {
  return (
    <div className="mt-8 sm:mt-12">
      <div className="mb-4 sm:mb-6 px-2 sm:px-0">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-deep-water-blue mb-2">
          De didactische route
        </h3>
        <p className="text-base sm:text-lg font-medium text-deep-water-blue mb-1">
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
              className={FIVE_PHASE_CARD_STYLE.cardBorder}
            >
              <CardContent className="p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${FIVE_PHASE_CARD_STYLE.iconBg} ${FIVE_PHASE_CARD_STYLE.iconText} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full ${FIVE_PHASE_CARD_STYLE.numberBg} text-white flex items-center justify-center text-sm font-bold`}>
                      {index + 1}
                    </div>
                    <h4 className={`font-serif font-bold ${FIVE_PHASE_CARD_STYLE.titleText} text-base sm:text-lg`}>
                      {item.fase}
                    </h4>
                  </div>
                  <p className={`text-sm sm:text-base ${FIVE_PHASE_CARD_STYLE.bodyText} leading-relaxed flex-1`}>
                    {item.beschrijving}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
