export default function Footer() {
  return (
    <footer className="bg-deep-water-blue text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="font-serif text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Voor vragen over het curriculum kunt u contact opnemen via de school.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-200 font-medium mb-2 italic">
            "Ontdek de wereld in je eigen regio."
          </p>
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} De West-Friese Wereld. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
