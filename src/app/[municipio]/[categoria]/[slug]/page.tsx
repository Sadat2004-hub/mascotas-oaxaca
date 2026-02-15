import { municipios } from '@/data/db';
import { findCategoryBySlug } from '@/data/categoryUtils';
import { getNegocioBySlug } from '@/lib/sanity.queries';
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

export const revalidate = 60; // Revalidar cada 60 segundos

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { municipio, categoria, slug } = await params;
    const business = await getNegocioBySlug(slug);
    const muni = municipios.find((m) => m.slug === municipio);
    const catResult = findCategoryBySlug(categoria);

    if (!business || !muni || !catResult) {
        return { title: 'Negocio no encontrado' };
    }

    const catName = catResult.data.title;
    const title = `${business.name} en ${muni.name} | ${catName} - Mascotas Oaxaca`;
    const description = business.description?.substring(0, 160) || '';

    return {
        title,
        description,
        keywords: business.tags?.join(', ') || '',
        openGraph: {
            title,
            description,
            images: business.image ? [business.image] : [],
        },
    };
}

export default async function BusinessPage({ params }: Props) {
    const { municipio, categoria, slug } = await params;
    const business = await getNegocioBySlug(slug);
    const muni = municipios.find((m) => m.slug === municipio);
    const catResult = findCategoryBySlug(categoria);

    if (!business || !muni || !catResult) {
        notFound();
    }

    const catName = catResult.data.title;

    return (
        <div className="container mx-auto px-4 py-8 md:py-12 relative overflow-hidden">
            <StructuredData business={business} municipio={muni.name} categoria={catName} />

            {/* Header Section: Title and Breadcrumbs at the top */}
            <div className="mb-10 text-center md:text-left">
                <nav className="flex items-center justify-center md:justify-start text-[10px] text-slate-400 mb-6 gap-2 font-bold uppercase tracking-[0.2em] overflow-x-auto whitespace-nowrap no-scrollbar">
                    <Link href="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
                    <LucideIcons.ChevronRight size={10} />
                    <Link href={`/${municipio}`} className="hover:text-orange-500 transition-colors uppercase">{muni.name}</Link>
                    <LucideIcons.ChevronRight size={10} />
                    <Link href={`/${municipio}/${categoria}`} className="hover:text-orange-500 transition-colors uppercase">{catName}</Link>
                    <LucideIcons.ChevronRight size={10} />
                    <span className="text-slate-300 uppercase">{business.name}</span>
                </nav>

                <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6 uppercase italic">
                    {business.name}
                </h1>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-2xl shadow-lg shadow-yellow-200/50">
                        <LucideIcons.Star size={16} fill="currentColor" stroke="none" />
                        <span className="text-sm font-black text-yellow-950">{business.rating || '4.5'}</span>
                    </div>
                    <div className="bg-orange-500 text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-orange-200/50">
                        {catName}
                    </div>
                </div>
            </div>

            {/* Gallery Section: Horizontal Slider */}
            <div className="w-full mb-16">
                <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory">
                    {[business.image, ...(business.gallery || [])].filter(Boolean).map((img, index) => (
                        <div key={index} className="relative h-[350px] md:h-[500px] min-w-[300px] md:min-w-[700px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl snap-center border-4 border-white">
                            <Image
                                src={img || '/images/placeholder-business.jpg'}
                                alt={`${business.name} - ${index}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Nosotros Section */}
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter flex items-center gap-3 uppercase italic">
                            <LucideIcons.Heart className="text-orange-500" /> Nosotros
                        </h2>
                        <div className="prose prose-lg prose-orange max-w-none text-slate-500 leading-relaxed font-medium">
                            {business.description}
                        </div>
                    </div>

                    {/* Servicios Section */}
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter flex items-center gap-3 uppercase italic">
                            <LucideIcons.CheckCircle2 className="text-orange-500" /> Servicios
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {business.tags?.map((tag: any) => (
                                <span key={tag} className="px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-600 font-bold text-xs uppercase tracking-widest hover:border-orange-200 hover:text-orange-600 transition-all cursor-default">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <ReviewForm businessId={business.id} />

                    {/* Reviews */}
                    <div className="space-y-8 pt-12 border-t border-slate-100">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">Reseñas de la comunidad</h2>
                        {business.reviews?.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {business.reviews?.map((review: any) => (
                                    <div key={review.id} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-black">
                                                    {review.user?.charAt(0)}
                                                </div>
                                                <span className="font-black text-slate-900 uppercase text-[10px] tracking-widest">{review.user}</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{review.date}</span>
                                        </div>
                                        <div className="flex text-yellow-400 mb-4 gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <LucideIcons.Star key={i} size={14} fill={i < (review.rating || 5) ? "currentColor" : "none"} stroke={i < (review.rating || 5) ? "none" : "currentColor"} />
                                            ))}
                                        </div>
                                        <p className="text-slate-500 italic leading-relaxed font-medium text-sm">"{review.comment}"</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-slate-50 p-12 rounded-[3rem] text-center border-2 border-dashed border-slate-200">
                                <LucideIcons.MessageSquare size={48} className="text-slate-200 mx-auto mb-4" />
                                <p className="text-slate-400 font-medium tracking-tight">Sé el primero en calificar este servicio.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Floating Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 space-y-6">
                        <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-orange-100/30">
                            <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic leading-none">Contacto Directo</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0 shadow-lg shadow-orange-100">
                                        <LucideIcons.MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Ubicación</p>
                                        <p className="text-slate-900 font-bold leading-tight">{business.address}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-lg shadow-emerald-100">
                                        <LucideIcons.Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Teléfono</p>
                                        <p className="text-slate-900 font-black text-xl tracking-tighter">{business.telephone}</p>
                                    </div>
                                </div>

                                {/* Mapa real si existe la URL */}
                                <div className="relative group">
                                    {business.mapEmbedUrl ? (
                                        <div className="w-full h-64 rounded-[2.5rem] overflow-hidden border-4 border-slate-50 shadow-inner">
                                            <iframe
                                                src={business.mapEmbedUrl}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <div className="w-full h-48 bg-slate-50 rounded-[2.5rem] flex flex-col items-center justify-center text-slate-300 border-2 border-dashed border-slate-200 overflow-hidden group-hover:bg-orange-50 group-hover:border-orange-200 transition-all">
                                            <LucideIcons.Map size={32} className="mb-4 opacity-30" />
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em]">Mapa no disponible</p>
                                        </div>
                                    )}
                                </div>

                                <a
                                    href={`https://wa.me/${business.telephone?.replace(/\+/g, '').replace(/ /g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-6 bg-emerald-500 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-emerald-200"
                                >
                                    <LucideIcons.MessageCircle size={20} /> Enviar Mensaje
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatsAppButton telephone={business.telephone} />
        </div>
    );
}
