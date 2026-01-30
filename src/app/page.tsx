import Link from 'next/link';
import Image from 'next/image';
import { municipios } from '@/data/db';
import { categories } from '@/data/categories';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

const IconWrapper = ({ name, ...props }: { name: string } & LucideProps) => {
  // @ts-ignore
  const Icon = LucideIcons[name] || LucideIcons.HelpCircle;
  return <Icon {...props} />;
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white mb-8 animate-fade-in shadow-xl">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">El directorio #1 para mascotas en Oaxaca</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 text-balance tracking-tighter leading-[0.9]">
            Todo para tu <span className="text-indigo-400">mejor amigo</span> en un solo lugar.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Desde veterinarias 24/7 hasta los mejores cafés pet-friendly. El cuidado que merecen, en tu municipio.
          </p>

          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl p-3 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row gap-2 border border-white/20">
            <div className="flex-1 flex items-center px-6 gap-3 border-r border-gray-100">
              <LucideIcons.MapPin className="text-indigo-600 w-5 h-5" />
              <select className="flex-1 bg-transparent border-none text-gray-700 font-semibold focus:outline-none appearance-none">
                {municipios.map(m => (
                  <option key={m.id} value={m.slug}>{m.name}</option>
                ))}
              </select>
            </div>
            <div className="flex-[2] flex items-center px-6 gap-3">
              <LucideIcons.Search className="text-indigo-600 w-5 h-5" />
              <input
                type="text"
                placeholder="¿Qué servicio buscas hoy?"
                className="flex-1 bg-transparent border-none text-gray-700 font-medium placeholder:text-gray-400 focus:outline-none"
              />
            </div>
            <button className="bg-indigo-600 text-white px-10 py-5 rounded-[2rem] font-black hover:bg-indigo-700 transition-all shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
              Explorar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="container mx-auto px-4 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-[2.5rem] p-10 border border-gray-100/50 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform">
                  <IconWrapper name={cat.icon} size={32} strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight uppercase">{cat.title}</h3>

                <ul className="space-y-3 mb-10">
                  {cat.subcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        href={`/oaxaca-centro/${sub.slug}`}
                        className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors group/link"
                      >
                        <span className="w-1.5 h-1.5 bg-indigo-200 rounded-full group-hover/link:bg-indigo-600 group-hover/link:scale-150 transition-all"></span>
                        <span className="text-sm font-semibold">{sub.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/oaxaca-centro/${cat.slug}`}
                  className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-xl text-indigo-600 font-black text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all group-hover:shadow-lg"
                >
                  Ver Todo <LucideIcons.ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500 rounded-full blur-[120px]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                Únete a la comunidad pet-friendly más grande de Oaxaca.
              </h2>
              <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
                Ayudamos a miles de dueños a conectar con los mejores profesionales. Registra tu negocio y llega a más clientes hoy mismo.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-black hover:bg-gray-100 transition-all">
                  Registrar mi Negocio
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all">
                  Saber más
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Negocios', value: '500+' },
                { label: 'Municipios', value: '15+' },
                { label: 'Visitas Mes', value: '10k+' },
                { label: 'Reseñas', value: '2k+' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-lg">
                  <div className="text-4xl font-black text-indigo-400 mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Municipality - Santa Lucía Placeholder */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Explora por Municipio</h2>
            <p className="text-xl text-gray-500 font-light">Encuentra servicios cerca de ti sin importar en qué parte de Oaxaca te encuentres.</p>
          </div>
          <Link href="/explorar" className="text-indigo-600 font-black flex items-center gap-2 hover:underline">
            Ver todos los municipios <LucideIcons.ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {municipios.slice(0, 3).map((muni, i) => (
            <Link
              key={muni.id}
              href={`/${muni.slug}`}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
              <div className="absolute inset-0 bg-indigo-900/40 mix-blend-overlay group-hover:bg-indigo-900/20 transition-all"></div>
              <div className="absolute bottom-10 left-10 z-20">
                <div className="bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 inline-block">
                  Oaxaca
                </div>
                <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{muni.name}</h3>
                <p className="text-white/60 font-medium group-hover:text-white transition-colors flex items-center gap-2">
                  Explorar servicios <LucideIcons.ArrowRight size={16} />
                </p>
              </div>
              <div className="w-full h-full bg-gray-800 scale-105 group-hover:scale-100 transition-transform duration-700"></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
