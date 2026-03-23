import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Construyendo juntos un futuro mejor
            </h1>
            <p className="text-xl opacity-90">
             Con décadas de servicio público y un historial comprobado de resultados,
            me comprometo a crear oportunidades para todos los ciudadanos y a fortalecer nuestra comunidad.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Únete a nuestro movimiento
              </button>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg border-2 border-white hover:bg-blue-600 transition-colors">
                Donar
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://i.pinimg.com/736x/da/59/64/da59647bd31dd524c09991cb89949804.jpg"
                alt="Candidate portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
