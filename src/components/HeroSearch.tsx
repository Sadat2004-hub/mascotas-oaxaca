'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as LucideIcons from 'lucide-react';
import { ciudades } from '@/data/db';

export default function HeroSearch() {
    const [selectedCity, setSelectedCity] = useState('oaxaca');
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Navegar a la página de la ciudad. 
        // Si hay una búsqueda, podríamos pasarla como query param o manejarlo después.
        router.push(`/${selectedCity}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="max-w-4xl mx-auto bg-white p-3 rounded-[2.5rem] shadow-2xl shadow-orange-200/50 flex flex-col md:flex-row gap-2 border border-orange-50"
        >
            <div className="flex-1 flex items-center px-6 gap-3 border-r border-slate-100">
                <LucideIcons.MapPin className="text-orange-500 w-5 h-5" />
                <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="flex-1 bg-transparent border-none text-slate-700 font-bold focus:outline-none appearance-none cursor-pointer"
                >
                    {ciudades.map(c => (
                        <option key={c.id} value={c.slug}>{c.name}</option>
                    ))}
                </select>
            </div>
            <div className="flex-[2] flex items-center px-6 gap-3">
                <LucideIcons.Search className="text-orange-500 w-5 h-5" />
                <input
                    type="text"
                    placeholder="¿Qué servicio buscas hoy?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none text-slate-700 font-bold placeholder:text-slate-400 focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="bg-orange-500 text-white px-10 py-5 rounded-[2rem] font-black hover:bg-orange-600 transition-all shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
            >
                Buscar Ahora
            </button>
        </form>
    );
}
