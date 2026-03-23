import { Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const navigation = {
    main: [
      { name: 'Acerca de', href: '#' },
      { name: 'Propuestas', href: '#' },
      { name: 'Eventos', href: '#' },
      { name: 'Noticias', href: '#' },
      { name: 'Voluntario', href: '#' },
      { name: 'Donar', href: '#' },
    ],
    legal: [
      { name: 'política de privacidad', href: '#' },
      { name: 'Términos de servicio', href: '#' },
      { name: 'Accesibilidad', href: '#' },
      { name: 'Contacto', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About Column */}
          <div>
            <h3 className="font-bold text-xl mb-4">Sede de campaña</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>123 Avenida de la Democracia<br />ciudad capital, ST 12345</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>info@candidatecampaign.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-xl mb-4">Mantente informado</h3>
            <p className="text-gray-300 mb-4">
             Suscríbase a nuestro boletín informativo para recibir actualizaciones sobre la campaña y los eventos.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              />
              <button
                type="submit"
                className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {navigation.legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 text-sm text-gray-400">
            <p>© Comité de Campaña 2026. Todos los derechos reservados.</p>
            <p className="mt-2">
              Financiado por el Comité de Campaña. No autorizado por ningún candidato ni comité de campaña.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
