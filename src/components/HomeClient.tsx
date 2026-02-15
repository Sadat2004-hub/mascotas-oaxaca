'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import { ciudades } from '@/data/db';
import { categories } from '@/data/categories';

const IconWrapper = ({ name, ...props }: { name: string } & LucideProps) => {
    // @ts-ignore
    const Icon = LucideIcons[name] || LucideIcons.HelpCircle;
    return <Icon {...props} />;
};

interface Props {
    featuredBusinesses: any[];
}

export default function HomeClient({ featuredBusinesses }: Props) {
    const [selectedCity, setSelectedCity] = useState('oaxaca');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `/${selectedCity}`;
    };

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

                    <form
                        onSubmit={handleSearch}
                        className="max-w-4xl mx-auto bg-white p-3 rounded-[2.5rem] shadow-2xl shadow-orange-200/50 flex flex-col md:flex-row gap-2 border border-orange-50"
                    >
                        <div className="flex-1 flex items-center px-6 gap-3 border-r border-slate-100">
                            <LucideIcons.MapPin className="text-orange-500 w-5 h-5" />
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className="flex-1 bg-transparent border-none text-slate-700 font-bold focus:outline-none appearance-none cursor-pointer"
                            >
                                {ciudades.map(c => (
                                    <option key={c.id} value={c.slug}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-[2] flex items-center px-6 gap-3">
                            <LucideIcons.Search className="text-orange-500 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="¿Qué servicio buscas hoy?"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 bg-transparent border-none text-slate-700 font-bold placeholder:text-slate-400 focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-10 py-5 rounded-[2rem] font-black hover:bg-orange-600 transition-all shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                        >
                            Buscar Ahora
                        </button>
                    </form>
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
                                                href={`/${selectedCity}/${sub.slug}`}
                                                className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors group/link"
                                            >
                                                <span className="w-1.5 h-1.5 bg-orange-200 rounded-full group-hover/link:bg-orange-500 group-hover/link:scale-150 transition-all"></span>
                                                <span className="text-sm font-bold">{sub.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`/${selectedCity}/${cat.slug}`}
                                    className="inline-flex items-center gap-2 bg-orange-50 px-6 py-3 rounded-xl text-orange-600 font-black text-xs uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all group-hover:shadow-lg"
                                >
                                    Explorar Todo <LucideIcons.ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Businesses Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                            <LucideIcons.Star size={14} /> Recomendados
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                            Negocios <span className="text-orange-500">Destacados</span>
                        </h2>
                    </div>
                    <Link href={`/${selectedCity}`} className="text-orange-600 font-black text-xs uppercase tracking-widest hover:text-orange-700 transition-colors flex items-center gap-2 border-b-2 border-orange-100 pb-2">
                        Ver todo el directorio <LucideIcons.ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredBusinesses.length > 0 ? (
                        featuredBusinesses.map((business: any) => (
                            <Link
                                key={business.id}
                                href={`/${business.slug}`}
                                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={business.image || '/images/placeholder-business.jpg'}
                                        alt={business.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black text-orange-600 shadow-xl uppercase tracking-widest">
                                            {business.priceRange || '$$'}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="flex items-center gap-1.5 bg-yellow-400 px-3 py-1 rounded-full w-fit">
                                            <LucideIcons.Star size={12} fill="currentColor" stroke="none" />
                                            <span className="text-xs font-black text-yellow-950">{business.rating || '4.5'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-tighter mb-4 leading-none">
                                        {business.name}
                                    </h3>
                                    <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed font-medium mb-6">
                                        {business.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-orange-600 font-bold text-[10px] uppercase tracking-widest">
                                        Ver Perfil Completo <LucideIcons.ArrowRight size={14} />
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-slate-400 font-medium font-black uppercase tracking-widest text-xs">
                            Espera un momento, estamos preparando lo mejor para ti...
                        </div>
                    )}
                </div>
            </section>

            {/* Join Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="bg-orange-500 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-orange-200">
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200 rounded-full blur-[120px]"></div>
                    </div>

                    <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter text-balance uppercase">
                            ¡Haz que tu negocio sea el lugar favorito!
                        </h2>
                        <p className="text-xl md:text-2xl text-orange-50 mb-12 font-medium leading-relaxed max-w-2xl">
                            Únete a la mayor red de servicios para mascotas en Oaxaca. Conecta con miles de dueños que buscan lo mejor para sus peluditos.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="/sumar-negocio"
                                className="bg-white text-orange-600 px-12 py-6 rounded-[2rem] font-black hover:bg-orange-50 transition-all shadow-xl shadow-orange-700/20 text-center uppercase tracking-widest text-sm"
                            >
                                Registrar mi Negocio
                            </Link>
                            <Link
                                href="/contacto"
                                className="bg-orange-600 text-white border-2 border-orange-400 px-12 py-6 rounded-[2rem] font-black hover:bg-orange-700 transition-all text-center uppercase tracking-widest text-sm"
                            >
                                Saber más
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsors Section */}
            <section className="container mx-auto px-4 pb-20">
                <div className="bg-slate-50 rounded-[4rem] p-8 md:p-16 border border-slate-100 shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 relative z-10">
                        <div className="text-center md:text-left mb-8 md:mb-0">
                            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                                <LucideIcons.ShieldCheck size={14} /> Aliados Estratégicos
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic">
                                Nuestros <span className="text-orange-500 underline decoration-amber-300 underline-offset-8">Patrocinadores</span>
                            </h2>
                        </div>
                        <div className="hidden md:block">
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs text-right">
                                Empresas que confían <br /> en la comunidad
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                        {[
                            {
                                id: 'p1',
                                name: 'Royal Pet Gourmet',
                                category: 'Alimentación Premium',
                                description: 'Nutrición orgánica y dietas especializadas para razas exigentes. Calidad de exportación ahora en Oaxaca.',
                                image: 'https://images.unsplash.com/photo-1589924691106-bc1b3075d6df?auto=format&fit=crop&q=80&w=800',
                                tag: 'Socio Oro',
                                icon: 'Bone'
                            },
                            {
                                id: 'p2',
                                name: 'Elite Grooming Spa',
                                category: 'Bienestar y Estética',
                                description: 'El primer spa de relajación profunda para mascotas. Cortes de alta peluquería y tratamientos dermatológicos.',
                                image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
                                tag: 'Socio Platino',
                                icon: 'Sparkles'
                            },
                            {
                                id: 'p3',
                                name: 'BioHealth Center',
                                category: 'Salud Avanzada',
                                description: 'Tecnología médica de punta para diagnósticos precisos. Laboratorio clínico y especialidades de vanguardia.',
                                image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=800',
                                tag: 'Socio Oro',
                                icon: 'Activity'
                            }
                        ].map((sponsor) => (
                            <div
                                key={sponsor.id}
                                className="group bg-white rounded-[3rem] p-4 border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-orange-200/40 transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="relative h-56 w-full rounded-[2.5rem] overflow-hidden mb-6">
                                    <Image
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                                            <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{sponsor.tag}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 pb-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                                            <IconWrapper name={sponsor.icon} size={16} />
                                        </div>
                                        <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">{sponsor.category}</span>
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-orange-600 transition-colors uppercase leading-none">
                                        {sponsor.name}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8 line-clamp-3">
                                        {sponsor.description}
                                    </p>

                                    <div className="mt-auto">
                                        <button className="w-full py-4 bg-slate-50 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all border border-slate-100 group-hover:border-orange-200 shadow-sm flex items-center justify-center gap-2">
                                            Visitar Sitio Oficial <LucideIcons.ExternalLink size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
