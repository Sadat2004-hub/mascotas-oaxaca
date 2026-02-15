import { ciudades } from '@/data/db';
import { categories } from '@/data/categories';
import { findCategoryBySlug } from '@/data/categoryUtils';
import { getNegocioBySlug } from '@/lib/sanity.queries';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';
import ReviewForm from '@/components/ReviewForm';
import StructuredData from '@/components/StructuredData';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export const revalidate = 60; // Revalidar cada 60 segundos

const IconWrapper = ({ name, ...props }: { name: string } & LucideProps) => {
    // @ts-ignore
    const Icon = LucideIcons[name] || LucideIcons.HelpCircle;
    return <Icon {...props} />;
};

const getMapUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('<iframe')) {
        const match = url.match(/src="([^"]+)"/);
        return match ? match[1] : url;
    }
    return url;
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;

    // Primero intentamos como negocio
    const business = await getNegocioBySlug(slug);
    if (business) {
        const city = ciudades.find((c) => c.slug === business.ciudad);
        const title = `${business.name} | Mascotas Oaxaca`;
        const description = business.description?.substring(0, 160) || '';
        return {
            title,
            description,
            openGraph: {
                title,
                description,
                images: business.image ? [business.image] : [],
            },
        };
    }

    // Luego como ciudad
    const city = ciudades.find((c) => c.slug === slug);
    if (city) {
        return {
            title: `Servicios para Mascotas en ${city.name} | Mascotas Oaxaca`,
            description: `Encuentra los mejores servicios para tu mascota en ${city.name}, Oaxaca.`,
        };
    }

    return { title: 'No encontrado' };
}

export default async function DynamicPage({ params }: Props) {
    const { slug } = await params;

    // 1. Intentar encontrar como negocio
    const business = await getNegocioBySlug(slug);

    if (business) {
        const city = ciudades.find((c) => c.slug === business.ciudad);
        const mainCatSlug = business.categorias?.[0] || 'veterinarias';
        const catResult = findCategoryBySlug(mainCatSlug);
        const catName = catResult ? catResult.data.title : 'Servicios';

        return (
            <div className="container mx-auto px-4 py-8 md:py-12 relative overflow-hidden">
                <StructuredData business={business} ciudad={city?.name || ''} categoria={catName} />

                {/* Header Section */}
                <div className="mb-10 text-center md:text-left">
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

                {/* Gallery Section */}
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
                    <div className="lg:col-span-2 space-y-12">
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter flex items-center gap-3 uppercase italic">
                                <LucideIcons.Heart className="text-orange-500" /> Nosotros
                            </h2>
                            <div className="prose prose-lg prose-orange max-w-none text-slate-500 leading-relaxed font-medium">
                                {business.description}
                            </div>
                        </div>

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

                        {/* Reseñas */}
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

                                    <div className="relative group">
                                        {business.mapEmbedUrl ? (
                                            <div className="w-full h-64 rounded-[2.5rem] overflow-hidden border-4 border-slate-50 shadow-inner">
                                                <iframe
                                                    src={getMapUrl(business.mapEmbedUrl)}
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

    // 2. Intentar encontrar como ciudad
    const city = ciudades.find((c) => c.slug === slug);
    if (city) {
        return (
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="mb-16 md:mb-20">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none uppercase italic">
                        Explorar <span className="text-orange-500">Servicios</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                        Todo lo que tu mascota necesita en el corazón de {city.name}. Explora por categorías y encuentra los mejores servicios.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/${city.slug}/${cat.slug}`}
                            className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-orange-200/20 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="relative z-10 text-center md:text-left">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-200 group-hover:rotate-6 transition-transform mx-auto md:mx-0">
                                    <IconWrapper name={cat.icon} size={32} strokeWidth={2.5} />
                                </div>

                                <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-none">{cat.title}</h2>

                                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
                                    {cat.subcategories.slice(0, 3).map((sub) => (
                                        <span key={sub.slug} className="text-[10px] font-black uppercase tracking-widest text-orange-400 bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-100">
                                            {sub.title}
                                        </span>
                                    ))}
                                    {cat.subcategories.length > 3 && (
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                                            +{cat.subcategories.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-center md:justify-start gap-3 text-orange-600 font-black text-[10px] uppercase tracking-widest">
                                    Explorar Sección <LucideIcons.ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-slate-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
                    <LucideIcons.Dog size={250} className="absolute -bottom-10 -right-10 opacity-10 rotate-12" />
                    <div className="relative z-10 max-w-xl text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic leading-[0.9]">¿Tienes un negocio en <span className="text-orange-500">{city.name}</span>?</h2>
                        <p className="text-lg text-slate-400 font-medium mb-10 leading-relaxed">Únete al directorio médico y de servicios para mascotas más completo de Oaxaca.</p>
                        <Link
                            href="/sumar-negocio"
                            className="inline-block bg-orange-500 text-white px-12 py-6 rounded-[2rem] font-black hover:bg-orange-600 transition-all shadow-xl shadow-orange-950/20 uppercase tracking-widest text-sm"
                        >
                            Registrar Gratis
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    notFound();
}
