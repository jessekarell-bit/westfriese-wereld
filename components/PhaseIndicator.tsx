'use client'

interface PhaseIndicatorProps {
  currentPhase?: number
}

const phases = [
  { name: 'Doel', description: 'Leerdoel bepalen' },
  { name: 'Narratief', description: 'Verhaal introduceren' },
  { name: 'Activering', description: 'Ervaring opdoen' },
  { name: 'Concretisering', description: 'Verdiepen en onderzoeken' },
  { name: 'Afsluiting', description: 'Reflecteren en presenteren' },
]

export default function PhaseIndicator({ currentPhase }: PhaseIndicatorProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
      <h3 className="font-serif text-xl font-bold text-deep-water-blue mb-6">
        5-Fase Structuur
      </h3>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {phases.map((phase, index) => {
          const isActive = currentPhase !== undefined ? index <= currentPhase : true
          return (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="flex items-center w-full mb-2">
                {/* Connector line */}
                {index > 0 && (
                  <div 
                    className={`flex-1 h-0.5 ${
                      isActive ? 'bg-polder-green' : 'bg-gray-300'
                    } transition-colors`}
                  />
                )}
                {/* Phase circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    isActive
                      ? 'bg-polder-green text-white shadow-md scale-110'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index + 1}
                </div>
                {index < phases.length - 1 && (
                  <div 
                    className={`flex-1 h-0.5 ${
                      isActive ? 'bg-polder-green' : 'bg-gray-300'
                    } transition-colors`}
                  />
                )}
              </div>
              <div className="text-center">
                <p className={`font-semibold text-sm ${
                  isActive ? 'text-deep-water-blue' : 'text-gray-500'
                }`}>
                  {phase.name}
                </p>
                <p className="text-xs text-gray-600 mt-1 hidden md:block">
                  {phase.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
