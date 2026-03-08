'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import {
  LucideIcon,
  Target,
  BookOpen,
  MapPin,
  Ship,
  Users,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Megaphone,
  Hammer,
  Shield,
  Sprout,
  Search,
  Gavel,
  Cog,
  Fish,
  Scale,
} from 'lucide-react'

const SWIPE_THRESHOLD = 50
const MAX_DRAG_OFFSET = 120

/** Icon-map voor serialiseerbare iconId (Server → Client); geëxporteerd voor gebruik in themapagina's */
export const PHASE_ICON_MAP: Record<string, LucideIcon> = {
  Target,
  BookOpen,
  MapPin,
  Ship,
  Users,
  Lightbulb,
  Megaphone,
  Hammer,
  Shield,
  Sprout,
  Search,
  Gavel,
  Cog,
  Fish,
  Scale,
}

/** Fase-item voor het carousel; iconId is serialiseerbaar voor Server Components */
export interface PhaseItem {
  id?: string
  title: string
  description: string
  longDescription: string
  /** Naam van Lucide-icoon (bv. 'Target') – wordt in client opgelost */
  iconId: string
}

const DEFAULT_PHASES: PhaseItem[] = [
  { id: 'doel', title: 'Doel', description: 'Leerdoel bepalen', longDescription: 'De leerling weet wat hij gaat leren en waarom het relevant is voor zijn wereld.', iconId: 'Target' },
  { id: 'narratief', title: 'Narratief', description: 'Verhaal introduceren', longDescription: 'Een verhaal of context brengt het onderwerp tot leven en verbindt met de belevingswereld.', iconId: 'BookOpen' },
  { id: 'activering', title: 'Activering / Excursie', description: 'Ervaring opdoen', longDescription: 'Leren door te doen: excursies, bezoeken en ervaringen in de echte wereld.', iconId: 'MapPin' },
  { id: 'concretisering', title: 'Concretisering / Onderzoek', description: 'Verdiepen en onderzoeken', longDescription: 'Verdieping door onderzoek, vragen stellen en verbanden leggen.', iconId: 'Ship' },
  { id: 'afsluiting', title: 'Afsluiting', description: 'Reflecteren en presenteren', longDescription: 'Terugblik, presentatie aan anderen en betekenis geven aan wat geleerd is.', iconId: 'Users' },
]

export interface ScrollytellingPhasesProps {
  /** Eigen fasen; bij weglating worden de standaard 5 fasen gebruikt */
  phases?: PhaseItem[]
  /** Sectietitel (bijv. "5-fase structuur") */
  title?: string
  /** Ondertitel / toelichting */
  subtitle?: string
  /** Compacte kaarten (minder min-height), voor sidebar/themablokken */
  compact?: boolean
  /** Sectie class (bijv. geen padding als binnen een bestaande sectie) */
  className?: string
  /** Of de sectie-wrapper (section) wordt weggelaten (bij inbedding in DidacticRoute) */
  noSection?: boolean
}

