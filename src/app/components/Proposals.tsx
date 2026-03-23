import { Shield, DollarSign, GraduationCap, Heart, Home, Leaf } from 'lucide-react';

export function Proposals() {
  const proposals = [
    {
      icon: Shield,
      title: 'Seguridad Pública',
      description: 'Invertir en la vigilancia policial comunitaria, programas de prevención del delito y apoyo a los servicios de emergencia para mantener la seguridad en nuestros barrios.',
      link: '#'
    },
    {
      icon: DollarSign,
      title: 'Crecimiento económico',
      description: 'Crear empleo, apoyar a las pequeñas empresas y construir una economía próspera que funcione para todos.',
      link: '#'
    },
    {
      icon: GraduationCap,
      title: 'Educación de calidad',
      description: 'Garantizar que todos los niños tengan acceso a escuelas excelentes, instalaciones modernas y los recursos que necesitan para tener éxito.',
      link: '#'
    },
    {
      icon: Heart,
      title: 'Acceso a la atención médica',
      description: 'Lograr que la atención médica sea asequible y accesible para todas las familias, con especial atención a la atención preventiva y la salud mental.',
      link: '#'
    },
    {
      icon: Home,
      title: 'Vivienda asequible',
      description: 'Abordar la crisis de la vivienda con políticas inteligentes que creen opciones asequibles para las familias trabajadoras.',
      link: '#'
    },
    {
      icon: Leaf,
      title: 'Protección ambiental',
      description: 'Luchar contra el cambio climático, proteger nuestros recursos naturales y construir un futuro sostenible para las generaciones venideras.',
      link: '#'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra visión y propuestas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planes integrales para abordar los desafíos que enfrenta nuestra comunidad y construir un futuro mejor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.map((proposal, index) => {
            const Icon = proposal.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{proposal.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{proposal.description}</p>
                <a
                  href={proposal.link}
                  className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                >
                  Leer más
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
