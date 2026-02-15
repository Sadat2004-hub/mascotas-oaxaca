import { ciudades } from '@/data/db';
import { findCategoryBySlug } from '@/data/categoryUtils';
import { getNegociosByCiudad } from '@/lib/sanity.queries';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

interface Props {
    params: Promise<{
        slug: string;
        categoria: string;
    }>;
}

export const revalidate = 60; // Revalidar cada 60 segundos

export default async function CategoryPage({ params }: Props) {
    const { slug, categoria } = await params;

    // Aquí 'slug' actúa como la ciudad
    const city = ciudades.find((c) => c.slug === slug);
    const result = findCategoryBySlug(categoria);

    if (!city || !result) {
        notFound();
    }

    const isSub = result.type === 'subcategory';
    const categoryName = isSub ? result.data.title : result.data.title;

    // Obtener negocios de Sanity
    const sanityNegocios = await getNegociosByCiudad(slug);

    // Filter logic: if it's a main category, show all businesses in its subcategories
    // if it's a subcategory, show only those
    const filteredBusinesses = (sanityNegocios || []).filter((b: any) => {
        if (!b.categorias || !Array.isArray(b.categorias)) return false;

        if (result.type === 'subcategory') {
            return b.categorias.includes(result.data.slug);
        } else {
            // result is a main category
            const subSlugs = result.data.subcategories.map(s => s.slug);
            // Show if it belongs to the main category itself OR any of its subcategories
            return b.categorias.includes(result.data.slug) ||
                b.categorias.some((cat: string) => subSlugs.includes(cat));
        }
    });

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic leading-none">
                            {categoryName}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                            Los mejores servicios recomendados por la comunidad en {city.name}.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {filteredBusinesses.map((business: any) => (
                    <Link
                        key={business.id}
                        href={`/${business.slug}`}
                        className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500"
                    >
                        <div className="relative h-64 md:h-72 overflow-hidden">
                            <Image
                                src={business.image || '/images/placeholder-business.jpg'}
                                alt={business.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6 flex gap-2">
                                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black text-orange-600 shadow-xl uppercase tracking-widest">
                                    {business.priceRange || '$$'}
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                                <div className="flex items-center gap-1.5 bg-yellow-400 px-3 py-1 rounded-full w-fit">
                                    <LucideIcons.Star size={12} fill="currentColor" stroke="none" />
                                    <span className="text-xs font-black text-yellow-950">{business.rating || '4.5'}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-tighter mb-2 leading-none">
                                {business.name}
                            </h3>

                            {/* Dirección simplificada debajo del nombre */}
                            <div className="flex items-center gap-2 text-slate-400 mb-4">
                                <LucideIcons.MapPin size={12} className="text-orange-500" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    {business.address?.split(',')[0] || city.name}
                                </span>
                            </div>

                            {/* 'Ver Detalles' justo debajo de la dirección */}
                            <div className="mb-6">
                                <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest flex items-center gap-2 bg-orange-50 w-fit px-4 py-2 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                    Ver Detalles <LucideIcons.ArrowRight size={14} />
                                </span>
                            </div>

                            <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed font-medium opacity-80">
                                {business.description}
                            </p>
                        </div>
                    </Link>
                ))}

                {filteredBusinesses.length === 0 && (
                    <div className="col-span-full py-20 md:py-32 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                            <LucideIcons.Search size={32} className="text-slate-200" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">No encontramos resultados</h3>
                        <p className="text-slate-500 mb-12 max-w-sm mx-auto font-medium">Estamos trabajando para agregar pronto las mejores opciones de {categoryName.toLowerCase()} en esta zona.</p>
                        <Link
                            href="/sumar-negocio"
                            className="inline-block bg-orange-500 text-white px-10 py-5 rounded-[2rem] font-black hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 uppercase tracking-widest text-xs"
                        >
                            Registrar negocio GRATIS
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
