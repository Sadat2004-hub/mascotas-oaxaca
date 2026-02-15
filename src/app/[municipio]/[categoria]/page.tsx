import { municipios } from '@/data/db';
import { findCategoryBySlug } from '@/data/categoryUtils';
import { getNegociosByMunicipio } from '@/lib/sanity.queries';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

interface Props {
    params: Promise<{
        municipio: string;
        categoria: string;
    }>;
}

export const revalidate = 60; // Revalidar cada 60 segundos

export default async function CategoryPage({ params }: Props) {
    const { municipio, categoria } = await params;
    const muni = municipios.find((m) => m.slug === municipio);
    const result = findCategoryBySlug(categoria);

    if (!muni || !result) {
        notFound();
    }

    const isSub = result.type === 'subcategory';
    const categoryName = isSub ? result.data.title : result.data.title;

    // Obtener negocios de Sanity
    const sanityNegocios = await getNegociosByMunicipio(municipio);

    // Filter logic: if it's a main category, show all businesses in its subcategories
    // if it's a subcategory, show only those
    const filteredBusinesses = (sanityNegocios || []).filter((b: any) => {
        if (result.type === 'subcategory') {
            return b.categoria === result.data.slug;
        } else {
            // result is a main category
            const subSlugs = result.data.subcategories.map(s => s.slug);
            return subSlugs.includes(b.categoria);
        }
    });

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="mb-16">
                <nav className="flex items-center text-sm text-gray-400 mb-8 gap-3 font-semibold uppercase tracking-widest">
                    <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
                    <LucideIcons.ChevronRight size={14} />
                    <Link href={`/${municipio}`} className="hover:text-indigo-600 transition-colors">{muni.name}</Link>
                    <LucideIcons.ChevronRight size={14} />
                    <span className="text-gray-900">{categoryName}</span>
                </nav>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-none">
                            {categoryName} <br />
                            <span className="text-indigo-600">en {muni.name}</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-light leading-relaxed">
                            Explora las mejores opciones de {categoryName.toLowerCase()} calificadas por dueños de mascotas en {muni.name}, Oaxaca.
                        </p>
                    </div>
                    <div className="bg-indigo-50 border border-indigo-100 px-8 py-6 rounded-[2rem] text-center">
                        <span className="block text-4xl font-black text-indigo-600 leading-none mb-1">{filteredBusinesses.length}</span>
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Negocios encontrados</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredBusinesses.map((business: any) => (
                    <Link
                        key={business.id}
                        href={`/${municipio}/${categoria}/${business.slug}`}
                        className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
                    >
                        <div className="relative h-72 overflow-hidden">
                            <Image
                                src={business.image}
                                alt={business.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6 flex gap-2">
                                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black text-indigo-600 shadow-xl uppercase tracking-widest">
                                    {business.priceRange}
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                                <div className="flex items-center gap-1.5 bg-yellow-400 px-3 py-1 rounded-full w-fit">
                                    <LucideIcons.Star size={12} fill="currentColor" stroke="none" />
                                    <span className="text-xs font-black text-yellow-950">{business.rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-10">
                            <h3 className="text-2xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tighter mb-4 leading-tight">
                                {business.name}
                            </h3>
                            <p className="text-gray-500 text-sm line-clamp-2 mb-8 leading-relaxed font-medium">
                                {business.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {business.tags.slice(0, 3).map((tag: any) => (
                                    <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 bg-indigo-50 px-3 py-1.5 rounded-xl">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                                <span className="text-xs font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2">
                                    Ver Detalles <LucideIcons.ArrowRight size={14} />
                                </span>
                                <span className="text-xs font-bold text-gray-400 max-w-[150px] truncate">{business.address.split(',')[0]}</span>
                            </div>
                        </div>
                    </Link>
                ))}

                {filteredBusinesses.length === 0 && (
                    <div className="col-span-full py-32 text-center bg-gray-50 rounded-[3rem] border-4 border-dashed border-gray-100">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                            <LucideIcons.Search size={40} className="text-gray-200" />
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">No encontramos resultados</h3>
                        <p className="text-gray-500 mb-12 max-w-md mx-auto font-medium">Lo sentimos, aún no tenemos negocios registrados en la categoría <span className="text-indigo-600 font-bold">{categoryName}</span> para esta zona.</p>
                        <button className="bg-indigo-600 text-white px-10 py-5 rounded-[2rem] font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                            Quiero registrar mi negocio GRATIS
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
