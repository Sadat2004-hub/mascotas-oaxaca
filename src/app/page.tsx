import Link from 'next/link';
import Image from 'next/image';
import { municipios, businesses } from '@/data/db';
import { categories } from '@/data/categories';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

const IconWrapper = ({ name, ...props }: { name: string } & LucideProps) => {
  // @ts-ignore
  const Icon = LucideIcons[name] || LucideIcons.HelpCircle;
  return <Icon {...props} />;
};

export default function Home() {
  const featuredBusinesses = businesses.slice(0, 3);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-principal.jpg"
            alt="Mascotas felices en Oaxaca"
            fill
            className="object-cover brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white/100"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white mb-8 animate-fade-in shadow-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold uppercase tracking-wider">Comunidad Pet-Friendly Oaxaca</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 text-balance tracking-tighter leading-[0.9] drop-shadow-2xl">
            ¡El mejor cuidado para tu <span className="text-orange-400 italic">mejor amigo!</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
            Encuentra veterinarias, estéticas y lugares increíbles para disfrutar con tu mascota en todo Oaxaca.
          </p>

          <div className="max-w-4xl mx-auto bg-white p-3 rounded-[2.5rem] shadow-2xl shadow-orange-200/50 flex flex-col md:flex-row gap-2 border border-orange-50">
            <div className="flex-1 flex items-center px-6 gap-3 border-r border-slate-100">
              <LucideIcons.MapPin className="text-orange-500 w-5 h-5" />
              <select className="flex-1 bg-transparent border-none text-slate-700 font-bold focus:outline-none appearance-none cursor-pointer">
                {municipios.map(m => (
                  <option key={m.id} value={m.slug}>{m.name}</option>
                ))}
              </select>
            </div>
            <div className="flex-[2] flex items-center px-6 gap-3">
              <LucideIcons.Search className="text-orange-500 w-5 h-5" />
              <input
                type="text"
                placeholder="¿Qué servicio buscas hoy?"
                className="flex-1 bg-transparent border-none text-slate-700 font-bold placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <button className="bg-orange-500 text-white px-10 py-5 rounded-[2rem] font-black hover:bg-orange-600 transition-all shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
              Buscar Ahora
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
              className="group bg-white rounded-[2.5rem] p-10 border border-orange-100 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-200 group-hover:rotate-6 transition-transform">
                  <IconWrapper name={cat.icon} size={32} strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight uppercase">{cat.title}</h3>

                <ul className="space-y-3 mb-10">
                  {cat.subcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        href={`/oaxaca-centro/${sub.slug}`}
                        className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors group/link"
                      >
                        <span className="w-1.5 h-1.5 bg-orange-200 rounded-full group-hover/link:bg-orange-500 group-hover/link:scale-150 transition-all"></span>
                        <span className="text-sm font-bold">{sub.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/oaxaca-centro/${cat.slug}`}
                  className="inline-flex items-center gap-2 bg-orange-50 px-6 py-3 rounded-xl text-orange-600 font-black text-xs uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all group-hover:shadow-lg"
                >
                  Explorar Todo <LucideIcons.ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Stats with friendly colors */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-orange-500 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-orange-200">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200 rounded-full blur-[120px]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter text-balance">
                ¡Haz que tu negocio sea el lugar favorito!
              </h2>
              <p className="text-xl text-orange-50 mb-12 font-medium leading-relaxed">
                Únete a la mayor red de servicios para mascotas en Oaxaca. Conecta con miles de dueños que buscan lo mejor para sus peluditos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/sumar-negocio"
                  className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-black hover:bg-orange-50 transition-all shadow-xl shadow-orange-700/20 text-center"
                >
                  Registrar mi Negocio
                </Link>
                <Link
                  href="/contacto"
                  className="bg-orange-600 text-white border border-orange-400 px-10 py-5 rounded-2xl font-black hover:bg-orange-700 transition-all text-center"
                >
                  Saber más
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Negocios', value: '500+' },
                { label: 'Municipios', value: '15+' },
                { label: 'Visitas Mes', value: '10k+' },
                { label: 'Reseñas', value: '2k+' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 border border-white/20 p-8 rounded-[2rem] backdrop-blur-lg text-center">
                  <div className="text-4xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-sm font-bold text-orange-100 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses Section (Destacados) */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter italic">Proveedores <span className="text-orange-500">Destacados</span></h2>
            <p className="text-xl text-slate-500 font-medium">Los mejores servicios recomendados por nuestra comunidad.</p>
          </div>
          <Link href="/oaxaca-centro/veterinarias" className="text-orange-600 font-black flex items-center gap-2 hover:underline uppercase tracking-widest text-xs">
            Ver Directorio Completo <LucideIcons.ChevronRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBusinesses.map((business) => (
            <Link
              key={business.id}
              href={`/${business.municipio}/${business.categoria}/${business.slug}`}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-orange-50 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500"
            >
              <div className="relative h-64">
                <Image
                  src={business.image}
                  alt={business.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 h-8 w-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-orange-500 shadow-lg">
                  <LucideIcons.Star size={16} fill="currentColor" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
                    Premium
                  </div>
                  <span className="text-xs font-bold text-slate-400 truncate">{business.address.split(',')[0]}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-orange-600 transition-colors uppercase leading-tight">{business.name}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 font-medium mb-6">{business.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-orange-600 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                    Ver más <LucideIcons.ArrowRight size={14} />
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500 font-black text-sm">
                    {business.rating}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
