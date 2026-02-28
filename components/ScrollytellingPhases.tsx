'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Target, BookOpen, MapPin, Ship, Users, ChevronLeft, ChevronRight } from 'lucide-react'

const SWIPE_THRESHOLD = 50
const MAX_DRAG_OFFSET = 120

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
    setActiveIndex((Math.max(0, Math.min(index, PHASES.length - 1))))
  }, [])

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
    if (delta < -SWIPE_THRESHOLD && activeIndex < PHASES.length - 1) {
      goTo(activeIndex + 1)
    } else if (delta > SWIPE_THRESHOLD && activeIndex > 0) {
      goTo(activeIndex - 1)
    }
    setDragOffset(0)
    setIsDragging(false)
  }, [activeIndex, goTo])

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
    transform: `translateX(calc(-${activeIndex * 20}% + ${dragOffset}px))`,
    transition: reduceMotion ? 'none' : (dragOffset === 0 ? 'transform 0.3s ease-out' : 'none'),
    touchAction: 'pan-y',
  }

  return (
    <section
      className="relative py-6 md:py-10"
      aria-label="5-fase structuur van het curriculum"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-deep-water-blue text-center mb-1">
          5-fase structuur
        </h2>
        <p className="text-center text-gray-600 mb-4 md:mb-5 max-w-2xl mx-auto text-sm md:text-base">
          De leerling doorloopt vloeiend de fasen van het model: van doel tot afsluiting.
        </p>

        {/* Viewport: smallere kaarten, minder witruimte */}
        <div className="relative select-none touch-pan-y overflow-hidden max-w-md mx-auto">
          <div
            className="flex cursor-grab active:cursor-grabbing w-[500%]"
            style={trackStyle}
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
            {PHASES.map((phase, index) => {
              const PhaseIcon = phase.icon
              return (
                <article
                  key={phase.id}
                  className="flex-shrink-0 w-1/5 min-w-0"
                  aria-hidden={activeIndex !== index}
                  aria-label={`Fase ${index + 1} van ${PHASES.length}: ${phase.title}`}
                >
                  <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm min-h-[260px] md:min-h-[300px] flex flex-col h-full">
                    {/* Icoon centraal bovenaan – 10% groter */}
                    <div className="flex justify-center mb-3">
                      <div className="flex items-center justify-center w-12 h-12 sm:w-[3.25rem] sm:h-[3.25rem] rounded-full bg-deep-water-blue/10 text-deep-water-blue">
                        <PhaseIcon className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" aria-hidden />
                      </div>
                    </div>
                    {/* Fasetitel gecentreerd onder het icoon */}
                    <div className="flex flex-col items-center text-center mb-3">
                      <div className="flex items-center justify-center gap-2.5 min-h-[2.25rem] sm:min-h-[2.5rem]">
                        <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brick-red text-white text-sm font-bold">
                          {index + 1}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-deep-water-blue leading-tight min-w-0 break-words">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-brick-red/90 font-medium text-base mt-0.5">{phase.description}</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg flex-1 text-center">
                      {phase.longDescription}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Navigation: pijlen */}
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
          <p className="text-center text-gray-500 text-xs sm:text-sm mt-1">
            Fase {activeIndex + 1} van {PHASES.length}
          </p>
        </div>
      </div>
    </section>
  )
}
