'use client';

import { useState } from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-[100] w-full border-b border-orange-100 bg-white/90 backdrop-blur-xl">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200 group-hover:rotate-12 transition-transform">
                        <LucideIcons.Dog size={24} />
                    </div>
                    <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent tracking-tighter">
                        Mascotas Oaxaca
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    <Link href="/" className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-orange-500 transition-colors">Inicio</Link>
                    <Link href="/oaxaca-centro/veterinarias" className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-orange-500 transition-colors">Veterinarias</Link>
                    <Link href="/oaxaca-centro/esteticas-grooming" className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-orange-500 transition-colors">Grooming</Link>
                    <Link href="/oaxaca-centro/pet-friendly" className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-orange-500 transition-colors">Pet Friendly</Link>

                    <div className="h-6 w-[1px] bg-slate-100"></div>

                    <a
                        href="https://wa.me/526563230397"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 hover:scale-[1.02] active:scale-95"
                    >
                        <LucideIcons.PlusCircle size={16} /> Sumar mi Negocio
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-3 bg-orange-50 rounded-2xl text-orange-600 hover:bg-orange-100 transition-colors"
                >
                    {isMenuOpen ? <LucideIcons.X size={24} /> : <LucideIcons.Menu size={24} strokeWidth={2.5} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-orange-100 shadow-2xl animate-fade-in">
                    <nav className="flex flex-col p-6 gap-6">
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-black uppercase tracking-widest text-slate-600 hover:text-orange-500"
                        >
                            Inicio
                        </Link>
                        <Link
                            href="/oaxaca-centro/veterinarias"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-black uppercase tracking-widest text-slate-600 hover:text-orange-500"
                        >
                            Veterinarias
                        </Link>
                        <Link
                            href="/oaxaca-centro/esteticas-grooming"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-black uppercase tracking-widest text-slate-600 hover:text-orange-500"
                        >
                            Grooming
                        </Link>
                        <Link
                            href="/oaxaca-centro/pet-friendly"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-black uppercase tracking-widest text-slate-600 hover:text-orange-500"
                        >
                            Pet Friendly
                        </Link>
                        <a
                            href="https://wa.me/526563230397"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest"
                        >
                            <LucideIcons.PlusCircle size={16} /> Sumar mi Negocio
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
