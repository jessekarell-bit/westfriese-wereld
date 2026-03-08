'use client'

import { DidacticPhase, ColorScheme } from '@/src/types/theme'
import ScrollytellingPhases, { type PhaseItem } from '@/components/ScrollytellingPhases'

interface DidacticRouteProps {
  phases: DidacticPhase[]
  title: string
  focus: string
  colorScheme: ColorScheme
}

export function DidacticRoute({ phases, title, focus }: DidacticRouteProps) {
  const phaseItems: PhaseItem[] = phases.map((p) => ({
    title: p.fase,
    description: p.fase,
    longDescription: p.beschrijving,
    iconId: p.iconId,
  }))

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
      <ScrollytellingPhases
        phases={phaseItems}
        noSection
        compact
        className="px-0"
      />
    </div>
  )
}
