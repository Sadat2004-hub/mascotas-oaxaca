import { municipios } from '@/data/db';
import { categories } from '@/data/categories';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

const IconWrapper = ({ name, ...props }: { name: string } & LucideProps) => {
    // @ts-ignore
    const Icon = LucideIcons[name] || LucideIcons.HelpCircle;
    return <Icon {...props} />;
};

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
        <div className="container mx-auto px-4 py-20">
            <div className="mb-20">
                <nav className="flex items-center text-sm text-gray-400 mb-8 gap-3 font-semibold uppercase tracking-widest">
                    <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
                    <LucideIcons.ChevronRight size={14} />
                    <span className="text-gray-900">{muni.name}</span>
                </nav>

                <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">
                    Servicios en <br />
                    <span className="text-indigo-600">{muni.name}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl leading-relaxed">
                    Explora por categorías y encuentra exactamente lo que tu mascota necesita en el corazón de {muni.name}.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        href={`/${municipio}/${cat.slug}`}
                        className="group bg-white rounded-[2.5rem] p-10 border border-gray-100/50 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform">
                                <IconWrapper name={cat.icon} size={32} strokeWidth={2.5} />
                            </div>

                            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight uppercase leading-tight">{cat.title}</h2>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {cat.subcategories.slice(0, 3).map((sub) => (
                                    <span key={sub.slug} className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100">
                                        {sub.title}
                                    </span>
                                ))}
                                {cat.subcategories.length > 3 && (
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                                        +{cat.subcategories.length - 3} más
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-3 text-indigo-600 font-black text-xs uppercase tracking-widest">
                                Explorar Ahora <LucideIcons.ArrowRight size={16} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-24 p-12 bg-indigo-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                <LucideIcons.Dog size={200} className="absolute -bottom-10 -right-10 opacity-10 rotate-12" />
                <div className="relative z-10 max-w-xl">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">¿Tienes un negocio en {muni.name}?</h2>
                    <p className="text-xl text-white/80 font-light mb-8">Aumenta tu visibilidad y llega a más dueños de mascotas registrándote hoy mismo en nuestro directorio.</p>
                    <button className="bg-white text-indigo-600 px-10 py-5 rounded-[2rem] font-black hover:bg-gray-100 transition-all shadow-xl">
                        Comenzar Registro Gratis
                    </button>
                </div>
            </div>
        </div>
    );
}
