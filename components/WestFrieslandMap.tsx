'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Location {
  id: string
  name: string
  top: number // Percentage from top
  left: number // Percentage from left
  partner: string
  theme: string
}

const locations: Location[] = [
  {
    id: 'medemblik',
    name: 'Medemblik',
    top: 28,
    left: 68,
    partner: 'Kasteel Radboud & Stoommachine',
    theme: 'Kasteel Radboud & Burgers en Stoommachines',
  },
  {
    id: 'enkhuizen',
    name: 'Enkhuizen',
    top: 50,
    left: 93,
    partner: 'Zuiderzeemuseum & Seed Valley',
    theme: 'Van Zuiderzee naar IJsselmeer',
  },
  {
    id: 'hoorn',
    name: 'Hoorn',
    top: 75,
    left: 63,
    partner: 'Westfries Museum / Halve Maen',
    theme: 'De Gouden Eeuw',
  },
  {
    id: 'middenmeer',
    name: 'Middenmeer',
    top: 15,
    left: 52,
    partner: 'Agriport & Energie',
    theme: 'De Polder',
  },
  {
    id: 'heerhugowaard',
    name: 'Heerhugowaard/Langedijk',
    top: 62,
    left: 32,
    partner: 'Poldermuseum',
    theme: 'De Polder & Tuinbouw',
  },
]

export default function WestFrieslandMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 sm:p-6 md:p-8 border-2 border-deep-water-blue/20 shadow-lg">
        {/* Map Container */}
        <div className="relative w-full">
          {/* West-Friesland Image */}
          <Image
            src="/images/westfriesland.png"
            alt="Kaart West-Friesland"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl"
            priority
          />

          {/* Location Pins - Positioned absolutely over the image */}
          {locations.map((location) => {
            const isHovered = hoveredLocation === location.id

            return (
              <div
                key={location.id}
                className="absolute"
                style={{
                  top: `${location.top}%`,
                  left: `${location.left}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Pulsing ring effect */}
                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-12 h-12 rounded-full border-2 border-indigo-600/50 animate-ping" />
                    <div className="absolute w-8 h-8 rounded-full border-2 border-indigo-600/30 animate-ping" style={{ animationDelay: '0.5s' }} />
                  </div>
                )}

                {/* Pin shadow */}
                <div
                  className="absolute w-4 h-4 rounded-full bg-black/20 pointer-events-none"
                  style={{
                    left: '50%',
                    top: 'calc(50% + 2px)',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Pin button */}
                <button
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className="relative w-5 h-5 rounded-full bg-indigo-600 border-2 border-white cursor-pointer transition-all duration-200 hover:scale-125 shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  aria-label={`${location.name} - ${location.partner}`}
                >
                  {/* Pulse animation */}
                  <div className="absolute inset-0 rounded-full bg-indigo-600 animate-pulse opacity-50" />
                  
                  {/* Pin center dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </button>

                {/* Tooltip */}
                {isHovered && (
                  <div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-20"
                    style={{ minWidth: '240px' }}
                  >
                    {/* Tooltip content */}
                    <div className="bg-deep-water-blue text-white rounded-lg p-4 shadow-xl">
                      {/* Tooltip arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                        <div className="w-3 h-3 bg-deep-water-blue transform rotate-45" />
                      </div>
                      
                      {/* Location name */}
                      <h4 className="font-bold text-sm mb-1 text-white">
                        {location.name}
                      </h4>
                      
                      {/* Partner name */}
                      <p className="text-xs text-gray-200 mb-1">
                        {location.partner}
                      </p>
                      
                      {/* Theme */}
                      <p className="text-xs text-gray-400 italic">
                        {location.theme}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-indigo-600 border-2 border-white shadow-sm animate-pulse"></div>
            <span className="text-gray-700">Excursie locatie</span>
          </div>
        </div>

        {/* Info text */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 italic">
            Hover over de pins voor meer informatie over excursiepartners
          </p>
        </div>
      </div>
    </div>
  )
}
