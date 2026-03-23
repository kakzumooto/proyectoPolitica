import { X, Facebook, Instagram } from 'lucide-react';

export function SocialFeed() {
  const socialPosts = [
    {
      platform: 'twitter',
      icon: X,
      content: 'Acabamos de concluir una increíble asamblea ciudadana en el Distrito 3. Gracias a todos los que asistieron para compartir sus inquietudes sobre la financiación de la educación. ¡Sus voces están siendo escuchadas! #ConstruyendoNuestroFuturo',
      time: '2 hours ago',
      color: 'bg-blue-400'
    },
    {
      platform: 'facebook',
      icon: Facebook,
      content: 'Es un honor recibir hoy el respaldo del Sindicato de Maestros. Juntos, invertiremos en nuestras escuelas y garantizaremos que todos los niños tengan acceso a una educación de calidad.',
      time: '5 hours ago',
      color: 'bg-blue-600'
    },
    {
      platform: 'instagram',
      icon: Instagram,
      content: 'Esta mañana me reuní con pequeños empresarios locales. Su resiliencia e innovación me inspiran cada día. ¡Necesitamos políticas que apoyen a los emprendedores!📸',
      time: '1 day ago',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      platform: 'twitter',
      icon: X,
      content: 'La atención médica es un derecho, no un privilegio. Nuestra nueva propuesta ampliará la cobertura a más de 50 000 residentes sin seguro médico. Para más información, visite nuestro sitio web.',
      time: '2 days ago',
      color: 'bg-blue-400'
    },
    {
      platform: 'facebook',
      icon: Facebook,
      content: 'Agradecemos enormemente a los increíbles voluntarios que participaron hoy en nuestra jornada de limpieza comunitaria. ¡Juntos retiramos más de 2 toneladas de basura de nuestros parques!',
      time: '3 days ago',
      color: 'bg-blue-600'
    },
    {
      platform: 'instagram',
      icon: Instagram,
      content: 'Entre bastidores: Preparativos para el debate de mañana sobre política climática. El futuro de nuestro planeta depende de las acciones que tomemos hoy. 🌍',
      time: '4 days ago',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mantente conectado</h2>
          <p className="text-xl text-gray-600">
            Sigue nuestra campaña en las redes sociales para estar al día de las últimas novedades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${post.color} w-10 h-10 rounded-full flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 capitalize">{post.platform}</div>
                    <div className="text-sm text-gray-500">{post.time}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{post.content}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-blue-400 text-white p-4 rounded-full hover:bg-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <X className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 rounded-full hover:opacity-90 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}