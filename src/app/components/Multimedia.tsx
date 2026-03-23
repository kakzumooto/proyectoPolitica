import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Multimedia() {
  const videos = [
    {
      id: 1,
      title: 'Discurso de lanzamiento de campaña',
      thumbnail: 'https://images.unsplash.com/photo-1760883344496-080500945e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwZW9wbGUlMjBkaXZlcnNpdHl8ZW58MXx8fHwxNzc0MjMxMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '12:45'
    },
    {
      id: 2,
      title: 'Aspectos destacados de la reunión del ayuntamiento',
      thumbnail: 'https://images.unsplash.com/photo-1760883344497-4e1cecf89b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb21tdW5pdHklMjBwZW9wbGUlMjBkaXZlcnNpdHl8ZW58MXx8fHwxNzc0MjMxMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '8:30'
    },
    {
      id: 3,
      title: 'Nuestra visión para la educación',
      thumbnail: 'https://images.unsplash.com/photo-1662728132385-11fee9b3db9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc0MjMxMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '6:15'
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ruta de campaña</h2>
          <p className="text-xl text-gray-300">
           Vea nuestros últimos discursos, asambleas públicas y eventos de campaña.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden mb-4">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 px-3 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <h3 className="font-semibold text-lg">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
