import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { categories } from '@/data/categories';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const mainWhatsApp = "526563230397";

    return (
        <footer className="bg-slate-50 border-t border-orange-100 pt-24 pb-12 overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-8 group">
                            <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200 group-hover:rotate-12 transition-transform">
                                <LucideIcons.Dog size={24} />
                            </div>
                            <span className="text-xl font-black text-slate-900 tracking-tighter">Mascotas Oaxaca</span>
                        </Link>
                        <p className="text-slate-500 font-medium leading-relaxed mb-8">
                            La comunidad pet-friendly más grande de Oaxaca. Conectamos corazones con los mejores servicios para el bienestar de tus peluditos.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-orange-100 flex items-center justify-center text-orange-600 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                                <LucideIcons.Instagram size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-orange-100 flex items-center justify-center text-orange-600 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                                <LucideIcons.Facebook size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-orange-100 flex items-center justify-center text-orange-600 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                                <LucideIcons.Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Directorio</h3>
                        <ul className="space-y-4">
                            {categories.slice(0, 5).map(cat => (
                                <li key={cat.id}>
                                    <Link href={`/oaxaca-centro/${cat.slug}`} className="text-slate-600 hover:text-orange-600 font-bold text-sm transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-orange-200 rounded-full group-hover:scale-150 transition-all"></span>
                                        {cat.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Nosotros</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/contacto" className="text-slate-600 hover:text-orange-600 font-bold text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-orange-200 rounded-full group-hover:scale-150 transition-all"></span>
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link href="/sumar-negocio" className="text-slate-600 hover:text-orange-600 font-bold text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-orange-200 rounded-full group-hover:scale-150 transition-all"></span>
                                    Sumar mi Negocio
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacidad" className="text-slate-600 hover:text-orange-600 font-bold text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-orange-200 rounded-full group-hover:scale-150 transition-all"></span>
                                    Aviso de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/terminos" className="text-slate-600 hover:text-orange-600 font-bold text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-orange-200 rounded-full group-hover:scale-150 transition-all"></span>
                                    Términos y Condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Contacto Oficial</h3>
                        <div className="bg-white p-8 rounded-[2.5rem] border border-orange-100 shadow-xl shadow-orange-100/50">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 text-center">Escríbenos por WhatsApp</p>
                            <a
                                href={`https://wa.me/${mainWhatsApp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-200"
                            >
                                <LucideIcons.MessageCircle size={20} />
                                WhatsApp Oficial
                            </a>
                            <p className="text-[10px] text-slate-400 mt-6 leading-tight italic text-center">Atención directa para dudas y aclaraciones.</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-orange-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        © {currentYear} Mascotas Oaxaca. Hecho con ❤️ para los peluditos de Oaxaca.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <span>By Annuar Salcido</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
