'use client';

import { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { municipios } from '@/data/db';
import { categories } from '@/data/categories';

export default function SumarNegocioPage() {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        municipio: '',
        phone: '',
        description: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `Hola! Quiero registrar mi negocio en Mascotas Oaxaca:%0A%0A` +
            `*Nombre:* ${formData.name}%0A` +
            `*Categoría:* ${formData.category}%0A` +
            `*Municipio:* ${formData.municipio}%0A` +
            `*Teléfono:* ${formData.phone}%0A` +
            `*Descripción:* ${formData.description}`;

        const whatsappUrl = `https://wa.me/526563230397?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <div className="w-20 h-20 bg-orange-100 rounded-[2.5rem] flex items-center justify-center text-orange-600 mx-auto mb-8">
                        <LucideIcons.Store size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                        Suma tu <span className="text-orange-500">Negocio</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                        Completa los datos de tu negocio y te contactaremos por WhatsApp para finalizar tu registro en el directorio más grande de Oaxaca.
                    </p>
                </div>

                <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-orange-100 shadow-2xl shadow-orange-100/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16"></div>

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-2">Nombre del Negocio</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-8 py-5 rounded-[2rem] border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 bg-slate-50 transition-all font-bold placeholder:text-slate-300"
                                    placeholder="Ej. Veterinaria El Can"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-2">Teléfono de Contacto</label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-8 py-5 rounded-[2rem] border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 bg-slate-50 transition-all font-bold placeholder:text-slate-300"
                                    placeholder="Ej. 951 123 4567"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-2">Categoría Principal</label>
                                <div className="relative">
                                    <select
                                        required
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-8 py-5 rounded-[2rem] border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 bg-slate-50 transition-all font-bold appearance-none cursor-pointer"
                                    >
                                        <option value="">Selecciona una opción</option>
                                        {categories.map(cat => (
                                            <optgroup key={cat.id} label={cat.title}>
                                                {cat.subcategories.map(sub => (
                                                    <option key={sub.slug} value={sub.title}>{sub.title}</option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </select>
                                    <LucideIcons.ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-2">Municipio</label>
                                <div className="relative">
                                    <select
                                        required
                                        name="municipio"
                                        value={formData.municipio}
                                        onChange={handleChange}
                                        className="w-full px-8 py-5 rounded-[2rem] border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 bg-slate-50 transition-all font-bold appearance-none cursor-pointer"
                                    >
                                        <option value="">Selecciona municipio</option>
                                        {municipios.map(m => (
                                            <option key={m.id} value={m.name}>{m.name}</option>
                                        ))}
                                    </select>
                                    <LucideIcons.ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-2">Descripción de tus servicios</label>
                            <textarea
                                required
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-8 py-6 rounded-[2.5rem] border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 bg-slate-50 transition-all resize-none font-medium placeholder:text-slate-300"
                                placeholder="Cuéntanos qué ofreces y por qué los dueños de mascotas deben elegirte..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-6 bg-orange-500 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-600 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-3"
                        >
                            Registrar mi Negocio <LucideIcons.ArrowRight size={20} />
                        </button>
                        <p className="text-[10px] text-slate-400 text-center font-bold uppercase tracking-widest mt-4">
                            * Serás redirigido a WhatsApp para confirmar los datos.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
