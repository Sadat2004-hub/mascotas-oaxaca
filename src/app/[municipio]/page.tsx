import { municipios, categories } from '@/data/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Props {
    params: Promise<{
        municipio: string;
    }>;
}

export default async function MunicipioPage({ params }: Props) {
    const { municipio } = await params;
    const muni = municipios.find((m) => m.slug === municipio);

    if (!muni) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <nav className="flex text-sm text-gray-500 mb-4 gap-2">
                    <Link href="/" className="hover:text-indigo-600">Inicio</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">{muni.name}</span>
                </nav>
                <h1 className="text-4xl font-black text-gray-900 mb-4">
                    Servicios para Mascotas en <span className="text-indigo-600">{muni.name}</span>
                </h1>
                <p className="text-xl text-gray-500">
                    Explora las mejores opciones para el cuidado de tu mascota en esta zona.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        href={`/${municipio}/${cat.slug}`}
                        className="group p-8 bg-white rounded-3xl border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/10 transition-all flex items-center gap-6"
                    >
                        <span className="text-5xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{cat.name}</h2>
                            <p className="text-gray-500 text-sm">Ver negocios disponibles →</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
