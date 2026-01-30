import { businesses, municipios, categories } from '@/data/db';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';
import ReviewForm from '@/components/ReviewForm';
import StructuredData from '@/components/StructuredData';

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
    const cat = categories.find((c) => c.slug === categoria);

    if (!business || !muni || !cat) {
        return { title: 'Negocio no encontrado' };
    }

    const title = `${business.name} en ${muni.name} | ${cat.name} - Mascotas Oaxaca`;
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
    const cat = categories.find((c) => c.slug === categoria);

    if (!business || !muni || !cat) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <StructuredData business={business} municipio={muni.name} categoria={cat.name} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={business.image}
                            alt={business.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                                {cat.name}
                            </span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                                {muni.name}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900">{business.name}</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>{i < Math.floor(business.rating) ? '★' : '☆'}</span>
                                ))}
                            </div>
                            <span className="text-gray-600 font-medium">{business.rating} ({business.reviews.length} reseñas)</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-600 font-bold">{business.priceRange}</span>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold">Descripción</h2>
                        <p className="text-gray-700 leading-relaxed">{business.description}</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Servicios y Etiquetas</h2>
                        <div className="flex flex-wrap gap-2">
                            {business.tags.map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-gray-600 text-sm">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <ReviewForm businessId={business.id} />

                    <div className="space-y-8 pt-8 border-t border-gray-100">
                        <h2 className="text-2xl font-bold">Reseñas recientes</h2>
                        {business.reviews.length > 0 ? (
                            <div className="space-y-6">
                                {business.reviews.map((review) => (
                                    <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-bold text-gray-900">{review.user}</span>
                                            <span className="text-sm text-gray-400">{review.date}</span>
                                        </div>
                                        <div className="text-yellow-400 mb-2">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                                        <p className="text-gray-600">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 italic">No hay reseñas todavía. ¡Sé el primero en opinar!</p>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 sticky top-24">
                        <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">📍</div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Dirección</p>
                                    <p className="text-gray-900">{business.address}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">📞</div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Teléfono</p>
                                    <p className="text-gray-900">{business.telephone}</p>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 overflow-hidden">
                                <div className="text-center p-4">
                                    <p className="text-2xl mb-2">🗺️</p>
                                    <p className="text-sm">Mapa interactivo próximamente</p>
                                </div>
                            </div>

                            <a
                                href={`https://wa.me/${business.telephone.replace(/\+/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-emerald-500 text-white rounded-2xl font-bold text-center hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200"
                            >
                                Contactar por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <WhatsAppButton telephone={business.telephone} />
        </div>
    );
}