export default function ScrollytellingPhases({
  phases: customPhases,
  title = '5-fase structuur',
  subtitle = 'De leerling doorloopt vloeiend de fasen van het model: van doel tot afsluiting.',
  compact = false,
  className = '',
  noSection = false,
}: ScrollytellingPhasesProps = {}) {
  const phases = customPhases ?? DEFAULT_PHASES
  const count = phases.length
  const percentPerSlide = count > 0 ? 100 / count : 100

  const [activeIndex, setActiveIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const startYRef = useRef(0)

  useEffect(() => {
    setReduceMotion(
      typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }, [])

  const goTo = useCallback((index: number) => {
    setActiveIndex((Math.max(0, Math.min(index, count - 1))))
  }, [count])

  const handlePointerDown = useCallback((clientX: number, clientY?: number) => {
    startXRef.current = clientX
    startYRef.current = clientY ?? 0
  }, [])

  const handlePointerMove = useCallback((clientX: number) => {
    const delta = clientX - startXRef.current
    const capped = Math.max(-MAX_DRAG_OFFSET, Math.min(MAX_DRAG_OFFSET, delta))
    setDragOffset(capped)
  }, [])

  const handlePointerUp = useCallback((clientX: number) => {
    const delta = clientX - startXRef.current
    if (delta < -SWIPE_THRESHOLD && activeIndex < count - 1) {
      goTo(activeIndex + 1)
    } else if (delta > SWIPE_THRESHOLD && activeIndex > 0) {
      goTo(activeIndex - 1)
    }
    setDragOffset(0)
    setIsDragging(false)
  }, [activeIndex, count, goTo])

  useEffect(() => {
    if (!isDragging) return
    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX)
    const onMouseUp = (e: MouseEvent) => {
      handlePointerUp(e.clientX)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [isDragging, handlePointerMove, handlePointerUp])

  const trackStyle: React.CSSProperties = {
    transform: `translateX(calc(-${activeIndex * percentPerSlide}% + ${dragOffset}px))`,
    transition: reduceMotion ? 'none' : (dragOffset === 0 ? 'transform 0.3s ease-out' : 'none'),
    touchAction: 'pan-y',
  }

  const content = (
    <div className={`w-full min-w-0 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {!noSection && (
        <>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-deep-water-blue text-center mb-1">
            {title}
          </h2>
          <p className="text-center text-gray-600 mb-4 md:mb-5 max-w-2xl mx-auto text-sm md:text-base">
            {subtitle}
          </p>
        </>
      )}

      <div className="relative select-none touch-pan-y overflow-hidden w-full min-w-0 max-w-md mx-auto">
        <div
          className="flex cursor-grab active:cursor-grabbing"
          style={{
            ...trackStyle,
            width: `${count * 100}%`,
          }}
          onTouchStart={(e) => {
            handlePointerDown(e.touches[0].clientX, e.touches[0].clientY)
          }}
          onTouchMove={(e) => {
            const touch = e.touches[0]
            const deltaX = Math.abs(touch.clientX - startXRef.current)
            const deltaY = Math.abs(touch.clientY - startYRef.current)
            if (deltaX > deltaY) e.preventDefault()
            handlePointerMove(touch.clientX)
          }}
          onTouchEnd={(e) => {
            handlePointerUp(e.changedTouches[0].clientX)
          }}
          onMouseDown={(e) => {
            handlePointerDown(e.clientX, e.clientY)
            setIsDragging(true)
          }}
        >
          {phases.map((phase, index) => {
            const PhaseIcon = PHASE_ICON_MAP[phase.iconId] ?? Target
            return (
              <article
                key={phase.id ?? index}
                className="flex-shrink-0 min-w-0 w-full"
                style={{ width: `${percentPerSlide}%` }}
                aria-hidden={activeIndex !== index}
                aria-label={`Fase ${index + 1} van ${count}: ${phase.title}`}
              >
                <div
                  className={`rounded-xl border border-gray-200 bg-white p-3 sm:p-4 md:p-5 shadow-sm flex flex-col h-full min-w-0 overflow-hidden ${
                    compact ? 'min-h-[180px] sm:min-h-[200px]' : 'min-h-[260px] md:min-h-[300px]'
                  }`}
                >
                  <div className="flex justify-center mb-2 sm:mb-3 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-deep-water-blue/10 text-deep-water-blue">
                      <PhaseIcon className="w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0" aria-hidden />
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center mb-2 sm:mb-3 flex-shrink-0 min-w-0">
                    <div className="flex items-center justify-center gap-2 min-h-[2rem] sm:min-h-[2.25rem] flex-wrap">
                      <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brick-red text-white text-xs sm:text-sm font-bold">
                        {index + 1}
                      </span>
                      <h3 className="font-serif text-base sm:text-xl font-bold text-deep-water-blue leading-tight min-w-0 break-words">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-brick-red/90 font-medium text-sm sm:text-base mt-0.5 break-words">{phase.description}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base flex-1 text-center min-w-0 break-words">
                    {phase.longDescription}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="p-2 rounded-full border border-gray-300 bg-white text-deep-water-blue shadow-sm hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none transition-colors focus:outline-none focus:ring-2 focus:ring-deep-water-blue focus:ring-offset-2"
            aria-label="Vorige fase"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Fase navigatie">
            {phases.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Ga naar fase ${index + 1}: ${phases[index].title}`}
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
            disabled={activeIndex === count - 1}
            className="p-2 rounded-full border border-gray-300 bg-white text-deep-water-blue shadow-sm hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none transition-colors focus:outline-none focus:ring-2 focus:ring-deep-water-blue focus:ring-offset-2"
            aria-label="Volgende fase"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <p className="text-center text-gray-500 text-xs sm:text-sm mt-1">
          Fase {activeIndex + 1} van {count}
        </p>
      </div>
    </div>
  )

  if (noSection) return content

  return (
    <section
      className="relative py-6 md:py-10"
      aria-label={`${count}-fase structuur van het curriculum`}
    >
      {content}
    </section>
  )
}
