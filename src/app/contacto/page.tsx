import * as LucideIcons from 'lucide-react';

export default function ContactPage() {
    const mainWhatsApp = "526563230397";

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="w-20 h-20 bg-orange-100 rounded-[2.5rem] flex items-center justify-center text-orange-600 mx-auto mb-8">
                        <LucideIcons.Mail size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                        ¡Estamos para <span className="text-orange-500">ayudarte!</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                        ¿Tienes dudas sobre cómo registrar tu negocio, reportar un error o simplemente quieres decir hola? Escríbenos directamente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-white p-10 rounded-[3rem] border border-orange-100 shadow-xl shadow-orange-100/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full -mr-12 -mt-12"></div>
                            <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tighter uppercase relative z-10">Contacto Directo</h2>
                            <div className="space-y-8 relative z-10">
                                <a
                                    href={`https://wa.me/${mainWhatsApp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-6 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                                        <LucideIcons.MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">WhatsApp Oficial</p>
                                        <p className="text-slate-900 font-bold text-xl group-hover:text-emerald-500 transition-colors">Abrir conversación</p>
                                    </div>
                                </a>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0 shadow-lg shadow-orange-100">
                                        <LucideIcons.Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Email</p>
                                        <p className="text-slate-900 font-bold text-lg">hola@mascotasoaxaca.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-500 p-10 rounded-[3rem] text-white shadow-2xl shadow-orange-200 relative overflow-hidden">
                            <LucideIcons.Dog size={120} className="absolute -bottom-6 -right-6 opacity-20 rotate-12" />
                            <h3 className="text-xl font-black mb-4 relative z-10">¿Dudas con tu registro?</h3>
                            <p className="text-orange-50 mb-8 font-medium italic relative z-10">"Nuestro equipo te ayudará a que tu negocio destaque en el directorio."</p>
                            <a
                                href={`https://wa.me/${mainWhatsApp}?text=Hola! Necesito ayuda con mi registro en Mascotas Oaxaca`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-all shadow-xl relative z-10"
                            >
                                Atención Clientes
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] border border-orange-100 shadow-xl shadow-orange-100/50">
                        <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Envíanos un Correo</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">Nombre Completo</label>
                                <input type="text" className="w-full px-8 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 bg-slate-50 transition-all font-bold placeholder:text-slate-300" placeholder="Ej. Juan Pérez" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">Email</label>
                                <input type="email" className="w-full px-8 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 bg-slate-50 transition-all font-bold placeholder:text-slate-300" placeholder="juan@ejemplo.com" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">Mensaje</label>
                                <textarea rows={4} className="w-full px-8 py-6 rounded-[2.5rem] border border-slate-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 bg-slate-50 transition-all resize-none font-medium placeholder:text-slate-300" placeholder="¿En qué podemos ayudarte?" />
                            </div>
                            <button disabled className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] opacity-50 cursor-not-allowed">
                                Próximamente
                            </button>
                            <p className="text-[10px] text-center text-slate-400 font-bold italic">Por ahora, la atención más rápida es vía WhatsApp.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
