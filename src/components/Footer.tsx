"use client";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Lokale Services
            </h3>
            <p className="text-sm">
              Ihr vertrauensvoller Partner für Fahrdienste, Abschleppdienst und
              professionelle Reinigung in Metro City und Umgebung.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="tel:+495551234567"
                  className="hover:text-orange-400 transition-colors"
                >
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@localservices.example"
                  className="hover:text-orange-400 transition-colors"
                >
                  contact@localservices.example
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Fahrdienste
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Abschleppdienst
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Reinigung
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Lokale Services. Alle Rechte
            vorbehalten. | Familienbetrieb seit 2010
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Lizenziert & Versichert | Metro City, Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}

