'use client'

import { useState, useEffect } from 'react'
import { Target, BookOpen, MapPin, Ship, Users, ChevronLeft, ChevronRight } from 'lucide-react'

const PHASES = [
  {
    id: 'doel',
    title: 'Doel',
    description: 'Leerdoel bepalen',
    icon: Target,
    longDescription: 'De leerling weet wat hij gaat leren en waarom het relevant is voor zijn wereld.',
  },
  {
    id: 'narratief',
    title: 'Narratief',
    description: 'Verhaal introduceren',
    icon: BookOpen,
    longDescription: 'Een verhaal of context brengt het onderwerp tot leven en verbindt met de belevingswereld.',
  },
  {
    id: 'activering',
    title: 'Activering / Excursie',
    description: 'Ervaring opdoen',
    icon: MapPin,
    longDescription: 'Leren door te doen: excursies, bezoeken en ervaringen in de echte wereld.',
  },
  {
    id: 'concretisering',
    title: 'Concretisering / Onderzoek',
    description: 'Verdiepen en onderzoeken',
    icon: Ship,
    longDescription: 'Verdieping door onderzoek, vragen stellen en verbanden leggen.',
  },
  {
    id: 'afsluiting',
    title: 'Afsluiting',
    description: 'Reflecteren en presenteren',
    icon: Users,
    longDescription: 'Terugblik, presentatie aan anderen en betekenis geven aan wat geleerd is.',
  },
] as const

export default function ScrollytellingPhases() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(
      typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }, [])

  const goTo = (index: number) => {
    setActiveIndex((Math.max(0, Math.min(index, PHASES.length - 1))))
  }

  const phase = PHASES[activeIndex]
  const Icon = phase.icon

  return (
    <section
      className="relative py-10 md:py-14"
      aria-label="5-fase structuur van het curriculum"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-deep-water-blue text-center mb-2">
          5-fase structuur
        </h2>
        <p className="text-center text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
          De leerling doorloopt vloeiend de fasen van het model: van doel tot afsluiting.
        </p>

        {/* Carousel container */}
        <div className="relative">
          {/* Slide */}
          <article
            className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm min-h-[220px] md:min-h-[200px] flex flex-col"
            aria-live="polite"
            aria-label={`Fase ${activeIndex + 1} van ${PHASES.length}: ${phase.title}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start flex-1">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-deep-water-blue/10 text-deep-water-blue">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brick-red text-white text-sm font-bold">
                    {activeIndex + 1}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-deep-water-blue">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-brick-red/90 font-medium text-sm sm:text-base mb-1">{phase.description}</p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{phase.longDescription}</p>
              </div>
            </div>
          </article>

          {/* Navigation: pijlen */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="p-2 rounded-full border border-gray-300 bg-white text-deep-water-blue shadow-sm hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none transition-colors focus:outline-none focus:ring-2 focus:ring-deep-water-blue focus:ring-offset-2"
              aria-label="Vorige fase"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Fase navigatie">
              {PHASES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Ga naar fase ${index + 1}: ${PHASES[index].title}`}
                  onClick={() => goTo(index)}
                  className={`
                    w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-deep-water-blue focus:ring-offset-2
                    ${activeIndex === index
                      ? 'bg-deep-water-blue scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }
                    ${reduceMotion ? '' : 'duration-200'}
                  `}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === PHASES.length - 1}
              className="p-2 rounded-full border border-gray-300 bg-white text-deep-water-blue shadow-sm hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none transition-colors focus:outline-none focus:ring-2 focus:ring-deep-water-blue focus:ring-offset-2"
              aria-label="Volgende fase"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Tekstuele indicator */}
          <p className="text-center text-gray-500 text-xs sm:text-sm mt-2">
            Fase {activeIndex + 1} van {PHASES.length}
          </p>
        </div>
      </div>
    </section>
  )
}
