'use client'

import { useEffect, useRef, useState } from 'react'
import { Target, BookOpen, MapPin, Ship, Users } from 'lucide-react'

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
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [visible, setVisible] = useState<Set<number>>(new Set())
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(
      typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setVisible(new Set(PHASES.map((_, i) => i)))
      return
    }

    const observers = sectionRefs.current.map((el, index) => {
      if (!el) return null
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible((prev) => new Set([...prev, index]))
            }
          })
        },
        {
          rootMargin: '0px 0px -15% 0px',
          threshold: 0.1,
        }
      )
      observer.observe(el)
      return observer
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [reduceMotion])

  return (
    <section
      className="relative py-16 md:py-24"
      aria-label="5-fase structuur van het curriculum"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-deep-water-blue text-center mb-4">
          5-fase structuur
        </h2>
        <p className="text-center text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto">
          De leerling doorloopt vloeiend de fasen van het model: van doel tot afsluiting.
        </p>

        <div className="space-y-8 md:space-y-12">
          {PHASES.map((phase, index) => {
            const Icon = phase.icon
            const isVisible = visible.has(index)
            const isReducedMotion = reduceMotion

            return (
              <article
                key={phase.id}
                ref={(el) => {
                  sectionRefs.current[index] = el
                }}
                className={`
                  scrollytelling-phase
                  relative flex flex-col md:flex-row gap-6 md:gap-8 items-start
                  rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm
                  transition-all duration-700 ease-out
                  ${isReducedMotion ? 'opacity-100' : ''}
                  ${!isReducedMotion && !isVisible ? 'scrollytelling-phase--hidden' : ''}
                  ${!isReducedMotion && isVisible ? 'scrollytelling-phase--visible' : ''}
                `}
                style={
                  isReducedMotion
                    ? undefined
                    : {
                        // Fallback voor browsers zonder de class
                        transitionProperty: 'transform, opacity',
                        willChange: isVisible ? 'auto' : 'transform, opacity',
                      }
                }
              >
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-deep-water-blue/10 text-deep-water-blue">
                  <Icon className="w-7 h-7" aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brick-red text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-deep-water-blue">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-brick-red/90 font-medium mb-2">{phase.description}</p>
                  <p className="text-gray-700 leading-relaxed">{phase.longDescription}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
