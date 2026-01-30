import { businesses, municipios } from '@/data/db';
import { findCategoryBySlug } from '@/data/categoryUtils';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';
import ReviewForm from '@/components/ReviewForm';
import StructuredData from '@/components/StructuredData';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';

interface Props {
    params: Promise<{
        municipio: string;
        categoria: string;
        slug: string;
    }>;
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { municipio, categoria, slug } = await params;
    const business = businesses.find((b) => b.slug === slug);
    const muni = municipios.find((m) => m.slug === municipio);
    const catResult = findCategoryBySlug(categoria);

    if (!business || !muni || !catResult) {
        return { title: 'Negocio no encontrado' };
    }

    const catName = catResult.data.title;
    const title = `${business.name} en ${muni.name} | ${catName} - Mascotas Oaxaca`;
    const description = business.description.substring(0, 160);

    return {
        title,
        description,
        keywords: business.tags.join(', '),
        openGraph: {
            title,
            description,
            images: [business.image],
        },
    };
}

export default async function BusinessPage({ params }: Props) {
    const { municipio, categoria, slug } = await params;
    const business = businesses.find((b) => b.slug === slug);
    const muni = municipios.find((m) => m.slug === municipio);
    const catResult = findCategoryBySlug(categoria);

    if (!business || !muni || !catResult) {
        notFound();
    }

    const catName = catResult.data.title;

    return (
        <div className="container mx-auto px-4 py-20 relative">
            <StructuredData business={business} municipio={muni.name} categoria={catName} />

            {/* Dynamic Breadcrumbs */}
            <nav className="flex items-center text-sm text-gray-400 mb-12 gap-3 font-semibold uppercase tracking-widest overflow-x-auto whitespace-nowrap pb-4 no-scrollbar">
                <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
                <LucideIcons.ChevronRight size={14} />
                <Link href={`/${municipio}`} className="hover:text-indigo-600 transition-colors">{muni.name}</Link>
                <LucideIcons.ChevronRight size={14} />
                <Link href={`/${municipio}/${categoria}`} className="hover:text-indigo-600 transition-colors">{catName}</Link>
                <LucideIcons.ChevronRight size={14} />
                <span className="text-gray-900">{business.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src={business.image}
                            alt={business.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-indigo-600 text-white px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                                    {catName}
                                </div>
                                <div className="bg-white/95 backdrop-blur-md text-gray-900 px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl flex items-center gap-2">
                                    <LucideIcons.MapPin size={14} className="text-indigo-600" />
                                    {muni.name}
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">{business.name}</h1>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-2xl">
                                    <LucideIcons.Star size={16} fill="currentColor" stroke="none" />
                                    <span className="text-sm font-black text-yellow-950">{business.rating}</span>
                                </div>
                                <span className="text-white/60 font-bold uppercase tracking-widest text-xs">{business.reviews.length} Reseñas Verificadas</span>
                                <span className="text-white/20">|</span>
                                <span className="text-white font-black text-xl">{business.priceRange}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-100/50">
                        <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tighter flex items-center gap-3">
                            <LucideIcons.FileText className="text-indigo-600" /> Descripción
                        </h2>
                        <div className="prose prose-lg prose-indigo max-w-none text-gray-600 leading-relaxed font-light">
                            {business.description}
                        </div>
                    </div>

                    <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-100/50">
                        <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tighter flex items-center gap-3">
                            <LucideIcons.CheckCircle2 className="text-indigo-600" /> Servicios y Especialidades
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {business.tags.map((tag) => (
                                <span key={tag} className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-600 font-bold text-sm hover:border-indigo-200 hover:text-indigo-600 transition-all cursor-default">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <ReviewForm businessId={business.id} />

                    <div className="space-y-8 pt-12 border-t border-gray-100">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tighter">Reseñas de la comunidad</h2>
                        {business.reviews.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {business.reviews.map((review) => (
                                    <div key={review.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-50 shadow-md">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-black">
                                                    {review.user.charAt(0)}
                                                </div>
                                                <span className="font-black text-gray-900 uppercase text-xs tracking-widest">{review.user}</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{review.date}</span>
                                        </div>
                                        <div className="flex text-yellow-400 mb-4 gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <LucideIcons.Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} stroke={i < review.rating ? "none" : "currentColor"} />
                                            ))}
                                        </div>
                                        <p className="text-gray-500 italic leading-relaxed font-medium">"{review.comment}"</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-gray-50 p-12 rounded-[3rem] text-center border-2 border-dashed border-gray-100">
                                <LucideIcons.MessageSquare size={48} className="text-gray-200 mx-auto mb-4" />
                                <p className="text-gray-400 font-medium">No hay reseñas todavía. ¡Sé el primero en opinar!</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Floating Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 space-y-6">
                        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl shadow-indigo-100/50">
                            <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tighter uppercase">Contacto Directo</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-lg shadow-indigo-100">
                                        <LucideIcons.MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Ubicación</p>
                                        <p className="text-gray-900 font-bold leading-tight">{business.address}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-lg shadow-emerald-100">
                                        <LucideIcons.Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Teléfono</p>
                                        <p className="text-gray-900 font-bold text-xl tracking-tight">{business.telephone}</p>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <div className="w-full h-56 bg-gray-100 rounded-[2rem] flex flex-col items-center justify-center text-gray-300 border-2 border-dashed border-gray-200 overflow-hidden group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-all">
                                        <LucideIcons.Map size={40} className="mb-4" />
                                        <p className="text-xs font-black uppercase tracking-[0.2em]">Mapa Interactivo</p>
                                        <p className="text-[10px] mt-1 font-bold">Disponible próximamente</p>
                                    </div>
                                </div>

                                <a
                                    href={`https://wa.me/${business.telephone.replace(/\+/g, '').replace(/ /g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-6 bg-emerald-500 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-emerald-200"
                                >
                                    <LucideIcons.MessageCircle size={20} /> Contactar por WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="bg-indigo-900 p-8 rounded-[2.5rem] text-white">
                            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300 bg-white/10 px-3 py-1 rounded-full mb-4 inline-block">Pro-Tip</span>
                            <p className="text-sm font-medium leading-relaxed">¿Sabías que {business.name} ofrece {business.tags[0]}? Menciona que lo viste en <strong>Mascotas Oaxaca</strong> para promociones exclusivas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <WhatsAppButton telephone={business.telephone} />
        </div>
    );
}
