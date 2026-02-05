import { Construction } from 'lucide-react'

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-amber-100 p-6">
            <Construction className="h-16 w-16 text-amber-600" />
          </div>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-deep-water-blue mb-3">
          De pagina is tijdelijk in onderhoud
        </h1>
        <p className="text-gray-600 mb-8">
          We werken aan verbeteringen. Probeer het later opnieuw.
        </p>
        <p className="text-sm text-gray-500">
          Voor vragen kunt u contact opnemen met de school.
        </p>
      </div>
    </div>
  )
}
