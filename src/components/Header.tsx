import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-[100] w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform">
                        <LucideIcons.Dog size={24} />
                    </div>
                    <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent tracking-tighter">
                        Mascotas Oaxaca
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-10">
                    <Link href="/" className="text-sm font-black uppercase tracking-widest text-gray-500 hover:text-indigo-600 transition-colors">Inicio</Link>
                    <Link href="/oaxaca-centro/veterinarias" className="text-sm font-black uppercase tracking-widest text-gray-500 hover:text-indigo-600 transition-colors">Veterinarias</Link>
                    <Link href="/oaxaca-centro/esteticas-grooming" className="text-sm font-black uppercase tracking-widest text-gray-500 hover:text-indigo-600 transition-colors">Grooming</Link>
                    <Link href="/oaxaca-centro/pet-friendly" className="text-sm font-black uppercase tracking-widest text-gray-500 hover:text-indigo-600 transition-colors">Pet Friendly</Link>

                    <div className="h-6 w-[1px] bg-gray-100"></div>

                    <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 hover:scale-[1.02] active:scale-95">
                        <LucideIcons.PlusCircle size={16} /> Sumar mi Negocio
                    </button>
                </nav>

                <button className="lg:hidden p-3 bg-gray-50 rounded-2xl text-gray-900 hover:bg-gray-100 transition-colors">
                    <LucideIcons.Menu size={24} strokeWidth={2.5} />
                </button>
            </div>
        </header>
    );
}
