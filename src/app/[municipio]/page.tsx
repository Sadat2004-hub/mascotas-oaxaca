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
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="mb-16 md:mb-20">
                {/* Breadcrumbs más sutiles */}
                <nav className="flex items-center text-[10px] text-slate-400 mb-6 gap-2 font-bold uppercase tracking-[0.2em]">
                    <Link href="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
                    <LucideIcons.ChevronRight size={10} />
                    <span className="text-slate-300">{muni.name}</span>
                </nav>

                <h1 className="text-4xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9] uppercase italic">
                    Servicios en <br />
                    <span className="text-orange-500 underline decoration-amber-200 underline-offset-8">{muni.name}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                    Todo lo que tu mascota necesita en el corazón de {muni.name}. Explora por categorías y encuentra los mejores servicios.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        href={`/${municipio}/${cat.slug}`}
                        className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-orange-200/20 transition-all duration-500 relative overflow-hidden"
                    >
                        {/* Decoración de fondo */}
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
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic leading-[0.9]">¿Tienes un negocio en <span className="text-orange-500">{muni.name}</span>?</h2>
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
