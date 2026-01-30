import { businesses, municipios, categories } from '@/data/db';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    params: Promise<{
        municipio: string;
        categoria: string;
    }>;
}

export default async function CategoryPage({ params }: Props) {
    const { municipio, categoria } = await params;
    const muni = municipios.find((m) => m.slug === municipio);
    const cat = categories.find((c) => c.slug === categoria);

    if (!muni || !cat) {
        notFound();
    }

    const filteredBusinesses = businesses.filter(
        (b) => b.municipio === municipio && b.categoria === categoria
    );

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <nav className="flex text-sm text-gray-500 mb-4 gap-2">
                    <Link href="/" className="hover:text-indigo-600">Inicio</Link>
                    <span>/</span>
                    <Link href={`/${municipio}`} className="hover:text-indigo-600">{muni.name}</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">{cat.name}</span>
                </nav>
                <h1 className="text-4xl font-black text-gray-900 mb-4">
                    {cat.name} en <span className="text-indigo-600">{muni.name}</span>
                </h1>
                <p className="text-xl text-gray-500">
                    Encontramos {filteredBusinesses.length} {filteredBusinesses.length === 1 ? 'resultado' : 'resultados'} para tu búsqueda.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBusinesses.map((business) => (
                    <Link
                        key={business.id}
                        href={`/${municipio}/${categoria}/${business.slug}`}
                        className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={business.image}
                                alt={business.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                                {business.priceRange}
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{business.name}</h3>
                                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                                    <span className="text-yellow-500 text-xs">★</span>
                                    <span className="text-xs font-bold text-yellow-700">{business.rating}</span>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                                {business.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {business.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                <span className="text-xs font-bold text-indigo-600">VER FICHA COMPLETA →</span>
                                <span className="text-xs text-gray-400">{business.address.split(',')[0]}</span>
                            </div>
                        </div>
                    </Link>
                ))}

                {filteredBusinesses.length === 0 && (
                    <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <span className="text-6xl mb-4 block">🔍</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No encontramos resultados</h3>
                        <p className="text-gray-500 mb-8">Lo sentimos, aún no tenemos negocios registrados en esta categoría y ubicación.</p>
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all">
                            Quiero registrar mi negocio
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
