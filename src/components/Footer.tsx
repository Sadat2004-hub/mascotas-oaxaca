import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { categories } from '@/data/categories';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <LucideIcons.Dog size={20} />
                            </div>
                            <span className="text-xl font-black text-gray-900 tracking-tighter">Mascotas Oaxaca</span>
                        </Link>
                        <p className="text-gray-500 font-medium leading-relaxed mb-8">
                            Conectando a los dueños de mascotas con el mejor cuidado en el estado de Oaxaca. El directorio más completo y confiable.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                                <LucideIcons.Instagram size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                                <LucideIcons.Facebook size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                                <LucideIcons.Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8">Categorías</h3>
                        <ul className="space-y-4">
                            {categories.slice(0, 5).map(cat => (
                                <li key={cat.id}>
                                    <Link href={`/oaxaca-centro/${cat.slug}`} className="text-gray-500 hover:text-indigo-600 font-bold text-sm transition-colors">
                                        {cat.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8">Populares</h3>
                        <ul className="space-y-4">
                            <li><Link href="/oaxaca-centro/veterinarias" className="text-gray-500 hover:text-indigo-600 font-bold text-sm transition-colors">Veterinarias 24h</Link></li>
                            <li><Link href="/oaxaca-centro/esteticas-grooming" className="text-gray-500 hover:text-indigo-600 font-bold text-sm transition-colors">Estéticas Caninas</Link></li>
                            <li><Link href="/oaxaca-centro/pet-friendly" className="text-gray-500 hover:text-indigo-600 font-bold text-sm transition-colors">Cafés Pet Friendly</Link></li>
                            <li><Link href="/oaxaca-centro/adopciones" className="text-gray-500 hover:text-indigo-600 font-bold text-sm transition-colors">Adopción Responsable</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                                <LucideIcons.Mail size={16} className="text-indigo-600" /> hola@mascotasoaxaca.com
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                                <LucideIcons.MapPin size={16} className="text-indigo-600" /> Oaxaca de Juárez, México
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} Mascotas Oaxaca. Hecho con ❤️ para los peluditos.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        <Link href="/privacidad" className="hover:text-indigo-600 transition-colors">Privacidad</Link>
                        <Link href="/terminos" className="hover:text-indigo-600 transition-colors">Términos</Link>
                        <Link href="/cookies" className="hover:text-indigo-600 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
