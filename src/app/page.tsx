"use client";

import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonial } from "@/components/Testimonial";
import { ValueProposition } from "@/components/ValueProposition";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professionelle Dienstleistungen für alle Ihre Bedürfnisse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Fahrdienste"
              icon="🚗"
              benefits={[
                "Sicherer Transport",
                "Lokale Ortskenntnis",
                "Wettbewerbsfähige Preise",
                "Pünktlich & zuverlässig",
              ]}
              ctaText="Jetzt buchen"
              ctaAction={scrollToContact}
              gradient="bg-gradient-to-br from-blue-50 to-blue-100"
            />
            
            <ServiceCard
              title="Abschleppdienst & Pannenhilfe"
              icon="🚛"
              benefits={[
                "Schnelle Reaktionszeit",
                "Starthilfe & Batterieservice",
                "Aufsperrdienst",
                "Kraftstofflieferung",
              ]}
              ctaText="Notfall anrufen"
              ctaAction={scrollToContact}
              isEmergency={true}
              gradient="bg-gradient-to-br from-red-50 to-orange-100"
            />
            
            <ServiceCard
              title="Professionelle Reinigung"
              icon="✨"
              benefits={[
                "Wohn- & Geschäftsreinigung",
                "Umweltfreundliche Produkte",
                "Flexible Terminplanung",
                "Gründlich & zuverlässig",
              ]}
              ctaText="Angebot anfordern"
              ctaAction={scrollToContact}
              gradient="bg-gradient-to-br from-green-50 to-emerald-100"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Warum uns wählen?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Was uns auszeichnet und warum Kunden uns vertrauen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueProposition
              icon="👨‍👩‍👧‍👦"
              title="Familienbetrieb"
              description="Seit über 10 Jahren in Familienbesitz - persönlicher Service und langfristige Beziehungen zu unseren Kunden."
              index={0}
            />
            <ValueProposition
              icon="⭐"
              title="Jahrelange Erfahrung"
              description="Über 15 Jahre kombinierte Erfahrung in allen drei Servicebereichen - wir wissen, was wir tun."
              index={1}
            />
            <ValueProposition
              icon="📜"
              title="Lizenziert & Versichert"
              description="Vollständig lizenziert und umfassend versichert für Ihren Schutz und unseres."
              index={2}
            />
            <ValueProposition
              icon="💰"
              title="Wettbewerbsfähige Preise"
              description="Faire und transparente Preise ohne versteckte Kosten - Qualität, die sich lohnt."
              index={3}
            />
            <ValueProposition
              icon="✅"
              title="Zufriedenheitsgarantie"
              description="Ihre Zufriedenheit ist unsere Priorität. Wir stehen hinter unserer Arbeit."
              index={4}
            />
            <ValueProposition
              icon="🕐"
              title="24/7 Notfallbereitschaft"
              description="Rund um die Uhr verfügbar für Abschleppdienste und Notfälle - wir sind da, wenn Sie uns brauchen."
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Echte Bewertungen von zufriedenen Kunden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Testimonial
              name="Max Mustermann"
              service="Fahrdienst"
              rating={5}
              text="Ausgezeichneter Service! Pünktlich, freundlich und sehr professionell. Kann ich nur weiterempfehlen."
              index={0}
            />
            <Testimonial
              name="Maria Schmidt"
              service="Reinigungsservice"
              rating={5}
              text="Unsere Wohnung sieht wieder wie neu aus! Sehr gründlich und zuverlässig. Wir buchen regelmäßig."
              index={1}
            />
            <Testimonial
              name="Thomas Weber"
              service="Abschleppdienst"
              rating={5}
              text="Schnelle Hilfe bei meiner Panne mitten in der Nacht. Sehr kompetent und fair im Preis. Vielen Dank!"
              index={2}
            />
            <Testimonial
              name="Anna Müller"
              service="Reinigungsservice"
              rating={5}
              text="Der beste Reinigungsservice, den wir je hatten. Umweltfreundlich, gründlich und immer pünktlich."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unser Einzugsgebiet
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir sind stolz darauf, Metro City und die umliegenden Gebiete zu
              bedienen
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Metro City und Umgebung
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Hauptgebiete:</p>
                  <ul className="space-y-1 text-left">
                    <li>• Metro City Zentrum</li>
                    <li>• Nordstadt</li>
                    <li>• Südstadt</li>
                    <li>• Ostviertel</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Umgebung:</p>
                  <ul className="space-y-1 text-left">
                    <li>• Umkreis bis 30 km</li>
                    <li>• Autobahnabschnitte</li>
                    <li>• Vororte</li>
                    <li>• Nachbarstädte</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600 italic">
                {/* TODO: Replace with actual coverage areas */}
                Fragen Sie nach, ob wir auch Ihr Gebiet abdecken!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kontaktieren Sie uns
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir freuen uns auf Ihre Anfrage
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Direkter Kontakt
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">
                      Telefon
                    </p>
                    <a
                      href="tel:+495551234567"
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">
                      E-Mail
                    </p>
                    <a
                      href="mailto:contact@localservices.example"
                      className="text-xl text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      contact@localservices.example
                    </a>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-sm font-semibold text-gray-500 mb-2">
                      Adresse
                    </p>
                    <p className="text-gray-700">
                      {/* TODO: Replace with actual business address */}
                      Musterstraße 123<br />
                      12345 Metro City<br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Quick Contact */}
              <div className="lg:hidden bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Schnellkontakt
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+495551234567"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    📞 Anrufen
                  </a>
                  <a
                    href="sms:+495551234567"
                    className="bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    💬 SMS senden
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
