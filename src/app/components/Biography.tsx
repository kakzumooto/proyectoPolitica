import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';

export function Biography() {
  const milestones = [
    { year: '2015', title: 'Miembro del Concejo Municipal', description: 'Elegido para representar al Distrito 5' },
    { year: '2018', title: 'teniente de alcalde', description: 'Lideró iniciativas de reforma educativa.' },
    { year: '2020', title: 'Representante Estatal', description: 'Acceso a la atención sanitaria defendido' },
    { year: '2024', title: 'Candidato gubernamental', description: 'Postulándose para gobernador' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759368483989-fd583688966e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc0MjMxMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Government building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Acerca de nuestro candidato</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Servidor público de toda la vida, dedicado a mejorar la vida de los ciudadanos.
              Con experiencia en organización comunitaria y reforma de políticas, nuestro candidato aporta
              experiencia práctica y un compromiso genuino con el cambio positivo.
            </p>

            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900">Hitos profesionales</h3>
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-blue-700">{milestone.year}</span>
                      <span className="font-semibold text-gray-900">{milestone.title}</span>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
