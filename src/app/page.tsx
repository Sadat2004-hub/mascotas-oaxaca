import Link from 'next/link';
import Image from 'next/image';
import { municipios, categories } from '@/data/db';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2000"
            alt="Mascotas felices en Oaxaca"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-gray-50/100"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 text-balance tracking-tight">
            El cuidado ideal para tu <span className="text-indigo-400">mejor amigo</span> en Oaxaca.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
            Encuentra veterinarias, guarderías y estéticas calificadas en todo el estado.
          </p>

          <div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 gap-2 border-r border-gray-100">
              <span className="text-gray-400">📍</span>
              <select className="flex-1 bg-transparent border-none text-gray-700 focus:outline-none">
                <option>Oaxaca Centro</option>
                <option>Xoxocotlán</option>
                <option>Santa Lucía</option>
              </select>
            </div>
            <div className="flex-[2] flex items-center px-4 gap-2">
              <span className="text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="¿Qué servicio buscas? (ej. Veterinarias)"
                className="flex-1 bg-transparent border-none text-gray-700 focus:outline-none"
              />
            </div>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Categorías principales</h2>
            <p className="text-gray-500">¿Qué necesita tu mascota hoy?</p>
          </div>
          <Link href="/oaxaca-centro/veterinarias" className="text-indigo-600 font-semibold hover:underline">Ver todas</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/oaxaca-centro/${cat.slug}`}
              className="group flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/10 transition-all text-center"
            >
              <span className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors uppercase text-xs tracking-widest">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Cities */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Presencia en todo el estado</h2>
            <p className="text-gray-400">Expandiendo nuestro directorio a más municipios para estar siempre cerca.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {municipios.slice(0, 3).map((muni) => (
              <Link
                key={muni.id}
                href={`/${muni.slug}`}
                className="relative h-64 overflow-hidden rounded-3xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-2xl font-bold mb-1">{muni.name}</h3>
                  <p className="text-gray-300 text-sm">Ver negocios disponibles →</p>
                </div>
                {/* Mock image - would use dynamic ones usually */}
                <div className="w-full h-full bg-indigo-900/50 absolute inset-0"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
